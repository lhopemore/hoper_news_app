import Parser from "rss-parser";

type Feed = { url: string; source: string; category: Category };

type CustomItem = {
  mediaContent?: { $?: { url?: string } };
  mediaThumbnail?: { $?: { url?: string } };
  contentEncoded?: string;
};

const parser = new Parser<Record<string, unknown>, CustomItem>({
  customFields: {
    item: [
      ["media:content", "mediaContent"],
      ["media:thumbnail", "mediaThumbnail"],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

// Finds the first <img src="..."> inside an article's HTML
function findImageInHtml(html?: string): string | null {
  const match = html?.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

async function fetchFeed(feed: Feed): Promise<Article[]> {
  try {
    const res = await fetch(feed.url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 1800 },
    });
    if (!res.ok) {
      console.warn(`RSS ${feed.source}: status ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const parsed = await parser.parseString(xml);

    return parsed.items.map((item) => ({
      author: item.creator ?? null,
      category: feed.category,
      country: "ne",
      description: item.contentSnippet?.slice(0, 300) ?? "",
      image:
        item.enclosure?.url ??
        item.mediaContent?.$?.url ??
        item.mediaThumbnail?.$?.url ??
        findImageInHtml(item.contentEncoded) ??
        findImageInHtml(item.content) ??
        null,
      language: "fr",
      published_at: item.isoDate ?? new Date().toISOString(),
      source: feed.source,
      title: item.title ?? "",
      url: item.link ?? "",
    }));
  } catch (err) {
    console.warn(`RSS ${feed.source}: failed`, err);
    return [];
  }
}

export default async function fetchRssNews(feeds: Feed[]): Promise<Article[]> {
  const results = await Promise.all(feeds.map(fetchFeed));
  return results.flat();
}