'use client';

import { authClient } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function ProfilePage() {
  const { data: session, isPending, refetch } = authClient.useSession();
  const router = useRouter();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace('/sign-in?reason=login-required');
    }
  }, [isPending, user, router]);
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    const updatedName = name.trim();

    if (!updatedName) {
      setMessage('আপনার নাম লিখুন।');
      setIsError(true);
      return;
    }

    if (updatedName === user?.name) {
      setMessage('আপনি নতুন কোনো নাম দেননি।');
      setIsError(true);
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.updateUser({
        name: updatedName,
      });

      if (error) {
        setMessage(error.message || 'নাম আপডেট করা যায়নি।');
        setIsError(true);
        return;
      }

      await refetch();

      setName('');
      setMessage('আপনার নাম সফলভাবে আপডেট হয়েছে!');
      toast.success('আপনার নাম সফলভাবে আপডেট হয়েছে!');
    } catch {
      setMessage('কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#edf6f0]">
        <p className="text-gray-600">লোড হচ্ছে...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#edf6f0] px-4">
        <p className="text-gray-600">লগইন পেজে নেওয়া হচ্ছে...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf6f0] px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <header className="mb-7">
          <h1 className="text-2xl font-bold text-[#1b3025] sm:text-3xl">আমার প্রোফাইল</h1>
          <p className="mt-2 text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </header>

        {/* User profile card */}
        <section className="flex flex-col items-start gap-4 rounded-2xl border border-[#dce9df] bg-[#fbfdfb] p-5 sm:flex-row sm:items-center sm:p-6">
          {/* Existing profile image */}
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || 'Profile'}
              className="h-[76px] w-[76px] shrink-0 rounded-2xl bg-gray-100 object-cover"
            />
          ) : (
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl bg-green-100 text-3xl font-bold text-green-700">
              {(user.name || user.email || 'U').charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h2 className="break-words text-xl font-semibold text-[#1b3025]">{user.name}</h2>
            <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">{user.email}</p>
          </div>

          <button
            type="button"
            onClick={async () => {
              await authClient.signOut();
              window.location.href = '/sign-in';
            }}
            className="shrink-0 rounded-lg border border-rose-500 px-4 py-2.5 text-sm text-rose-600 transition hover:bg-rose-50"
          >
            ↩ সাইন আউট
          </button>
        </section>

        {/* Update name only */}
        <section className="mt-6 rounded-2xl border border-[#dce9df] bg-[#fbfdfb] p-5 sm:p-7">
          <h2 className="text-lg font-semibold text-[#1b3025]">তথ্য</h2>

          <form onSubmit={handleUpdate} className="mt-7 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                নাম
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={user.name || 'আপনার নাম লিখুন'}
                maxLength={100}
                required
                className="w-full rounded-lg border border-[#dce9df] bg-transparent px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {message && (
              <p role="status" aria-live="polite" className={`text-sm ${isError ? 'text-red-600' : 'text-green-700'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !name.trim() || name.trim() === user.name}
              className="w-full rounded-lg bg-[#009b4b] px-4 py-3 font-semibold text-white shadow-[0_3px_0_#80d4a0] transition hover:bg-[#008640] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'আপডেট হচ্ছে...' : 'আপডেট'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
