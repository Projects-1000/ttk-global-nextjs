import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales } from '@/configs/locales';

const defaultLocale = locales[0];
export const routing = defineRouting({
  locales: locales,
  defaultLocale
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
