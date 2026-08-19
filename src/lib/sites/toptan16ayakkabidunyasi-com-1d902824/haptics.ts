// Fires a short vibration on devices/browsers that support the Vibration
// API (mainly Android Chrome — iOS Safari has no support and silently
// no-ops here). Purely a feel-good enhancement, never required for a flow
// to work.
export function hapticTap() {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(12);
  }
}
