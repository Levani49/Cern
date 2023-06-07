export function onEscapeKeyDown(e: KeyboardEvent, cb: () => void): void {
  if (e.key === "27" || e.key === "Escape") {
    cb();
  }
}
