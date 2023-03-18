export const updateURL = function (lang) {
  if (history.pushState) {
    const baseUrl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    const newUrl = baseUrl + `?lang=${lang}`;
    history.pushState(null, null, newUrl);
  } else {
    console.warn('History API не поддерживается');
  }
};
