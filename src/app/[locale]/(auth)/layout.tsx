import theme from '@/configs/theme';
import '@/styles/globals.css';
import { montserrat } from '@/configs/locales';
import { ThemeProvider } from '@mui/material';
export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${montserrat.variable} scroll-smooth font-sans`} id="__next">
      <body>
        <ThemeProvider theme={theme}>
          <section>{children}</section>
        </ThemeProvider>
      </body>
    </html>
  );
}
