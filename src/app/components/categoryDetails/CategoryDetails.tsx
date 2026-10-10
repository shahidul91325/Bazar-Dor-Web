'use client';

import { IPriceItem } from '@/app/Types/ProductData';
import Link from 'next/link';
import { useMemo, useState } from 'react';

interface CategoriesDataProps {
  categoriesData: IPriceItem[];
}

const toBn = (n: number) =>
  n.toLocaleString('bn-BD', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

const CategoriesData = ({ categoriesData }: CategoriesDataProps) => {
  const [sortBy, setSortBy] = useState('default');

  const filteredData = useMemo(() => {
    const result = [...categoriesData];

    if (sortBy === 'low') {
      result.sort((a, b) => a.today - b.today);
    } else if (sortBy === 'high') {
      result.sort((a, b) => b.today - a.today);
    } else if (sortBy === 'change') {
      result.sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct));
    }

    return result;
  }, [categoriesData, sortBy]);

  return (
    <section id="products" className="bg-[#eef6f0] py-6 sm:py-8">
      <div className="mx-auto mt-5 w-full max-w-7xl px-4 sm:px-6 lg:px-9">
        {/* Category heading */}
        <div className="flex items-center gap-4 rounded-2xl border border-emerald-900/10 bg-[#fbfefc] p-5 sm:p-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eff6f0] text-3xl">
            {categoriesData[0]?.categoryIcon || '🍚'}
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {categoriesData[0]?.categoryNameBn || 'সব পণ্য'}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {toBn(categoriesData.length)}
              টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Sorting */}
        <div className="mt-5 rounded-2xl border border-emerald-900/10 bg-[#fbfefc] p-3 sm:p-4">
          <div className="flex items-center justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="পণ্য সাজান"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500 sm:w-52"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low">কম থেকে বেশি</option>
              <option value="high">বেশি থেকে কম</option>
              <option value="change">দামের পরিবর্তন</option>
            </select>
          </div>
        </div>

        {/* Product count */}
        <div className="mb-4 mt-5 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500">মোট {toBn(filteredData.length)}টি পণ্য দেখানো হচ্ছে</p>

          {sortBy !== 'default' && (
            <button
              type="button"
              onClick={() => setSortBy('default')}
              className="shrink-0 text-sm font-semibold text-emerald-700 hover:underline"
            >
              রিসেট
            </button>
          )}
        </div>

        {/* Product cards */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((data) => (
              <Link href={`/product/${data.id}`} key={data.id} className="group block min-w-0">
                <article className="h-full rounded-2xl border border-[#dce9df] bg-[#fbfefc] p-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/5 sm:p-5">
                  {/* Product information */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff6f0] text-2xl">
                      {data.image || data.categoryIcon || '🍚'}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-bold leading-tight text-slate-900 sm:text-lg">
                        {data.nameBn}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">প্রতি {data.unit === 'kg' ? 'কেজি' : data.unit}</p>
                    </div>
                  </div>

                  {/* Today's price */}
                  <div className="mt-5 flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">আজকের দাম</p>

                      <p className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                        {toBn(data.today)} <span className="text-sm font-medium">টাকা</span>
                      </p>
                    </div>

                    {data.change.dir === 'up' ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1.5 text-xs font-bold text-rose-600">
                        <span className="text-[9px]">▲</span>
                        {toBn(data.change.pct)}%
                      </span>
                    ) : data.change.dir === 'down' ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-600">
                        <span className="text-[9px]">▼</span>
                        {toBn(data.change.pct)}%
                      </span>
                    ) : (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-600">
                        <span className="text-[9px]">—</span>
                        {toBn(data.change.pct)}%
                      </span>
                    )}
                  </div>

                  {/* Price history */}
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#e8f0ea] pt-3">
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-400">গতকাল</p>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-700">{toBn(data.yesterday)} ৳</p>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-400">গত সপ্তাহ</p>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-700">{toBn(data.lastWeek)} ৳</p>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-400">গত মাস</p>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-700">{toBn(data.lastMonth)} ৳</p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#e8f0ea] pt-3 text-xs font-semibold text-emerald-700">
                    <span>দাম ও বিস্তারিত</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-emerald-900/10 bg-[#fbfefc] px-4 py-12 text-center">
            <p className="text-lg font-semibold text-slate-700">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>
            <p className="mt-2 text-sm text-slate-500">অন্য একটি ক্যাটাগরি নির্বাচন করে দেখুন।</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesData;
