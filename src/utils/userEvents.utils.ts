/**
 * utility function for triggering cb function on ESCAPE
 *
 * @param {KeyboardEvent} e keyboard event object
 * @param {Function} cb callback function
 */
export function onEscapeKeyDown(e: KeyboardEvent, cb: () => void): void {
  if (e.key === "27" || e.key === "Escape") {
    cb();
  }
}
