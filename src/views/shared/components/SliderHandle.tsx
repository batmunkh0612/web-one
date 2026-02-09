import { ChevronsLeftRight } from "lucide-react";
import type React from "react";

interface SliderHandleProps {
  position: number;
  onMouseDown: () => void;
  onTouchMove?: (e: React.TouchEvent) => void;
}

export function SliderHandle({
  position,
  onMouseDown,
  onTouchMove,
}: SliderHandleProps) {
  return (
    <button
      type="button"
      className="absolute top-0 bottom-0 z-20 flex w-8 -translate-x-1/2 cursor-col-resize items-center justify-center border-0 bg-transparent p-0 focus:outline-none"
      style={{ left: `calc(${position}% - 0.5px)` }}
      onMouseDown={onMouseDown}
      onPointerDown={onMouseDown}
      onTouchStart={onTouchMove != null ? onMouseDown : undefined}
      onTouchMove={onTouchMove}
      aria-label="Drag to compare before and after"
    >
      <div className="h-[92%] w-[3px] rounded-[50%] bg-linear-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_10px_rgba(96,165,250,0.9)]" />

      <div className="absolute flex items-center justify-center bg-white rounded-full size-8">
        <ChevronsLeftRight className="w-6 h-6 text-blue-400/90" />
        </div>
    </button>
  );
}