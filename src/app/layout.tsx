"use client";
import './globals.css';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      router.push('/home');
    } else {
      pathName.includes('login') ? router.push('/login') : router.push('/register');
    }
  }, []);

  return (
    <html lang="en">
      <body>
      { children }
      </body>
    </html>
  );
}
