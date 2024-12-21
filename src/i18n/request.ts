import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { LocaleProps } from '@/types/locale.type';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as LocaleProps)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});