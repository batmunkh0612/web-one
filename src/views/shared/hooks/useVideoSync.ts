import { useEffect } from 'react';
import { TIME_SYNC_THRESHOLD } from '../constants';

export function useVideoSync(
  beforeVideoRef: React.RefObject<HTMLVideoElement | null>,
  afterVideoRef: React.RefObject<HTMLVideoElement | null>
) {
  useEffect(() => {
    const beforeVideo = beforeVideoRef.current;
    const afterVideo = afterVideoRef.current;

    if (!beforeVideo || !afterVideo) return;

    const playBoth = () => {
      beforeVideo.play().catch(() => {});
      afterVideo.play().catch(() => {});
    };
    if (beforeVideo.readyState >= 2) playBoth();
    else beforeVideo.addEventListener('canplay', playBoth, { once: true });

    const syncPlay = (_primary: HTMLVideoElement, secondary: HTMLVideoElement) => () => {
      if (secondary.paused) secondary.play();
    };

    const syncPause = (_primary: HTMLVideoElement, secondary: HTMLVideoElement) => () => {
      if (!secondary.paused) secondary.pause();
    };

    const syncTime = (primary: HTMLVideoElement, secondary: HTMLVideoElement) => () => {
      if (Math.abs(primary.currentTime - secondary.currentTime) > TIME_SYNC_THRESHOLD) {
        secondary.currentTime = primary.currentTime;
      }
    };

    const handleBeforePlay = syncPlay(beforeVideo, afterVideo);
    const handleAfterPlay = syncPlay(afterVideo, beforeVideo);
    const handleBeforePause = syncPause(beforeVideo, afterVideo);
    const handleAfterPause = syncPause(afterVideo, beforeVideo);
    const handleBeforeTimeUpdate = syncTime(beforeVideo, afterVideo);

    beforeVideo.addEventListener('play', handleBeforePlay);
    afterVideo.addEventListener('play', handleAfterPlay);
    beforeVideo.addEventListener('pause', handleBeforePause);
    afterVideo.addEventListener('pause', handleAfterPause);
    beforeVideo.addEventListener('timeupdate', handleBeforeTimeUpdate);

    return () => {
      beforeVideo.removeEventListener('canplay', playBoth);
      beforeVideo.removeEventListener('play', handleBeforePlay);
      afterVideo.removeEventListener('play', handleAfterPlay);
      beforeVideo.removeEventListener('pause', handleBeforePause);
      afterVideo.removeEventListener('pause', handleAfterPause);
      beforeVideo.removeEventListener('timeupdate', handleBeforeTimeUpdate);
    };
  }, [beforeVideoRef, afterVideoRef]);
}
