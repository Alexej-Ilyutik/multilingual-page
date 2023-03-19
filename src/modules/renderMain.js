export const renderMain = function (
  data,
  priceMonth,
  priceYear,
  priceMonthDiscount,
  unlim,
  exportArrow,
  text
) {
  const templateVariableRe = /\{\{(.*?)\}\}/g;
  const exportToClouds = data['Export to clouds']
    ? `
    <div class="description">
      <div class="description__img">
        <img src="${exportArrow}" alt="export">
      </div>
      <div class="description__text">
        ${data['Export to clouds']}
      </div>
    </div>`
    : '';

  return `
      <h1 class="main__title">
        ${data['Unlimited Access<br>to All Features']}
      </h1>
      <div class="main__description">
        <div class="description">
          <div class="description__img">
            <img src="${unlim}" alt="unlimited">
          </div>
          <div class="description__text">
             ${data['Unlimited documents']}
          </div>
        </div>
        ${exportToClouds}
        <div class="description">
          <div class="description__img">
            <img src="${text}" alt="text recognition">
          </div>
          <div class="description__text">
             ${data['Text recognition (OCR)']}
          </div>
        </div>
      </div>
      
      <div class="main__price">
        <div class="price price-active card1">
          <h3 class="price__title">${data['Monthly']}</h3>
          <div class="price__value">${data[
            '<strong>{{price}}</strong><br>per month'
          ].replace(templateVariableRe, priceMonth)}</div>
          <div class="price__description">${data['3 DAYS FREE']}</div>
          <div class="price__value-repeat">${data['{{price}}/month'].replace(
            templateVariableRe,
            priceMonth
          )}</div>
        </div>
        
        <div class="price price__action card2">
          <div class="price__discount">${data['-83%']}</div> 
          <h3 class="price__title">${data['Annually']}</h3>
          <div class="price__value">${data[
            '<strong>{{price}}</strong><br>per year'
          ].replace(templateVariableRe, priceYear)}</div>
          <div class="price__description">${data['MOST POPULAR']}</div>
          <div class="price__value-repeat">${data['{{price}}/month'].replace(
            templateVariableRe,
            priceMonthDiscount
          )}</div>
        </div>

        
      </div>
      <a class="btn link" href="https://apple.com/" >${data['Continue']}</a>
`;
};
