'use client';
import { routing } from '@/i18n/routing';
import { MenuItem } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import './index.scss';
import LocaleSwitcherSelect from '../../Selector/LocalSwitcherSelect';
import { SelectorProps } from '../../Selector';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const defaultOption: SelectorProps['defaultOption'] = {
    label: t('locale', { locale: locale }),
    value: locale
  };
  return (
    <LocaleSwitcherSelect defaultOption={defaultOption}>
      {routing.locales.map((cur) => (
        <MenuItem
          key={cur}
          value={cur}
          className="py-1 pl-2 body-medium hover:bg-primary-subtle hover:text-greyscale-title"
        >
          {t('locale', { locale: cur })}
        </MenuItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
