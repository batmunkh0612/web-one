'use client';

import { useEffect, useRef } from 'react';
import { DeviceFeatureList } from './DeviceFeatureList';
import type { DeviceVideoContent } from '../deviceContent';
import { getDeviceContent } from '../deviceContent';

interface VideoDialogProps {
  open: boolean;
  videoSrc: string;
  onClose: () => void;
  content?: DeviceVideoContent;
}

export function VideoDialog({ open, videoSrc, onClose, content }: VideoDialogProps) {
  const { title, model, features } = content ?? getDeviceContent(videoSrc);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label="Video dialog"
    >
      <button
        type="button"
        className="absolute inset-0 border-0 bg-transparent p-0"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        aria-label="Close dialog"
      />
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col items-center p-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-2 -top-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/75 text-white transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Close video"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative">
          <video
            ref={videoRef}
            src={videoSrc}
            className="max-h-[85vh] w-auto rounded-lg shadow-xl block"
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          >
            <track kind="captions" />
          </video>
          <div className="absolute inset-0 z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 p-4 md:p-6 lg:p-8 xl:p-10 pointer-events-none items-stretch">
            <div className="flex flex-col justify-start">
              <h2 className="ml-20 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide drop-shadow-md uppercase">
                {title}
              </h2>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3 mt-4 lg:mt-0 flex-1 min-h-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-200 drop-shadow-lg leading-none tracking-wide shrink-0">
                {model}
              </h1>
              <div className="mt-8 pointer-events-auto min-h-0 flex flex-col">
                <div className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-4xl p-4 md:p-5 lg:p-6 xl:p-8 shadow-2xl flex flex-col flex-1 min-h-0">
                  <DeviceFeatureList features={features} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
