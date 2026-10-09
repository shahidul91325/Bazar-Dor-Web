import { IPriceItem } from '@/app/Types/ProductData';
import Link from 'next/link';

// TODO: replace this URL with your real prices endpoint
const getPrices = async (): Promise<IPriceItem[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch prices');
  }

  return res.json();
};

const toBn = (n: number) => n.toLocaleString('bn-BD', { maximumFractionDigits: 1, minimumFractionDigits: 0 });

const AllProduct = async () => {
  const datas = await getPrices();

  if (datas.length === 0) return null;

  return (
    <section id="products" className="py-8">
      <div className="w-full max-w-6xl mx-auto p-4">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 lg:text-2xl">সব পণ্য</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {datas.map((data) => (
            <Link href={`category/${data.id}`} key={data.id}>
              <div className="rounded-2xl border border-emerald-900/10 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-emerald-50 text-2xl">
                    <div className="h-full w-full object-cover" />
                    {data.categoryIcon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold leading-tight text-slate-900">{data.nameBn}</h3>
                    <p className="text-xs text-slate-500">প্রতি {data.unit}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-slate-600">আজকের দাম</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-slate-900">
                      <span className="text-xl font-bold">{toBn(data.today)}</span>{' '}
                      <span className="text-sm font-medium">টাকা</span>
                    </p>
                    {data.change.dir === 'up' ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-900/5 bg-white px-2.5 py-1 text-xs font-semibold text-red-600">
                        <span className="text-[9px] leading-none">▲</span>
                        {toBn(data.change.pct)}%
                      </span>
                    ) : data.change.dir === 'down' ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-900/5 bg-white px-2.5 py-1 text-xs font-semibold text-green-600">
                        <span className="text-[9px] leading-none">▼</span>
                        {toBn(data.change.pct)}%
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-900/5 bg-white px-2.5 py-1 text-xs font-semibold text-gray-600">
                        <span className="text-[9px] leading-none">●</span>
                        {toBn(data.change.pct)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
