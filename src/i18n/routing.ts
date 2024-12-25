import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales } from '@/configs/locales';

const defaultLocale = locales[0];
export const routing = defineRouting({
  locales: locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    // '/pathnames': {
    //   en: '/pathnames',
    //   vi: '/vi/pathnames'
    // }
  }
});

export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
