"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn && pathname !== '/login' && pathname !== '/daftar') {
        router.replace('/login');
      }
      if (isLoggedIn && (pathname === '/login' || pathname === '/daftar')) {
        router.replace('/');
      }
    }
  }, [pathname, router]);
  return <>{children}</>;
}