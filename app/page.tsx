import { categories, rssFeeds } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import fetchRssNews from "@/lib/fetchRssNews";
import sortNewsByImage from "@/lib/sortNewsImage";
import response from "@/response.json";
import NewsList from "./NewsList";
async function HomePage() {
const mediastack = response as NewsResponse;
const localNews = await fetchRssNews(rssFeeds);

  const news = sortNewsByImage({
    pagination: mediastack.pagination,
    data: [...localNews, ...mediastack.data],
  });

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;