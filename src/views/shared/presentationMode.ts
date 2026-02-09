export function isPresentationMode(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isEdge = /\bEdg\b/.test(ua);
  const isWindows = /\bWindows\b/.test(ua);
  if (isEdge && isWindows) return true;
  return false;
}
