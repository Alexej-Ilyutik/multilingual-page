import './index.html';
import './index.css';

import { updateURL } from './modules/createURL';

const languageArr = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];

let userLanguage = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : 'en';

userLanguage = userLanguage.substr(0, 2).toLowerCase();

const currentURLParam = document.location.search;
const searchLanguage = new URLSearchParams(currentURLParam);
let currentLang = searchLanguage.get('lang');


languageArr.includes(userLanguage)
  ? (currentLang = userLanguage)
  : (currentLang = 'en');

updateURL(currentLang);

console.log(currentLang);