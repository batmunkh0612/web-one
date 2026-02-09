"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AdvTextOverlay } from "../shared/components/AdvTextOverlay";
import { DevicePinMarker } from "../shared/components/DevicePinMarker";
import { SliderHandle } from "../shared/components/SliderHandle";
import { VideoDialog } from "../shared/components/VideoDialog";
import { VideoTextOverlay } from "../shared/components/VideoTextOverlay";
import { useBackNavigationGuard } from "../shared/hooks/useBackNavigationGuard";
import { usePresentationKeyControls } from "../shared/hooks/usePresentationKeyControls";
import { useSliderDrag } from "../shared/hooks/useSliderDrag";
import { useVideoSync } from "../shared/hooks/useVideoSync";
import { isPresentationMode } from "../shared/presentationMode";
import { HOTEL_ADV_CUES } from "./hotelAdvCues";
import { HOTEL_DEVICE_PINS } from "./hotelDevicePins";
import { HOTEL_DISAD_CUES } from "./hotelDisadCues";

const FALLBACK_VIDEO_SIZE = { width: 4096, height: 2008 };

export default function HotelView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  const [videoDialogState, setVideoDialogState] = useState<
    { open: true; videoSrc: string } | { open: false }
  >({ open: false });

  const [videoSize, setVideoSize] = useState(FALLBACK_VIDEO_SIZE);
  const videoAspect = videoSize.width / videoSize.height;

  const handleLoadedMetadata = (el: HTMLVideoElement | null) => {
    if (!el) return;
    const w = el.videoWidth || FALLBACK_VIDEO_SIZE.width;
    const h = el.videoHeight || FALLBACK_VIDEO_SIZE.height;
    setVideoSize((prev) =>
      prev.width === w && prev.height === h ? prev : { width: w, height: h },
    );
  };

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setContainerSize({ width: r.width, height: r.height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const stageSize = useMemo(() => {
    const { width: W, height: H } = containerSize;
    if (!W || !H) return { width: 0, height: 0 };
    if (W / H > videoAspect) {
      return { width: H * videoAspect, height: H };
    }
    return { width: W, height: W / videoAspect };
  }, [containerSize, videoAspect]);

  const presentationMode = isPresentationMode();
  const {
    sliderPosition,
    handleMouseDown,
    handleTouchMove,
    stepSliderLeft,
    stepSliderRight,
  } = useSliderDrag(stageRef, { disableTouchGesture: presentationMode });

  useBackNavigationGuard();
  usePresentationKeyControls({
    onArrowLeft: stepSliderLeft,
    onArrowRight: stepSliderRight,
  });

  const stageOffsetX = (containerSize.width - stageSize.width) / 2;

  const sliderHandleLeftPct =
    containerSize.width > 0
      ? ((stageOffsetX + stageSize.width * (sliderPosition / 100)) /
          containerSize.width) *
        100
      : sliderPosition;

  const beforeClipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
  const afterClipPath = `inset(0 0 0 ${sliderPosition}%)`;

  useVideoSync(beforeVideoRef, afterVideoRef);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-900 overscroll-contain touch-none"
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison slider"
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          ref={stageRef}
          className="relative pointer-events-auto"
          style={{
            width: stageSize.width ? `${stageSize.width}px` : "100%",
            height: stageSize.height ? `${stageSize.height}px` : "100%",
          }}
        >
          <h1
            className="absolute left-15 top-20 z-40
    pointer-events-none select-none
    uppercase font-extrabold leading-none
    text-white/20
    text-[80px]"
          >
            {sliderPosition >= 25 ? "Асуудал" : "Шийдэл"}
          </h1>
          <video
            ref={beforeVideoRef}
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: beforeClipPath, objectFit: "fill" }}
            src="/videos/hotel/hotel_before.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            onLoadedMetadata={(e) => handleLoadedMetadata(e.currentTarget)}
          />

          <video
            ref={afterVideoRef}
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: afterClipPath, objectFit: "fill" }}
            src="/videos/hotel/hotel_after.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            onLoadedMetadata={(e) => handleLoadedMetadata(e.currentTarget)}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: beforeClipPath }}
          >
            <VideoTextOverlay
              videoRef={beforeVideoRef}
              cues={HOTEL_DISAD_CUES}
              defaultVideoSize={videoSize}
              variant="disad"
            />
          </div>

          <div className="absolute inset-0" style={{ clipPath: afterClipPath }}>
            <div className="absolute inset-0 pointer-events-none">
              <AdvTextOverlay
                videoRef={afterVideoRef}
                cues={HOTEL_ADV_CUES}
                defaultVideoSize={videoSize}
              />
            </div>

            <div className="absolute inset-0 pointer-events-auto">
              {HOTEL_DEVICE_PINS.map((pin) => (
                <DevicePinMarker
                  key={pin.id}
                  id={pin.id}
                  x={pin.x}
                  y={pin.y}
                  width={pin.width}
                  height={pin.height}
                  label={pin.label}
                  onClick={() =>
                    setVideoDialogState({ open: true, videoSrc: pin.videoSrc })
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <SliderHandle
        position={sliderHandleLeftPct}
        onMouseDown={handleMouseDown}
        onTouchMove={presentationMode ? undefined : handleTouchMove}
      />

      <VideoDialog
        open={videoDialogState.open}
        videoSrc={videoDialogState.open ? videoDialogState.videoSrc : ""}
        onClose={() => setVideoDialogState({ open: false })}
      />
    </div>
  );
}
