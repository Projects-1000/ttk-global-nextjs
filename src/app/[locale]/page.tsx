import Benefit from '@/components/page/home/Benefit';
import Hero from '@/components/page/home/Hero';
import { routing } from '@/i18n/routing';
import { TFunction } from '@/i18n/types';
import { LocaleRouteParams } from '@/types/routeParams';
import { getTranslations } from 'next-intl/server';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Hero />
      <Benefit />
    </div>
  );
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleRouteParams) {
  const { locale } = await params;
  const t = (await getTranslations({ locale })) as TFunction;

  return {
    title: t('HomePage.title'),
    description: t('HomePage.about')
  };
}

export default HomePage;
