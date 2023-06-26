export function supportsFullscreen(): boolean {
  const bodyElement = document.documentElement as HTMLElement;

  return !!bodyElement.requestFullscreen;
}
