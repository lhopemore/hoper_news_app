export const categories: Category[] = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

// Navbar: Niger first, then the Mediastack categories
export const navCategories: string[] = ["niger", ...categories];

export const rssFeeds: {
  url: string;
  source: string;
  category: Category;
  local: boolean;
}[] = [
  { url: "https://www.tamtaminfo.com/feed", source: "Tamtaminfo", category: "general", local: true },
  { url: "https://www.studiokalangou.org/feed", source: "Studio Kalangou", category: "general", local: true },
  { url: "https://www.nigerinter.com/feed", source: "Niger Inter", category: "general", local: true },
  { url: "https://www.airinfo.org/feed", source: "Aïr Info", category: "general", local: true },
  { url: "https://feeds.bbci.co.uk/afrique/rss.xml", source: "BBC Afrique", category: "general", local: false },
];