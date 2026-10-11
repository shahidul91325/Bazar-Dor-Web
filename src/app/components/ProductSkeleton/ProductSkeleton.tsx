export default function ProductSkeleton() {
  return (
    <section className="bg-[#eef6f0] px-4 py-8 sm:px-6 lg:px-9">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse rounded-2xl border border-emerald-900/10 bg-[#fbfefc] p-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-slate-200" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 rounded bg-slate-200" />
                <div className="h-3 w-1/2 rounded bg-slate-100" />
              </div>
            </div>

            <div className="mt-6 h-7 w-1/2 rounded bg-slate-200" />
            <div className="mt-5 h-3 w-full rounded bg-slate-100" />
            <div className="mt-3 h-3 w-2/3 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
