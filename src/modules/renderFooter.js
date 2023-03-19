export const renderFooter = function (data) {
  return `
      <div class="footer__description">
        ${data['Auto-renewable. Cancel anytime.']}
      </div>
      <div class="footer__menu">
        <a class="footer__link" href="#">
          ${data['Terms of Use']}
        </a>
        <a class="footer__link" href="#">
          ${data['Privacy Policy']}
        </a>
      </div>
      <div class="footer__line">
      </div>
`;
};
