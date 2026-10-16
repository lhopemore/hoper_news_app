import { notFound } from "next/navigation";
import { rssFeeds } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import fetchRssNews from "@/lib/fetchRssNews";
import sortNewsByImage from "@/lib/sortNewsImage";
import NewsList from "@/app/NewsList";

type Props = {
  searchParams: Promise<{ term?: string }>;
};

async function SearchPage({ searchParams }: Props) {
  const { term } = await searchParams;

  if (!term) {
    notFound();
  }

  const [mediastack, localNews] = await Promise.all([
    fetchNews(undefined, term, true),
    fetchRssNews(rssFeeds),
  ]);

  const word = term.toLowerCase();
  const localResults = localNews.filter(
    (article) =>
      article.title.toLowerCase().includes(word) ||
      article.description.toLowerCase().includes(word)
  );

  const news = sortNewsByImage({
    pagination: mediastack.pagination,
    data: [...localResults, ...mediastack.data],
  });

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold px-10 pt-5 underline decoration-orange-400 decoration-6 underline-offset-8">
        Search results for: {term}
      </h1>

      {news.data.length === 0 ? (
        <p className="px-10 pt-10 text-gray-500">
          No articles found for &quot;{term}&quot;. Try another keyword.
        </p>
      ) : (
        <NewsList news={news} />
      )}
    </div>
  );
}

export default SearchPage;