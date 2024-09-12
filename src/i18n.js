// src/i18n.js
import { register, init, getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';

// Registrar os idiomas
register('pt', () => import('./locales/pt.json'));
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

// Inicializar svelte-i18n
export function initializeI18n() {
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  // Espera até que o locale esteja carregado
  return waitLocale();
}

// Função para alterar o idioma dinamicamente
export function changeLocale(newLocale) {
  locale.set(newLocale);
}
