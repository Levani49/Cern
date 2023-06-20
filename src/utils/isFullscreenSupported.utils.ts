export function isFullscreenSupported(): boolean {
  const bodyElement = document.documentElement as HTMLElement;

  return !!bodyElement.requestFullscreen;
}
