export default function Loading() {
  const products = [
    { id: 1, icon: '🍚' },
    { id: 2, icon: '🥬' },
    { id: 3, icon: '🐟' },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#edf6f0] px-4 py-10 text-[#1c2c23]">
      <div className="w-full max-w-3xl text-center">
        {/* Brand */}
        <div className="mb-9 flex items-center justify-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#009c4b] text-white shadow-lg shadow-green-900/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M3 4h2l2.3 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.5L22 8H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
              <path d="M9 11h9" />
            </svg>
          </div>

          <div className="text-left">
            <h1 className="text-2xl font-extrabold tracking-tight">
              বাজার <span className="text-[#009c4b]">দর</span>
            </h1>

            <p className="mt-1 text-xs text-[#748078]">আপনার নিত্যপ্রয়োজনীয় বাজারের সঙ্গী</p>
          </div>
        </div>

        {/* Animated Loader */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#dce9df]">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#009c4b] border-t-transparent" />
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-bold sm:text-2xl">বাজারের দাম খোঁজা হচ্ছে...</h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#748078] sm:text-base">
          একটু অপেক্ষা করুন, আপনার জন্য তথ্য প্রস্তুত করা হচ্ছে।
        </p>

        {/* Product Skeleton Cards */}
        <div className="mt-10 grid grid-cols-2 gap-3 text-left sm:grid-cols-3 sm:gap-5">
          {products.map((product) => (
            <div key={product.id} className="animate-pulse rounded-2xl border border-[#dce9df] bg-white p-4 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf6f0] text-2xl">
                {product.icon}
              </div>

              <div className="h-3 w-3/4 rounded-full bg-[#e5eee7]" />

              <div className="mt-4 h-5 w-1/2 rounded-full bg-[#dce9df]" />

              <div className="mt-5 h-2 w-full rounded-full bg-[#edf6f0]" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-[#748078]">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
      </div>
    </main>
  );
}
