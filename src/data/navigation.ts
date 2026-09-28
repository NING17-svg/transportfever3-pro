import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/steam", labels: { "en-US": "Steam Store" } },
  { href: "/release-date", labels: { "en-US": "Release Date" } },
  { href: "/editions", labels: { "en-US": "Editions" } },
  { href: "/pre-order", labels: { "en-US": "Pre-order" } },
  { href: "/platforms", labels: { "en-US": "Platforms" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/multiplayer", labels: { "en-US": "Multiplayer" } },
  { href: "/vehicles", labels: { "en-US": "Vehicles" } },
  { href: "/map-modes", labels: { "en-US": "Maps & Modes" } },
  { href: "/campaign", labels: { "en-US": "Campaign" } },
  { href: "/economy", labels: { "en-US": "Economy" } },
  { href: "/mods", labels: { "en-US": "Mods" } },
  { href: "/wiki", labels: { "en-US": "Wiki & FAQ" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/steam", labels: { "en-US": "Steam Store" } },
  { href: "/release-date", labels: { "en-US": "Release Date" } },
  { href: "/editions", labels: { "en-US": "Editions & Pricing" } },
  { href: "/pre-order", labels: { "en-US": "Pre-order" } },
  { href: "/wiki", labels: { "en-US": "Wiki & FAQ" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
