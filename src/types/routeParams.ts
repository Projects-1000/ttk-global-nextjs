import { LocaleProps } from "./locale.type";

export interface LocaleRouteParams {
  params: Promise<{ locale: LocaleProps }>;
}
