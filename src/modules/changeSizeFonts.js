export const changeSizeFonts = function (el) {
  while (el.scrollHeight > el.clientHeight) {
    let newFontSize =
      window.getComputedStyle(el).getPropertyValue('font-size').slice(0, -2) -
      7;
    el.style.fontSize = newFontSize + 'px';
  }
};
