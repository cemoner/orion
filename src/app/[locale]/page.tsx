import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import { Home } from "../[locale]/home/page";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import VerticalTicker, { marketData } from "../components/specific/TickerBar";




const Page:NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <Header/>
        <main>
          <Home/>
        </main>
        <VerticalTicker items={marketData}/>
        <Footer/>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;




