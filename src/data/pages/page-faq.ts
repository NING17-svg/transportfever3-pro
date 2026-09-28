import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const faqPage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: `Frequently Asked Questions | ${site.name}`,
  seoTitle: `Transport Fever 3 FAQ | Common Questions`,
  metaDescription:
    "Common questions about Transport Fever 3: release date, Early Access, pre-order, system requirements, multiplayer, and platforms.",
  summary: "A Transport Fever 3 FAQ covering release date, editions, multiplayer, and platform questions.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "Frequently asked questions about the Transport Fever 3 launch, sourced from the Steam store page and the Urban Games homepage.",
    ctas: [
      { label: "Release Date", href: "/release-date" },
      { label: "Contact", href: "/contact" },
    ],
  },
  quickAnswer:
    "Transport Fever 3 launches on Steam (AppID 3493540) on September 29, 2026 in Early Access, developed and published by Urban Games. Console and Mac release dates are not announced as of 2026-09-28.",
  keyFacts: [
    { label: "Release", value: "September 29, 2026" },
    { label: "Steam AppID", value: "3493540" },
    { label: "Developer", value: "Urban Games" },
    { label: "Status", value: "Early Access" },
  ],
  modules: [
    {
      id: "policy",
      type: "prose",
      heading: "FAQ policy",
      body:
        "Answers here are short and source-aware. Unannounced details are marked with a dated status statement rather than guessed.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["release-date-status", "platforms", "editions-pricing", "wiki"],
  schemaTypes: ["FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-09-28",
};
