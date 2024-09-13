import { browser } from '$app/environment';
import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

const defaultLocale = 'pl';

register('en', () => import('./locales/en.json'));
register('pl', () => import('./locales/pl.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? getLocaleFromNavigator() : defaultLocale
});
