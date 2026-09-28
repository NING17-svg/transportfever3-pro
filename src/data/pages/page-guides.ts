import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const guidesPage: PageContent = {
  id: "guides",
  translationKey: "guides",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides",
  url: "/guides",
  pageType: "guides",
  presentation: { shell: "hub" },
  h1: `${site.gameName} Gameplay Guides`,
  seoTitle: `${site.gameName} Gameplay Guides | Vehicles, Maps, Economy, and Mods`,
  metaDescription:
    "Gameplay guide hub for Transport Fever 3: vehicle roster, campaign structure, map sizes and modes, economy systems, and the Steam Workshop mod ecosystem.",
  summary:
    "A gameplay guide hub aggregating the Transport Fever 3 vehicle roster, campaign structure, economy, map modes, and modding.",
  hero: {
    eyebrow: "Gameplay Guides",
    subtitle:
      "Browse the Transport Fever 3 gameplay reference cluster covering vehicles, maps, campaign, economy, and the Steam Workshop mod ecosystem.",
    ctas: [
      { label: "Vehicles", href: "/vehicles" },
      { label: "Campaign", href: "/campaign" },
    ],
  },
  quickAnswer:
    "Transport Fever 3 gameplay covers vehicles, map modes, campaign structure, economy, and the Steam Workshop mod ecosystem. Start with the vehicle roster, then move to campaign or economy as your focus needs.",
  keyFacts: [
    { label: "Vehicle roster", value: "Trains, trams, planes, ships, buses, trucks" },
    { label: "Map modes", value: "Campaign, sandbox, scenario" },
    { label: "Modding", value: "Steam Workshop signal" },
    { label: "Research date", value: "2026-09-28" },
  ],
  modules: [
    {
      id: "overview",
      type: "prose",
      heading: "Gameplay guide overview",
      body:
        "Use this hub to navigate the Transport Fever 3 gameplay reference cluster. The vehicle roster page indexes the train, tram, bus, truck, plane, and ship categories visible in the launch trailers; the campaign page explains the Steam-listed campaign mode; the economy page covers finances, cargo, passengers, and industries; the map modes page lists campaign, sandbox, and scenario; and the mods page tracks the Steam Workshop and Curated Mods program signal.",
    },
    {
      id: "vehicle-anchor",
      type: "prose",
      heading: "Vehicles and roster",
      body:
        "The vehicle roster page organizes the train, tram, bus, truck, plane, and ship categories visible in launch trailers. Full vehicle count and exact category sizes are not announced as of 2026-09-28.",
    },
    {
      id: "campaign-anchor",
      type: "prose",
      heading: "Campaign structure",
      body:
        "The campaign overview covers the Steam-listed campaign mode. Specific mission count is not announced as of 2026-09-28 and is not imported from earlier Transport Fever titles.",
    },
    {
      id: "economy-anchor",
      type: "prose",
      heading: "Economy and industries",
      body:
        "The economy page covers finances, cargo, passengers, and industries at the surface level. Specific industry chain numbers are not announced as of 2026-09-28.",
    },
    {
      id: "map-modes-anchor",
      type: "prose",
      heading: "Map modes",
      body:
        "The map modes page covers campaign, sandbox, and scenario modes plus the bigger maps / max map size autocomplete signal. Exact max map size is not announced as of 2026-09-28.",
    },
    {
      id: "mods-anchor",
      type: "prose",
      heading: "Mods and Steam Workshop",
      body:
        "The mods page tracks Steam Workshop and the Curated Mods program signal. Full Curated Mods catalog is not announced as of 2026-09-28.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["vehicle-list", "campaign-overview", "economy-guide", "map-modes", "vehicle-list-modding"],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-09-28",
};
