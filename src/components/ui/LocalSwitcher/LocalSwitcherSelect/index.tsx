'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { LocaleProps } from '@/types/locale.type';
import LanguageIcon from '@mui/icons-material/Language';
import { FormControl, Select, SelectChangeEvent } from '@mui/material';
import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';

interface LocalSwitcherProps {
  children: ReactNode;
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }: LocalSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: SelectChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as LocaleProps;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <>
      <FormControl className="w-20">
        <Select
          labelId="demo-simple-select-label"
          id="locale-switcher-select"
          value={defaultValue}
          defaultValue={defaultValue}
          label={label}
          onChange={onSelectChange}
          disabled={isPending}
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
          renderValue={(value) => <ValueDisplay value={value} />}
          className='group'
        >
          {children}
        </Select>
      </FormControl>
    </>
  );
}

const ValueDisplay = ({ value }: { value: string }) => {
  return (
    <div className="flex items-center gap-2xs text-greyscale-subtitle group-hover:text-greyscale-body">
      <LanguageIcon className="size-5" />
      <span className="body-semibold uppercase">{value}</span>
    </div>
  );
};
