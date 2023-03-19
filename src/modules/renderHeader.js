export const renderHeader = function (data, img) {
  return `
    <div class="header__container">
      <div class="header__close">
        <a class="close__link link" href="#">
          <img src="${img}" alt="close">
        </a>
      </div>
      <div class="header__menu">
        <a class="menu__link link" href="#">
          ${data['Restore']}
        </a>
      </div>
    </div>
`;
};
