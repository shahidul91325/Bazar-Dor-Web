'use client';

import { useState } from 'react';
import { authClient } from '@/app/lib/auth-client';
import Link from 'next/link';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return null;
  }
  return (
    <div>
      {user ? (
        <div className="relative inline-block">
          {/* Profile Name + Image */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-gray-100"
          >
            {/* Profile Image or Default Icon */}
            {user.image ? (
              <img
                src={user.image}
                alt={user.name || 'Profile'}
                className="h-9 w-9 shrink-0 rounded-full border border-[#dce9df] object-cover"
              />
            ) : (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dce9df] bg-green-50 text-[#1b2d23]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
            )}

            <span className="max-w-28 truncate text-sm font-semibold text-[#1b2d23] sm:max-w-40 sm:text-base">
              {user?.name}
            </span>

            <span className={`text-xs text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {/* Dropdown Card */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(280px,calc(100vw-24px))] rounded-xl border border-[#dce9df] bg-white p-4 shadow-lg sm:w-[300px] sm:p-5">
              {/* User Information */}
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                {/* Dropdown Profile Image or Default Icon */}
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || 'Profile'}
                    className="h-12 w-12 shrink-0 rounded-full border border-[#dce9df] object-cover"
                  />
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dce9df] bg-green-50 text-[#1b2d23]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 0 0-16 0" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                )}

                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-base font-semibold text-[#1b2d23]">{user?.name}</h2>

                  <p className="mt-1 break-all text-xs text-[#657168] sm:text-sm">{user?.email}</p>
                </div>
              </div>

              {/* Edit Profile */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/profile';
                }}
                className="mt-2 flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-gray-700 transition hover:bg-green-50"
              >
                <span>👤</span>
                <span>আমার প্রোফাইল</span>
              </button>

              {/* Sign Out */}
              <button
                type="button"
                onClick={handleSignOut}
                className="mt-1 flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
              >
                <span>↩</span>
                <span>সাইন আউট</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-1 lg:gap-5">
          <Link href="/sign-in">
            <button className="btn btn-ghost btn-sm text-[8px] md:text-md lg:btn-md lg:text-lg">সাইন ইন</button>
          </Link>

          <Link href="/sign-up">
            <button className="btn btn-active btn-success btn-sm text-[8px] md:text-md lg:btn-md lg:text-lg">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
