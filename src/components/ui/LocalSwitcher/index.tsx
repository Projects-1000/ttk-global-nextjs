import { routing } from '@/i18n/routing';
import { MenuItem } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocalSwitcherSelect';
import './index.scss';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <MenuItem key={cur} value={cur} className="body-regular py-1 pl-2 hover:bg-primary-subtle hover:text-greyscale-title">
          {t('locale', { locale: cur })}
        </MenuItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
