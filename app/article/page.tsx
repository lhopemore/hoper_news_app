import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function ArticlePage({ searchParams }: Props) {
  const article = (await searchParams) as unknown as Partial<Article>;

  if (!article.title) {
    notFound();
  }

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}

        <div className="px-10">
          <h1 className="font-serif text-4xl font-bold pt-5 lg:pt-0 pb-2">
            {article.title}
          </h1>

         <div className="flex divide-x-2 divide-gray-300 text-sm">
  <h2 className="font-bold px-4 first:pl-0">By: {article.author || "Unknown"}</h2>
  <h2 className="font-bold px-4">Source: {article.source}</h2>
  {article.published_at && (
    <p className="px-4">
      <LiveTimestamp time={article.published_at} />
    </p>
  )}
</div>

          <p className="pt-4">{article.description}</p>

          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-orange-400 hover:underline"
            >
              Read the full article on {article.source} →
            </a>
          )}
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;