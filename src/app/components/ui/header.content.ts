import { t, type Dictionary } from "intlayer";

const headerContent = {
  key: "header",
  content: {
    home: t({
      en: "Home",
      tr: "Ana Sayfa",
      de: "Startseite",
    }),
    products: t({
      en: "Products",
      tr: "Ürünler",
      de: "Produkte",
    }),
    about: t({
      en: "About Us",
      tr: "Hakkımızda",
      de: "Über uns",
    }),
    contact: t({
      en: "Contact",
      tr: "İletişim",
      de: "Kontakt",
    }),
    offer: t({
      en: "Get an Offer",
      tr: "Teklif Al",
      de: "Angebot erhalten",
    }),
    references: t({
      en: "References",
      tr: "Referanslar",
      de: "Referenzen",
    }),
  },
} satisfies Dictionary;

export default headerContent;
