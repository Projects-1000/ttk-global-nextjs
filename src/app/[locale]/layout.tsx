import Footer from '@/components/layout/footer';
import { Header } from '@/components/ui/Header';
import { montserrat } from '@/configs/locales';
import theme from '@/configs/theme';
import { routing } from '@/i18n/routing';
import { TFunction } from '@/i18n/types';
import { ReduxProvider } from '@/redux/ReduxProvider';
import '@/styles/globals.css';
import '@/styles/scss/_index.scss';
import { LocaleRouteParams } from '@/types/routeParams';
import { getURL } from '@/utils/helpers';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps extends LocaleRouteParams {
  children: React.ReactNode;
}

//TODO: custom type for metadata
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
    <html lang={locale} className={`${montserrat.variable} font-sans`} id="__next">
      <body className="overflow-x-hidden w-full">
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            {/* Ref: https://mui.com/material-ui/integrations/nextjs/#app-router */}
            <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
              <ThemeProvider theme={theme}>
                <div className="flex min-h-screen flex-col">
                <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
