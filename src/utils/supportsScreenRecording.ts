export function supportsScreenRecording(): boolean {
  if ("mediaDevices" in navigator && "getDisplayMedia" in navigator.mediaDevices) {
    return true;
  }

  return false;
}
