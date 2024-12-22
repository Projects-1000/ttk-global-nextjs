import { Montserrat } from 'next/font/google'

export const locales = ['vi', 'en'] as const;
export const montserrat = Montserrat({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-montserrat',
  })