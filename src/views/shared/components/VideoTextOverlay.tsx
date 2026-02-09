"use client";

import { useState, useEffect } from "react";
import type { VideoCue, VideoCuePosition } from "../types";

type OverlayVariant = "disad" | "adv";

interface VideoTextOverlayProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  cues: VideoCue[];
  defaultVideoSize?: { width: number; height: number };
  className?: string;
  variant?: OverlayVariant;
}

const DEFAULT_VIDEO_SIZE = { width: 4096, height: 2008 };

function positionPxToPercent(
  positionPx: { x: number; y: number; width: number; height: number },
  videoSize: { width: number; height: number },
): React.CSSProperties {
  const { x, y, width } = positionPx;
  const { width: vw, height: vh } = videoSize;
  return {
    left: `${(x / vw) * 100}%`,
    top: `${(y / vh) * 100}%`,
    maxWidth: `${(width / vw) * 100}%`,
  };
}

function getPositionStyles(
  position: VideoCuePosition | undefined,
): React.CSSProperties {
  if (!position)
    return { bottom: "8%", left: "50%", transform: "translateX(-50%)" };
  if (position === "top")
    return { top: "8%", left: "50%", transform: "translateX(-50%)" };
  if (position === "center")
    return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  if (position === "bottom")
    return { bottom: "8%", left: "50%", transform: "translateX(-50%)" };
  const p = position as {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  };
  const s: React.CSSProperties = {};
  if (p.top != null) s.top = p.top;
  if (p.left != null) s.left = p.left;
  if (p.bottom != null) s.bottom = p.bottom;
  if (p.right != null) s.right = p.right;
  if (p.left === "50%" && p.right === undefined)
    s.transform = "translateX(-50%)";
  else if (p.left === "50%" && p.top === "50%")
    s.transform = "translate(-50%, -50%)";
  return s;
}

export function VideoTextOverlay({
  videoRef,
  cues,
  defaultVideoSize = DEFAULT_VIDEO_SIZE,
  className = "",
}: VideoTextOverlayProps) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    video.addEventListener("timeupdate", onTimeUpdate);
    setCurrentTime(video.currentTime);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [videoRef]);

  const activeCues = cues.filter(
    (c) => c.start <= currentTime && currentTime < c.end,
  );
  if (activeCues.length === 0) return null;

  return (
    <>
      {activeCues.map((cue) => {
        const videoSize = cue.videoSize ?? defaultVideoSize;
        const usePx =
          cue.positionPx &&
          videoSize &&
          cue.positionPx.width > 0 &&
          cue.positionPx.height > 0;
        const positionStyles =
          usePx && cue.positionPx
            ? positionPxToPercent(cue.positionPx, videoSize)
            : getPositionStyles(cue.position);
        const sizeStyles: React.CSSProperties = {};
        if (!usePx && cue.width != null) sizeStyles.maxWidth = cue.width;
        return (
          <div
            key={`${cue.start}-${cue.end}-${cue.text.slice(0, 24)}`}
            className={`absolute pointer-events-none flex items-center gap-2 py-4 px-0 text-base font-semibold leading-loose whitespace-pre-wrap overflow-auto ${className}`}
            style={{
              ...positionStyles,
              ...sizeStyles,
            }}
          >
            <span
              className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#cf7b88] text-white text-xl font-bold"
              aria-hidden
            >
              !
            </span>
            <span
              className="text-[#333333] whitespace-pre-line leading-6"
              style={{ fontSize: "clamp(0.5rem, 1.1vw, 0.8rem)" }}
            >
              {cue.text}
            </span>
          </div>
        );
      })}
    </>
  );
}
