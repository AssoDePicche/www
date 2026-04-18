import { createTranslator } from "next-intl";

export const getTranslations = async (locale: string) => {
  const messagesModule = await import(`./messages/${locale}.json`);

  const translator = createTranslator({
    locale,
    messages: messagesModule.default,
  });

  return translator.rich;
};
