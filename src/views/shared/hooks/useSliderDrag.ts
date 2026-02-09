import { useCallback, useEffect, useRef, useState } from 'react';
import { INITIAL_SLIDER_POSITION, SLIDER_KEYBOARD_STEP } from '../constants';
import { calculatePercentage, clamp } from '../utils';

export interface UseSliderDragOptions {
  disableTouchGesture?: boolean;
}

export function useSliderDrag(
  containerRef: React.RefObject<HTMLDivElement | null>,
  options: UseSliderDragOptions = {}
) {
  const { disableTouchGesture = false } = options;
  const [sliderPosition, setSliderPosition] = useState(INITIAL_SLIDER_POSITION);
  const [isDragging, setIsDragging] = useState(false);
  const rafRef = useRef<number | null>(null);

  const schedulePosition = useCallback((percentage: number) => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setSliderPosition(percentage);
    });
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const updateFromClientX = (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const percentage = calculatePercentage(clientX, rect);
      schedulePosition(percentage);
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateFromClientX(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateFromClientX(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const supportsPointerEvents =
      typeof window !== 'undefined' &&
      typeof (window as unknown as { PointerEvent?: unknown }).PointerEvent !==
        'undefined';

    if (supportsPointerEvents) {
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (supportsPointerEvents) {
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [isDragging, containerRef, schedulePosition]);

  const handleMouseDown = () => setIsDragging(true);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (disableTouchGesture || !containerRef.current) return;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const percentage = calculatePercentage(touch.clientX, rect);
      schedulePosition(percentage);
    },
    [disableTouchGesture, containerRef, schedulePosition]
  );

  const stepSlider = useCallback((delta: number) => {
    setSliderPosition((prev) => clamp(prev + delta, 0, 100));
  }, []);

  const stepSliderLeft = useCallback(
    () => stepSlider(-SLIDER_KEYBOARD_STEP),
    [stepSlider]
  );
  const stepSliderRight = useCallback(
    () => stepSlider(SLIDER_KEYBOARD_STEP),
    [stepSlider]
  );

  return {
    sliderPosition,
    isDragging,
    handleMouseDown,
    handleTouchMove,
    stepSlider,
    stepSliderLeft,
    stepSliderRight,
  };
}
