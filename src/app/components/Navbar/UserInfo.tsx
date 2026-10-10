'use client';

import { useState } from 'react';
import { authClient } from '@/app/lib/auth-client';
import Link from 'next/link';

export default function ProfileDropdown() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {user ? (
        <div className="relative inline-block">
          {/* Profile Name */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-gray-100"
          >
            <span className="max-w-28 truncate text-sm font-semibold text-[#1b2d23] sm:max-w-40 sm:text-base">
              {user?.name}
            </span>

            <span className={`text-xs text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {/* Dropdown Card */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(280px,calc(100vw-24px))] rounded-xl border border-[#dce9df] bg-white p-4 shadow-lg sm:w-[300px] sm:p-5">
              {/* User Information */}
              <div className="border-b border-gray-100 pb-3">
                <h2 className="truncate text-base font-semibold text-[#1b2d23]">{user?.name}</h2>

                <p className="mt-1 break-all text-xs text-[#657168] sm:text-sm">{user?.email}</p>
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
        <div className="flex justify-center items-center lg:gap-5 gap-1 ">
          <Link href={'/sign-in'}>
            <button className="btn lg:btn-md btn-sm btn-ghost lg:text-lg md:text-md text-[8px]">সাইন ইন</button>
          </Link>
          <Link href={'/sign-up'}>
            <button className="btn lg:btn-md btn-sm btn-active btn-success lg:text-lg md:text-md text-[8px]">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
