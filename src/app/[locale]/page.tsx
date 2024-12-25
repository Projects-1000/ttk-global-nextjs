import React from 'react';
import { LocaleRouteParams } from '@/types/routeParams';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { TFunction } from '@/i18n/types';
import { useTranslations } from 'next-intl';

const HomePage = () => {
  const t = useTranslations('HomePage');
  return <div className="h1-bold">{t('title')}</div>;
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
