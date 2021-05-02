import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../translations/en.json';
import pr from '../translations/pr.json';
let localeKey = 'locale';
(async () => {
  let lc = await AsyncStorage.getItem(localeKey);
  console.log(lc);
  i18n.defaultLocale = 'en';
  i18n.locale = lc ? lc : 'en';
  i18n.fallbacks = true;
  i18n.translations = {en, pr};
})();

export const changeLanguage = async language => {
  await AsyncStorage.setItem(localeKey, language);
  i18n.locale = language;
};

export const translate = words => {
  return i18n.t(words);
};

export const localLang = () => {
  console.warn(i18n.locale)
  return i18n.locale;
};
