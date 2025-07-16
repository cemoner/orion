import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import Header from "../components/ui/Header";
import Footer  from "../components/ui/Footer";
import Home from "./home";

const Page:NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
       
          <Header key={locale}/>
          <Home/>
          <Footer />
       

      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;