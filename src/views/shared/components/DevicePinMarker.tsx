'use client';

import type { DeviceZone } from '../types';

export interface DevicePinMarkerProps extends DeviceZone {
  id: string;
  label: string;
  onClick: () => void;
}

export function DevicePinMarker({
  id,
  x,
  y,
  width,
  height,
  label,
  onClick,
}: DevicePinMarkerProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      title={label}
      aria-label={label}
      data-pin-id={id}
      className="absolute z-10 cursor-pointer outline-none focus:outline-none focus:ring-0 active:outline-none transition-[background,border-color] duration-200 border-0 p-0 bg-transparent"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    />
  );
}

export default DevicePinMarker;
