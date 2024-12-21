import { routing } from '@/i18n/routing';
import '@/styles/globals.css';
import '@/styles/scss/_config.scss';
import { LocaleRouteParams } from '@/types/routeParams';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReduxProvider } from '@/redux/ReduxProvider';
import { getURL } from '@/utils/helpers';
import { TFunction } from '@/i18n/types';

interface LocaleLayoutProps extends LocaleRouteParams {
  children: React.ReactNode;
}

export async function generateMetadata({ params }: LocaleRouteParams) {
  const { locale } = await params;
  const t = (await getTranslations({ locale })) as TFunction;

  return {
    title: t('LocaleLayout.title'),
    description: t('LocaleLayout.description'),
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'Supabase', 'Boilerplate'],
    authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
    creator: 'Vercel',
    publisher: 'Vercel',
    robots: t('LocaleLayout.robots'),
    icons: { icon: t('LocaleLayout.favicon') },
    metadataBase: new URL(getURL()),
    openGraph: {
      url: new URL(getURL()),
      title: t('LocaleLayout.title'),
      description: t('LocaleLayout.description'),
      images: [t('LocaleLayout.cardImage')],
      type: 'website',
      siteName: t('LocaleLayout.title')
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Vercel',
      creator: '@Vercel',
      title: t('LocaleLayout.title'),
      description: t('LocaleLayout.description'),
      images: [t('LocaleLayout.cardImage')]
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>{children}</ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
