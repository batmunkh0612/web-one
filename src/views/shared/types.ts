export type VideoCuePosition =
  | 'top'
  | 'center'
  | 'bottom'
  | { top?: string; left?: string; bottom?: string; right?: string };

export interface VideoCuePositionPx {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface VideoCue {
  start: number;
  end: number;
  text: string;
  position?: VideoCuePosition;
  width?: string;
  height?: string;
  positionPx?: VideoCuePositionPx;
  videoSize?: { width: number; height: number };
}

export interface AdvCue extends Omit<VideoCue, 'text'> {
  header: string;
  subtext: string;
}

export interface DeviceZone {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DevicePin extends DeviceZone {
  id: string;
  label: string;
  videoSrc: string;
}
