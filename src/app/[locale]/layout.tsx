import { NextLayoutIntlayer } from "next-intlayer";

import type { Metadata } from "next";
import {Inter } from "next/font/google"; // Make sure this path is correct

import { getHTMLTextDir } from "intlayer";

export { generateStaticParams } from "next-intlayer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Orion - Your Next Generation App",
  description: "A modern web application built with Next.js and Tailwind CSS",
};
const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body
        className={`${inter.className} flex flex-col h-screen relative bg-gray-50`}>
          {children}
      </body>
    </html>
  );
};

export default LocaleLayout;
