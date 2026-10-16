"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { categories } from "@/constants";

function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open menu">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Dark background: clicking it closes the menu */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* The menu panel */}
          <nav className="relative w-64 h-full bg-white dark:bg-zinc-800 p-6 shadow-lg">
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <XMarkIcon className="h-8 w-8 cursor-pointer mb-6" />
            </button>

            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/" onClick={() => setOpen(false)} className="font-bold hover:text-orange-400">
                  Home
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/news/${category}`}
                    onClick={() => setOpen(false)}
                    className="capitalize hover:text-orange-400"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MenuButton;