/* eslint-disable */
import { Locales } from 'intlayer';
import _Z6J5wLU3LZUiOi6aciHD from './header.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "header": typeof _Z6J5wLU3LZUiOi6aciHD;
  }

  type DeclaredLocales = Locales.ENGLISH;
  type RequiredLocales = Locales.ENGLISH;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}