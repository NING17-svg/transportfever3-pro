import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Transport Fever 3 Guide",
  brandMark: "TF3",
  gameName: "Transport Fever 3",
  domain: "transportfever3.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://transportfever3.pro").replace(/\/$/, ""),
  description:
    "An unofficial fan reference hub for Transport Fever 3 (Steam AppID 3493540, Urban Games) covering release date, system requirements, platforms, editions, multiplayer, vehicles, maps, campaign, economy, mods, and Steam launch facts.",
  tagline: "Transport Fever 3 launch facts, vehicles, economy, multiplayer, and mods in one reference hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Transport Fever 3 Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Transport Fever 3 on Steam",
      href: "https://store.steampowered.com/app/3493540",
      description: "Steam store page (AppID 3493540), the authoritative source for Transport Fever 3 release, system requirements, editions, and tags.",
    },
    {
      label: "Urban Games homepage for Transport Fever 3",
      href: "https://www.urbangames.com/transportfever3",
      description: "Publisher and developer confirmation for Transport Fever 3 from Urban Games.",
    },
    {
      label: "Transport Fever 3 Steam Community Hub",
      href: "https://steamcommunity.com/app/3493540",
      description: "Steam discussions and announcements, used as a demand signal and identity confirmation only.",
    },
  ],
  disclaimer:
    "This is an unofficial fan reference hub for Transport Fever 3. All Transport Fever 3 facts are sourced from the Steam store page (AppID 3493540) and the Urban Games homepage; nothing on this site is presented as an official statement from Urban Games.",
};
