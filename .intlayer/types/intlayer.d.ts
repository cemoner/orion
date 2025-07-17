/* eslint-disable */
import { Locales } from 'intlayer';
import _Z6J5wLU3LZUiOi6aciHD from './header.ts';
import _lBEAPQGyu7NMgRgTYp4y from './my-component.ts';
import _QH0UUnTefEbjX9oyTYtx from './page.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "header": typeof _Z6J5wLU3LZUiOi6aciHD;
    "my-component": typeof _lBEAPQGyu7NMgRgTYp4y;
    "page": typeof _QH0UUnTefEbjX9oyTYtx;
  }

  type DeclaredLocales = Locales.ENGLISH;
  type RequiredLocales = Locales.ENGLISH;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}