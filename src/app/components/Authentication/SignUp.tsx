'use client';

import { authClient } from '@/app/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M12 .9a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.9 2.1 3.4 1.55.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.23-5.1 5.51.41.36.77 1.03.77 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z" />
    </svg>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return visible ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="m3 3 18 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function SignUp() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<'google' | 'github' | ''>('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '')
      .trim()
      .toLowerCase();
    const password = String(formData.get('password') ?? '');
    const confirmPassword = String(formData.get('confirmPassword') ?? '');

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('সবগুলো ঘর পূরণ করুন।');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('দুটি পাসওয়ার্ড মিলছে না।');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: '/',
      });

      if (error) {
        setErrorMessage(error.message || 'অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।');
        return;
      }

      if (data) {
        router.replace('/');
        router.refresh();
      } else {
        setErrorMessage('অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।');
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrorMessage('একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'github') => {
    setErrorMessage('');
    setSocialLoading(provider);

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: '/',
      });

      if (error) {
        setErrorMessage(error.message || 'Social sign-in ব্যর্থ হয়েছে।');
      }
    } catch (error) {
      console.error('Social sign-in error:', error);
      setErrorMessage('Social sign-in করতে সমস্যা হয়েছে।');
    } finally {
      setSocialLoading('');
    }
  };

  const inputClass =
    'h-11 w-full rounded-lg border border-[#dce8df] bg-transparent px-3 text-sm outline-none transition placeholder:text-[#34443a] focus:border-[#009c4b] focus:ring-4 focus:ring-[#009c4b]/10 disabled:opacity-60';

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#edf6f0] px-4 py-10 text-[#1c2c23] sm:px-6">
      <div className="w-full max-w-[496px]">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="mt-3 text-sm leading-6 text-[#748078] sm:text-base">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখতে শুরু করুন।
          </p>
        </div>

        <section className="rounded-[20px] border border-[#dce9df] bg-[#f9fcfa] p-5 shadow-sm sm:p-7 md:p-8">
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            {errorMessage && (
              <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700">
                {errorMessage}
              </p>
            )}

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: শহিদ উদ্দিন"
                autoComplete="name"
                required
                disabled={loading}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                ইমেইল
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                disabled={loading}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  disabled={loading}
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখান'}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-[#748078] hover:text-[#009c4b]"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="আবার লিখুন"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  disabled={loading}
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={showConfirmPassword ? 'নিশ্চিতকরণ পাসওয়ার্ড লুকান' : 'নিশ্চিতকরণ পাসওয়ার্ড দেখান'}
                  aria-pressed={showConfirmPassword}
                  className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-[#748078] hover:text-[#009c4b]"
                >
                  <EyeIcon visible={showConfirmPassword} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !!socialLoading}
              className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#009c4b] text-sm font-bold text-white shadow-[0_3px_0_#007b3b] transition hover:bg-[#008841] active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {loading ? 'অ্যাকাউন্ট তৈরি হচ্ছে...' : 'অ্যাকাউন্ট তৈরি করুন'}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dce6df]" />
            <span className="text-xs text-[#68746c]">অথবা</span>
            <div className="h-px flex-1 bg-[#dce6df]" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              disabled={loading || !!socialLoading}
              onClick={() => handleSocialSignIn('google')}
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8df] px-2 text-xs font-bold transition hover:border-[#009c4b] hover:bg-[#f0f8f2] disabled:opacity-60 sm:text-sm"
            >
              <GoogleIcon />
              {socialLoading === 'google' ? 'অপেক্ষা করুন...' : 'Google দিয়ে চালিয়ে যান'}
            </button>

            <button
              type="button"
              disabled={loading || !!socialLoading}
              onClick={() => handleSocialSignIn('github')}
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8df] px-2 text-xs font-bold transition hover:border-[#009c4b] hover:bg-[#f0f8f2] disabled:opacity-60 sm:text-sm"
            >
              <GithubIcon />
              {socialLoading === 'github' ? 'অপেক্ষা করুন...' : 'GitHub দিয়ে চালিয়ে যান'}
            </button>
          </div>

          <p className="mt-6 text-center text-sm">
            অ্যাকাউন্ট আছে?{' '}
            <Link href="/sign-in" className="font-semibold text-[#009c4b] hover:underline">
              সাইন ইন করুন
            </Link>
          </p>
        </section>

        <Link href="/" className="mt-5 block text-center text-sm text-[#748078] transition hover:text-[#009c4b]">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
