function Loading() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm"
        >
          <div className="h-56 bg-slate-300 dark:bg-slate-700 rounded-t-lg" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded w-3/4" />
            <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded" />
            <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-5/6" />
          </div>
          <div className="h-10 bg-orange-200 rounded-b-lg" />
        </div>
      ))}
    </main>
  );
}

export default Loading;