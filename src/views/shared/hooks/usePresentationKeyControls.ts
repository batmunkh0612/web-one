import { useEffect } from 'react';

export interface PresentationKeyControlsOptions {
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onEscape?: () => void;
}

export function usePresentationKeyControls(
  options: PresentationKeyControlsOptions = {}
) {
  const { onArrowLeft, onArrowRight, onEscape } = options;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const alt = e.altKey;

      if (key === 'Backspace' || key === 'Escape') {
        e.preventDefault();
        if (key === 'Escape' && onEscape) onEscape();
        return;
      }
      if (key === 'BrowserBack' || (alt && key === 'ArrowLeft')) {
        e.preventDefault();
        return;
      }

      if (key === 'ArrowLeft') {
        e.preventDefault();
        onArrowLeft?.();
        return;
      }
      if (key === 'ArrowRight') {
        e.preventDefault();
        onArrowRight?.();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [onArrowLeft, onArrowRight, onEscape]);
}
