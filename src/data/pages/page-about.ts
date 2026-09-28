import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const aboutPage: PageContent = {
  id: "about",
  translationKey: "about",
  locale: "en-US",
  routeKind: "fixed",
  slug: "about",
  url: "/about",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: `About ${site.name}`,
  seoTitle: `About | ${site.name}`,
  metaDescription:
    "About this Transport Fever 3 unofficial fan reference hub: scope, sources, and editorial policy.",
  summary: "About this unofficial Transport Fever 3 reference hub.",
  hero: {
    eyebrow: "About",
    subtitle:
      "An unofficial fan reference hub for Transport Fever 3 sourced from the Steam store page and the Urban Games homepage.",
    ctas: [
      { label: "Steam Store", href: "/steam" },
      { label: "Contact", href: "/contact" },
    ],
  },
  quickAnswer:
    "This site is an unofficial fan reference hub for Transport Fever 3. All Transport Fever 3 facts come from the Steam store page (AppID 3493540) and the Urban Games homepage.",
  keyFacts: [
    { label: "Status", value: "Unofficial fan reference hub" },
    { label: "Source", value: "Steam store page and Urban Games" },
    { label: "Research date", value: "2026-09-28" },
  ],
  modules: [
    {
      id: "scope",
      type: "prose",
      heading: "Site scope",
      body:
        "This site is an unofficial fan reference hub for Transport Fever 3. Every Transport Fever 3 fact on this site comes from the Steam store page (AppID 3493540) or the Urban Games homepage. We do not import facts from earlier Transport Fever titles and we do not speculate about unannounced features.",
    },
    {
      id: "sources",
      type: "prose",
      heading: "Source policy",
      body:
        "Current-game facts (release date, system requirements, editions, supported languages, Steam tags) come from the Steam store page. Community discussions on the Steam Community Hub are used as demand signals and identity confirmation only.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["steam-store", "wiki", "release-date-status"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-28",
};
