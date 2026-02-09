export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function calculatePercentage(clientX: number, rect: DOMRect): number {
  const x = clientX - rect.left;
  return clamp((x / rect.width) * 100, 0, 100);
}
