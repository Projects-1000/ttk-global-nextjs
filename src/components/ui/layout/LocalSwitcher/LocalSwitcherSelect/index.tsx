'use client';

import { ArrowDropDownIcon } from '@/components/ui/icons/ArrowDropDownIcon';
import { usePathname, useRouter } from '@/i18n/routing';
import { LocaleProps } from '@/types/locale.type';

import LanguageIcon from '@mui/icons-material/Language';
import { FormControl, MenuProps, Select, SelectChangeEvent } from '@mui/material';
import { useParams } from 'next/navigation';
import { ReactNode, useState, useTransition } from 'react';

interface LocalSwitcherProps {
  children: ReactNode;
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }: LocalSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <FormControl className={`min-w-2 ${isPending ? 'animate-pulse' : ''}`}>
        <Select
          value={defaultValue as unknown as HTMLSelectElement}
          defaultValue={defaultValue as unknown as HTMLSelectElement}
          onChange={onSelectChange}
          onClose={() => setIsOpen(false)}
          renderValue={(value) => <ValueDisplay value={value as unknown as string} isOpen={isOpen} />}
          onOpen={() => setIsOpen(true)}
          label={label}
          disabled={isPending}
          IconComponent={() => null}
          MenuProps={menuProps}
          labelId="locale-switcher-select-label"
          id="locale-switcher-select"
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
          className="group"
          title="Change language"
        >
          {children}
        </Select>
      </FormControl>
    </>
  );
}

export const ValueDisplay = ({ value, isOpen }: { value: string; isOpen: boolean }) => {
  return (
    <div className="flex items-center gap-s text-greyscale-subtitle group-hover:text-greyscale-body">
      <div className="flex items-center gap-2xs">
        <LanguageIcon className="size-[22px]" />
        <span className="uppercase subtitle-semibold tablet:body-semibold">{value}</span>
      </div>
      <ArrowDropDownIcon
        className={`smooth-transition text-greyscale-subtitle duration-[350ms] ${isOpen ? '-rotate-180' : ''}`}
      />
    </div>
  );
};

const menuProps: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: 200,
      overflowY: 'auto'
    }
  },
  disableScrollLock: false
};
