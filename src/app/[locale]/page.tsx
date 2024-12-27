import About from '@/components/page/home/About/index.tsx';
import Benefit from '@/components/page/home/Benefit';
import CaseStudy from '@/components/page/home/CaseStudy';
import Hero from '@/components/page/home/Hero';
import Partner from '@/components/page/home/Partner';
import Prize from '@/components/page/home/Prize';
import Testimonial from '@/components/page/home/Testimonial';
import { routing } from '@/i18n/routing';
import { TFunction } from '@/i18n/types';
import { LocaleRouteParams } from '@/types/routeParams';
import { getTranslations } from 'next-intl/server';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Hero />
      <Benefit />
      <CaseStudy />
      <Prize />
      <Partner />
      <About />
      <Testimonial />
    </div>
  );
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleRouteParams) {
  const { locale } = await params;
  const t = (await getTranslations({ locale })) as TFunction;
  console.log('Translated Title:', t('HomePage.title'));
  return {
    title: t('HomePage.title'),
    description: t('HomePage.about')
  };
}

export default HomePage;
