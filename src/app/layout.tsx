"use client";
import './globals.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      router.push('/home');
    } else {
      router.push('/login');
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
