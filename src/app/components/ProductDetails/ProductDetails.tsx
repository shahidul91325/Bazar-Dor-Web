import { IPriceItem } from '@/app/Types/ProductData';
import Link from 'next/link';

interface ProductDetailsProps {
  productData: IPriceItem;
}

// Whole numbers stay as is (৬৬), decimals show 2 digits (৬৩.৫০)
const toBn = (n: number) =>
  n.toLocaleString('bn-BD', {
    maximumFractionDigits: 2,
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
  });

const ProductDetails = ({ productData }: ProductDetailsProps) => {
  const unit = productData.unit === 'kg' ? 'কেজি' : productData.unit;
  const diff = Math.abs(productData.today - productData.yesterday);
  const hasMarkets = productData.markets.length > 0;

  // Lowest and highest price across all markets
  const lowest = hasMarkets ? Math.min(...productData.markets.map((m) => m.min)) : 0;
  const highest = hasMarkets ? Math.max(...productData.markets.map((m) => m.max)) : 0;

  // Colour / arrow / word for the price direction (up = red, down = green)
  const changeStyle =
    productData.change.dir === 'up'
      ? { color: 'text-rose-600', arrow: '▲', word: 'বেড়েছে' }
      : productData.change.dir === 'down'
        ? { color: 'text-emerald-600', arrow: '▼', word: 'কমেছে' }
        : { color: 'text-slate-500', arrow: '—', word: 'অপরিবর্তিত' };

  const summaryCards = [
    { label: 'সর্বনিম্ন দাম', value: lowest, color: 'text-emerald-600', note: 'সবচেয়ে কম দামের বাজার' },
    { label: 'সর্বাধিক দাম', value: highest, color: 'text-rose-600', note: 'সবচেয়ে বেশি দামের বাজার' },
    { label: 'গড় দাম', value: productData.today, color: 'text-emerald-600', note: `প্রতি ${unit}-এর হিসাব` },
  ];

  return (
    <section className="bg-[#eef6f0] py-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-9 mt-8">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-md text-slate-500 sm:text-sm mb-5">
          <Link href="/" className="hover:text-emerald-700">
            হোম
          </Link>
          <span>›</span>
          <Link href={`/category/${productData.category}`} className="hover:text-emerald-700">
            {productData.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="font-medium text-slate-700">{productData.nameBn}</span>
        </nav>

        {/* Product heading */}
        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-emerald-900/10 bg-[#fbfefc] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eff6f0] text-3xl sm:h-20 sm:w-20 sm:text-4xl">
              {productData.image || productData.categoryIcon || '🍚'}
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{productData.nameBn}</h1>

              <p className="mt-1 text-xs text-slate-400">
                প্রতি {unit} · {productData.categoryNameBn}
              </p>

              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                গতকালের তুলনায় আজ দাম <span className={`font-bold ${changeStyle.color}`}>{changeStyle.word}</span>
                {diff > 0 && ` · ${toBn(diff)} টাকা`}
              </p>
            </div>
          </div>

          {/* Today's price box */}
          <div className="rounded-2xl bg-[#eff6f0] px-8 py-4 text-center sm:min-w-40">
            <p className="text-xs text-slate-500">আজকের দাম</p>

            <p className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">{toBn(productData.today)}</p>

            <p className="mt-1 text-xs text-slate-500">টাকা / {unit}</p>

            <p className={`mt-2 text-xs font-bold ${changeStyle.color}`}>
              <span className="mr-1 text-[9px]">{changeStyle.arrow}</span>
              {toBn(productData.change.pct)}%
            </p>
          </div>
        </div>

        {/* Price details */}
        <div className="mt-5 rounded-2xl border border-emerald-900/10 bg-[#fbfefc] p-5 sm:p-6">
          {/* Price summary */}
          <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">দামের সারসংক্ষেপ</h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {summaryCards.map((card) => (
              <div key={card.label} className="min-w-0 rounded-xl border border-[#dce9df] bg-[#fbfefc] px-4 py-3">
                <p className="text-xs text-slate-500">{card.label}</p>

                <p className={`mt-1 text-xl font-extrabold sm:text-2xl ${card.color}`}>
                  {toBn(card.value)} <span className="text-sm font-medium">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-slate-500">{card.note}</p>
              </div>
            ))}
          </div>

          {/* Market wise price */}
          <h2 className="mt-8 text-base font-extrabold text-slate-900 sm:text-lg">বাজারভিত্তিক আজকের দাম</h2>

          {hasMarkets ? (
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#dce9df]">
              <table className="w-full min-w-160 text-sm">
                <thead>
                  <tr className="text-xs text-slate-500">
                    <th className="px-4 py-3 text-left font-normal">বাজার</th>
                    <th className="px-4 py-3 text-left font-normal">বিভাগ</th>
                    <th className="px-4 py-3 text-right font-normal">সর্বনিম্ন</th>
                    <th className="px-4 py-3 text-right font-normal">সর্বাধিক</th>
                    <th className="px-4 py-3 text-right font-normal">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {productData.markets.map((market) => (
                    <tr key={market.market} className="border-t border-[#dce9df] even:bg-[#eef6f0]/70">
                      <td className="px-4 py-3.5 font-bold text-slate-900">{market.market}</td>
                      <td className="px-4 py-3.5 text-slate-500">{market.division}</td>
                      <td className="px-4 py-3.5 text-right text-slate-600">{toBn(market.min)} টাকা</td>
                      <td className="px-4 py-3.5 text-right text-slate-600">{toBn(market.max)} টাকা</td>
                      <td className="px-4 py-3.5 text-right font-bold text-slate-900">
                        {toBn((market.min + market.max) / 2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-4 rounded-xl border border-[#dce9df] px-4 py-10 text-center">
              <p className="text-base font-semibold text-slate-700">এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
