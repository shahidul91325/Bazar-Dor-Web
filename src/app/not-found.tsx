import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#edf6f0] px-4 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-[#dce9df] bg-[#f9fcfa] px-5 py-10 text-center shadow-sm sm:px-10 sm:py-14">
        {/* Illustration */}
        <div className="relative mx-auto mb-7 flex h-30 w-30 items-center justify-center rounded-full bg-[#e0f3e6] sm:h-44 sm:w-44">
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#a6d9b6]" />

          <div className="text-7xl sm:text-6xl">🛒</div>

          <span className="absolute -right-1 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-md">
            ?
          </span>
        </div>

        {/* Error code */}
        <p className="text-7xl font-black tracking-tight text-[#009c4b] sm:text-8xl">404</p>

        <h1 className="mt-4 text-2xl font-extrabold text-[#1c2c23] sm:text-3xl">পেজটি খুঁজে পাওয়া যায়নি!</h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#748078] sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, ঠিকানা পরিবর্তন হয়েছে অথবা লিংকটি ভুল।
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#009c4b] px-6 text-sm font-bold text-white shadow-[0_3px_0_#007b3b] transition hover:bg-[#008841] active:translate-y-0.5 active:shadow-none"
          >
            <span aria-hidden="true">←</span>
            হোম পেজে ফিরে যান
          </Link>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-[#dce8df] bg-white px-6 text-sm font-bold text-[#1c2c23] transition hover:border-[#009c4b] hover:bg-[#f0f8f2]"
          >
            বাজারের দাম দেখুন
          </Link>
        </div>

        <div className="mt-10 border-t border-[#e4ece6] pt-6">
          <Link href="/" className="text-sm font-extrabold text-[#009c4b] hover:underline">
            🛒 বাজার দর
          </Link>

          <p className="mt-2 text-xs text-[#748078]">প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        </div>
      </section>
    </main>
  );
}
