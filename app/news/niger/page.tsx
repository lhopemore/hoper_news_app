import { rssFeeds } from "@/constants";
import fetchRssNews from "@/lib/fetchRssNews";
import sortNewsByImage from "@/lib/sortNewsImage";
import NewsList from "@/app/NewsList";
const localSources = rssFeeds.filter((feed) => feed.local).map((feed) => feed.source);
const mentionsNiger = /\bniger\b|nigérien/i;

async function NigerPage() {
  const articles = await fetchRssNews(rssFeeds);

  const nigerArticles = articles.filter(
    (article) =>
      localSources.includes(article.source) ||
      mentionsNiger.test(`${article.title} ${article.description}`)
  );

  const news = sortNewsByImage({
    pagination: {
      count: nigerArticles.length,
      limit: nigerArticles.length,
      offset: 0,
      total: nigerArticles.length,
    },
    data: nigerArticles,
  });

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold px-10 pt-5 underline decoration-orange-400 decoration-6 underline-offset-8">
        Niger
      </h1>

      {news.data.length === 0 ? (
        <p className="px-10 pt-10 text-gray-500">
          No Niger news available right now. Please try again later.
        </p>
      ) : (
        <NewsList news={news} />
      )}
    </div>
  );
}

export default NigerPage;