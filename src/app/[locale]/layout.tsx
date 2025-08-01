import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import VerticalTicker, { marketData } from '../components/specific/TickerBar';
import { Header } from '../components/ui/Header';
import Footer from '../components/ui/Footer';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header/>
          {children}
          <Footer/>
          </NextIntlClientProvider>
        <VerticalTicker items={marketData}/>
      </body>
    </html>
  );
}