'use client';

import { useState, useEffect } from 'react';
import type { AdvCue, VideoCuePosition } from '../types';

interface AdvTextOverlayProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  cues: AdvCue[];
  defaultVideoSize?: { width: number; height: number };
  className?: string;
}

const DEFAULT_VIDEO_SIZE = { width: 4096, height: 2008 };

function positionPxToPercent(
  positionPx: { x: number; y: number; width: number; height: number },
  videoSize: { width: number; height: number }
): React.CSSProperties {
  const { x, y, width } = positionPx;
  const { width: vw, height: vh } = videoSize;
  return {
    left: `${(x / vw) * 100}%`,
    top: `${(y / vh) * 100}%`,
    maxWidth: `${(width / vw) * 100}%`,
  };
}

function getPositionStyles(position: VideoCuePosition | undefined): React.CSSProperties {
  if (!position) return { bottom: '8%', left: '50%', transform: 'translateX(-50%)' };
  if (position === 'top') return { top: '8%', left: '50%', transform: 'translateX(-50%)' };
  if (position === 'center') return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
  if (position === 'bottom') return { bottom: '8%', left: '50%', transform: 'translateX(-50%)' };
  const p = position as { top?: string; left?: string; bottom?: string; right?: string };
  const s: React.CSSProperties = {};
  if (p.top != null) s.top = p.top;
  if (p.left != null) s.left = p.left;
  if (p.bottom != null) s.bottom = p.bottom;
  if (p.right != null) s.right = p.right;
  if (p.left === '50%' && p.right === undefined) s.transform = 'translateX(-50%)';
  else if (p.left === '50%' && p.top === '50%') s.transform = 'translate(-50%, -50%)';
  return s;
}

export function AdvTextOverlay({
  videoRef,
  cues,
  defaultVideoSize = DEFAULT_VIDEO_SIZE,
  className = '',
}: AdvTextOverlayProps) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    video.addEventListener('timeupdate', onTimeUpdate);
    setCurrentTime(video.currentTime);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, [videoRef]);

  const activeCues = cues.filter((c) => c.start <= currentTime && currentTime < c.end);
  if (activeCues.length === 0) return null;

  return (
    <>
      {activeCues.map((cue) => {
        const videoSize = cue.videoSize ?? defaultVideoSize;
        const usePx =
          cue.positionPx && videoSize && cue.positionPx.width > 0 && cue.positionPx.height > 0;
        const positionStyles =
          usePx && cue.positionPx
            ? positionPxToPercent(cue.positionPx, videoSize)
            : getPositionStyles(cue.position);
        const sizeStyles: React.CSSProperties = {};
        if (!usePx && cue.width != null) sizeStyles.maxWidth = cue.width;
        return (
          <div
            key={`${cue.start}-${cue.end}-${cue.header.slice(0, 24)}`}
            className={`absolute pointer-events-none flex flex-col gap-1 py-4 px-0 text-base whitespace-pre-wrap overflow-auto ${className}`}
            style={{
              ...positionStyles,
              ...sizeStyles,
            }}
          >
            <span className="text-black font-extrabold leading-tight">{cue.header}</span>
            <span className="text-black whitespace-pre-line leading-6"
            style={{ fontSize: 'clamp(0.5rem, 1.1vw, 0.8rem)' }}
            >{cue.subtext}</span>
          </div>
        );
      })}
    </>
  );
}
