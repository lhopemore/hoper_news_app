import sortNewsByImage from "@/lib/sortNewsImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
): Promise<NewsResponse> => {
  const params = new URLSearchParams({
    access_key: process.env.MEDIASTACK_API_KEY!,
    countries: "gb",
    languages: "en",
    sort: "published_desc",
    limit: "100",
  });
  if (category) params.set("categories", category);
  if (keywords) params.set("keywords", keywords);

  const res = await fetch(`http://api.mediastack.com/v1/news?${params}`, {
    ...(isDynamic ? { cache: "no-store" } : { next: { revalidate: 3600 } }),
  });
  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(json.error?.message ?? "Failed to fetch news");
  }

  return sortNewsByImage(json);
};

export default fetchNews;