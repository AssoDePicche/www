"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "next/navigation";

import { FC, useTransition } from "react";

export const LocaleSwitcher: FC = () => {
  const router = useRouter();

  const pathname = usePathname();

  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const onSelectChange = (nextLocalte: string) => startTransition(() => {
  });

  return (
    <button onClick={() => onSelectChange(locale === "en" ? "br" : "en")} disabled={isPending}>
      { locale === "en" ? "Trocar para Português" : "Change to English"}
    </button>
  );
};
