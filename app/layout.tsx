import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Providers from "./Providers";
import Footer from "./Footer";
export const metadata: Metadata = {
  title: "News App",
  description: "Live news app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-all duration-700">
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}