import './index.html';
import './index.css';

import { createURL } from './modules/createURL';
import { renderHeader } from './modules/renderHeader';
import { renderMain } from './modules/renderMain';
import { renderFooter } from './modules/renderFooter';
import en from './localizations/en.json';
import es from './localizations/es.json';
import fr from './localizations/fr.json';
import ja from './localizations/ja.json';
import nl from './localizations/nl.json';
import ru from './localizations/ru.json';
import zh from './localizations/zh.json';
import closeImg from './assets/close.svg';
import unlimited from './assets/unlimitedDocs.svg';
import exportArrow from './assets/export.svg';
import textImg from './assets/noAds.svg';

const HEADER = document.querySelector('.header');
const MAIN = document.querySelector('.main');
const FOOTER = document.querySelector('.footer');

const PRICE_MONTH = '$ 9.99';
const PRICE_YEAR = '$ 19.99';
const PRICE_DISCOUNT = '$ 1.66';

// const languageArr = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];
const languageArr = ['en', 'es', 'fr', 'ja', 'nl', 'zh'];

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
    MAIN.innerHTML = renderMain(
      es,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(es);
    break;
  case 'fr':
    HEADER.innerHTML = renderHeader(fr, closeImg);
    MAIN.innerHTML = renderMain(
      fr,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(fr);
    break;
  case 'ja':
    HEADER.innerHTML = renderHeader(ja, closeImg);
    MAIN.innerHTML = renderMain(
      ja,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(ja);
    break;
  case 'nl':
    HEADER.innerHTML = renderHeader(nl, closeImg);
    MAIN.innerHTML = renderMain(
      nl,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(nl);
    break;
  case 'ru':
    HEADER.innerHTML = renderHeader(ru, closeImg);
    MAIN.innerHTML = renderMain(
      ru,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(ru);
    break;
  case 'zh':
    HEADER.innerHTML = renderHeader(zh, closeImg);
    MAIN.innerHTML = renderMain(
      zh,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(zh);
    break;
  default:
    HEADER.innerHTML = renderHeader(en, closeImg);
    MAIN.innerHTML = renderMain(
      en,
      PRICE_MONTH,
      PRICE_YEAR,
      PRICE_DISCOUNT,
      unlimited,
      exportArrow,
      textImg
    );
    FOOTER.innerHTML = renderFooter(en);
}