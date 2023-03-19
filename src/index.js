import './index.html';
import './index.css';

import { createURL } from './modules/createURL';
import { renderHeader } from './modules/renderHeader';
import en from './localizations/en.json';
import es from './localizations/es.json';
import fr from './localizations/fr.json';
import ja from './localizations/ja.json';
import nl from './localizations/nl.json';
import ru from './localizations/ru.json';
import zh from './localizations/zh.json';
import closeImg from './assets/close.svg';

const HEADER = document.querySelector('.header');
const MAIN = document.querySelector('.main');
const FOOTER = document.querySelector('.footer');

const languageArr = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];

let userLanguage = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : 'en';

userLanguage = userLanguage.substr(0, 2).toLowerCase();

languageArr.includes(userLanguage) ? createURL(userLanguage) : createURL('en');

const currentURLParam = document.location.search;
const searchLanguage = new URLSearchParams(currentURLParam);
let currentLang = searchLanguage.get('lang');

switch (currentLang) {
  case 'es':
    HEADER.innerHTML = renderHeader(es, closeImg);
    break;
  case 'fr':
    HEADER.innerHTML = renderHeader(fr, closeImg);
    break;
  case 'ja':
    HEADER.innerHTML = renderHeader(ja, closeImg);
    break;
  case 'nl':
    HEADER.innerHTML = renderHeader(nl, closeImg);
    break;
  case 'ru':
    HEADER.innerHTML = renderHeader(ru, closeImg);
    break;
  case 'zh':
    HEADER.innerHTML = renderHeader(zh, closeImg);
    break;
  default:
    HEADER.innerHTML = renderHeader(en, closeImg);
}

// function templ(data, priceMonth, priceYear) {
//   const templateVariableRe = /\{\{(.*?)\}\}/g;
//   return `
//     <div>${data['Count mode']}</div>
//     <h1>${data['Unlimited Access<br>to All Features']}</h1>
//     <h5>${data['{{price}}/month'].replace(
//       templateVariableRe,
//       priceMonth
//     )}</h5>`;
// }

// x.innerHTML = templ(en, 85);

// const templateVariableRe = /\{\{(.*?)\}\}/g;
// const template = 'some template with {{ variable }} with anotherVariable';
// console.log(template.replace(templateVariableRe, '355'));

console.log(currentLang);
