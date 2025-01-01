import About from '@/components/page/home/About';
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
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 laptop:max-w-[1440px]">
      <Hero />
      <About />
      <Benefit />
      <CaseStudy />
      <Prize />
      <div className="w-full bg-blue-10">
        <Partner />
      </div>
      <Testimonial />
      <div className="relative w-[100vw]">
        <Image
          src="/assets/demo/testi.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="Testimonial"
          className="h-auto w-full"
        />
        <div className="absolute left-[50%] top-[-65%] -z-10 w-full translate-x-[-50%]">
          <Image
            src="/assets/demo/Group_5.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Testimonial"
            className="h-auto w-screen object-contain"
          />
        </div>
      </div>
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
