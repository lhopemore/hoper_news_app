const feeds = [
  "https://www.actuniger.com/feed",
  "https://www.tamtaminfo.com/feed",
  "https://www.studiokalangou.org/feed",
  "https://www.lesahel.org/feed",
  "https://www.nigerinter.com/feed",
  "https://www.airinfo.org/feed",
  "https://www.aniamey.com/rss/",
  "https://www.rfi.fr/fr/afrique/rss",
  "https://feeds.bbci.co.uk/afrique/rss.xml",
];

for (const url of feeds) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const text = await res.text();
    const items = (text.match(/<item[\s>]/g) || []).length;
    const ok = res.ok && items > 0;
    console.log(`${ok ? "✅" : "❌"} ${url}  (status ${res.status}, ${items} articles)`);
  } catch (err) {
    console.log(`❌ ${url}  (${err.message})`);
  }
}