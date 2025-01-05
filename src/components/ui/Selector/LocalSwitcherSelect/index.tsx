'use client';

import Selector, { SelectorProps } from '@/components/ui/Selector';
import { usePathname, useRouter } from '@/i18n/routing';
import { LocaleProps } from '@/types/locale.type';

import LanguageIcon from '@mui/icons-material/Language';
import { SelectChangeEvent } from '@mui/material';
import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';

interface LocalSwitcherProps extends Pick<SelectorProps, 'children' | 'defaultOption'> {
  children: ReactNode;
}

const options: SelectorProps['options'] = [
  { label: 'EN', value: 'en' },
  { label: 'VI', value: 'vi' }
];

export default function LocaleSwitcherSelect({ children, defaultOption }: LocalSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (event: SelectChangeEvent<HTMLSelectElement>) => {
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
  };

  return (
    <Selector
      isPending={isPending}
      defaultOption={defaultOption}
      options={options}
      onSelectChange={onSelectChange}
      wrapperClass="border-none"
      prefix={<LanguageIcon className="size-[22px]" />}
    >
      {children}
    </Selector>
  );
}
