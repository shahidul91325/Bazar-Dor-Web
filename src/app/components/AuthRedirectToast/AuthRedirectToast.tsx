'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

function RedirectToastContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const reason = searchParams.get('reason');

    if (reason === 'login-required') {
      toast.error('এই পেজ দেখতে আগে লগইন করুন!');
    }

    if (reason === 'session-expired') {
      toast.error('আপনার সেশন শেষ হয়েছে। আবার লগইন করুন।');
    }
  }, [searchParams]);

  return null;
}

export default function AuthRedirectToast() {
  return (
    <Suspense fallback={null}>
      <RedirectToastContent />
    </Suspense>
  );
}
