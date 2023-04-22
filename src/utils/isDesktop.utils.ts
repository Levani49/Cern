export function isDesktop(): boolean {
  const userAgent = window.navigator.userAgent;
  const mobileKeywords = ['Android', 'iPhone', 'iPod', 'iPad', 'Windows Phone', 'BlackBerry'];

  return !mobileKeywords.some((keyword) => userAgent.includes(keyword));
}
