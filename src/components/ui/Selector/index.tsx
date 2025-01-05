import { FormControl, MenuProps, Select, SelectChangeEvent } from '@mui/material';
import React, { DetailedHTMLProps, SyntheticEvent, useState } from 'react';
import { ArrowDropDownIcon } from '../icons/ArrowDropDownIcon';

export type SelectOption = { value: string | number; label: string | number };
export interface SelectorProps extends Partial<Pick<HTMLSelectElement, 'className' | 'title'>> {
  label?: string;
  defaultOption?: SelectOption;
  onSelectChange?: (event: SelectChangeEvent<HTMLSelectElement>) => void;
  isPending?: boolean;
  children: React.ReactNode;
  onClose?: (event: SyntheticEvent) => void;
  onOpen?: (event: SyntheticEvent) => void;
  prefix?: React.ReactNode;
  wrapperClass?: HTMLSelectElement['className'];
  options: SelectOption[];
}

interface ValueDisplayProps
  extends Pick<DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
  value: string;
  isOpen: boolean;
  prefix?: React.ReactNode;
}

const Selector = ({
  children,
  defaultOption,
  isPending,
  label,
  onSelectChange,
  onClose,
  onOpen,
  title,
  prefix,
  className,
  wrapperClass,
  options
}: SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: SyntheticEvent) => {
    onOpen ? onOpen(event) : undefined;
    setIsOpen(true);
  };

  const handleClose = (event: SyntheticEvent) => {
    onClose ? onClose(event) : undefined;
    setIsOpen(false);
  };

  return (
    <FormControl
      className={`selector min-w-2 overflow-hidden rounded-s border border-solid border-primary-default ${isPending ? 'animate-pulse' : ''} ${wrapperClass}`}
    >
      <Select
        defaultValue={defaultOption?.value as unknown as HTMLSelectElement}
        onChange={onSelectChange}
        onClose={handleClose}
        renderValue={(value: any) => {
          console.log(options);
          const option = options?.find((option) => option.value === value);
          const label = option ? option.label : value;
          return <ValueDisplay value={label as string} isOpen={isOpen} prefix={prefix} />;
        }}
        onOpen={handleOpen}
        label={label}
        disabled={isPending}
        IconComponent={() => null}
        MenuProps={menuProps}
        labelId="locale-switcher-select-label"
        id="locale-switcher-select"
        inputProps={{ 'aria-label': 'Without label' }}
        displayEmpty
        className={`selector__item group ${className}`}
        title={title}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export const ValueDisplay = ({ value, isOpen, prefix, className }: ValueDisplayProps) => {
  return (
    <div
      className={`selector-display flex w-full items-center justify-between gap-s px-l py-s text-greyscale-subtitle group-hover:text-greyscale-body ${className}`}
    >
      <div className="flex items-center gap-2xs">
        {prefix}
        <span className="selector-display__value uppercase subtitle-semibold tablet:body-semibold">{value}</span>
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
  disableScrollLock: true
};

export default Selector;
