import Link from "next/link";
import { categories } from "@/constants";

function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-10 py-8 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-500">
        <div>
          <p className="font-serif text-lg text-gray-900 dark:text-gray-100">
            The{" "}
            <span className="underline decoration-orange-400 decoration-2">Hopemore</span>{" "}
            News
          </p>
          <p className="mt-1">News provided by Mediastack. Articles belong to their original sources.</p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/news/${category}`}
              className="capitalize hover:text-orange-400"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>

      <p className="text-center text-xs text-gray-400 pb-6">
        © {new Date().getFullYear()} The Hopemore News
      </p>
    </footer>
  );
}

export default Footer;