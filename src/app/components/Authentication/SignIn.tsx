import Link from 'next/link';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.8 6-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.7-5.1c-1.8 1.2-4 2-6.8 2-5.2 0-9.6-3.5-11.2-8.2H5.9v5.2A20 20 0 0 0 24 44Z"
      />
      <path fill="#FBBC05" d="M12.8 27.8a12 12 0 0 1 0-7.6V15H5.9a20 20 0 0 0 0 18l6.9-5.2Z" />
      <path
        fill="#EA4335"
        d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.9 15l6.9 5.2c1.6-4.7 6-8.1 11.2-8.1Z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 .9a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.9 2.1 3.4 1.55.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.23-5.1 5.51.41.36.77 1.03.77 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col bg-[#edf6f0] text-[#1c2c23]">
      {/* Main content */}
      <main className="flex flex-1 flex-col items-center px-4 pb-16 pt-12 sm:px-6 sm:pt-14 lg:pt-12">
        <div className="mb-7 text-center sm:mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">সাইন ইন</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#748078] sm:text-base">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে
            <br className="hidden sm:block" /> লগইন করুন।
          </p>
        </div>

        {/* Sign-in card */}
        <section className="w-full max-w-[496px] rounded-[22px] border border-[#dce9df] bg-[#f9fcfa] p-5 shadow-sm sm:p-7 md:p-8">
          <form action="#" className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold sm:text-base">
                ইমেইল
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="h-12 w-full rounded-xl border border-[#dce8df] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#34443a] focus:border-[#009c4b] focus:ring-4 focus:ring-[#009c4b]/10 sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-bold sm:text-base">
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="current-password"
                minLength={8}
                required
                className="h-12 w-full rounded-xl border border-[#dce8df] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#34443a] focus:border-[#009c4b] focus:ring-4 focus:ring-[#009c4b]/10 sm:text-base"
              />
            </div>

            <div className="flex justify-end">
              <Link href="/forgot-password" className="-mt-2 text-sm font-medium text-[#009c4b] hover:underline">
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#009c4b] text-base font-bold text-white shadow-[0_4px_0_#007b3b] transition hover:bg-[#008841] active:translate-y-0.5 active:shadow-none"
            >
              সাইন ইন
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#dce6df]" />
            <span className="text-sm text-[#68746c]">অথবা</span>
            <div className="h-px flex-1 bg-[#dce6df]" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#dce8df] px-3 text-sm font-bold transition hover:border-[#009c4b] hover:bg-[#f0f8f2]"
            >
              <GoogleIcon />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#dce8df] px-3 text-sm font-bold transition hover:border-[#009c4b] hover:bg-[#f0f8f2]"
            >
              <GithubIcon />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-7 text-center text-sm sm:text-base">
            অ্যাকাউন্ট নেই?{' '}
            <Link href="/sign-up" className="font-semibold text-[#009c4b] hover:underline">
              সাইন আপ করুন
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
