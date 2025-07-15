import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

const Page:NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold">Welcome to Orion!</h1>
          <p className="mt-4">This is a sample page for the {locale} locale.</p>
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}

export default Page;