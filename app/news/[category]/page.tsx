import { notFound } from "next/navigation";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ category: string }>;
};

async function NewsCategory({ params }: Props) {
  const { category } = await params;

  if (!categories.includes(category as Category)) {
    notFound();
  }

  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold capitalize px-10 pt-5 underline decoration-orange-400 decoration-6 underline-offset-8">
        {category}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;