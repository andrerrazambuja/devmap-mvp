import { register, init, getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';

register('pt', () => import('./locales/pt.json'));
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

export function initializeI18n() {
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  return waitLocale();
}

export function changeLocale(newLocale) {
  locale.set(newLocale);
}
