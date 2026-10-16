export default function sortNewsByImage(news: NewsResponse): NewsResponse {
  const sorted = [...news.data].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  const newsWithImage = sorted.filter((item) => item.image);
  const newsWithoutImage = sorted.filter((item) => !item.image);

  return {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };
}