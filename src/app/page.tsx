'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, QrCode, LayoutDashboard } from 'lucide-react';
import { SplashAnimation } from '@/components/splash-animation';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/profile');
    }, 4000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-sky-50 to-background p-6 text-center">
      <div className="flex items-center gap-4 mb-8">
        <Camera className="w-8 h-8 text-primary" />
        <QrCode className="w-10 h-10 text-primary" />
        <LayoutDashboard className="w-8 h-8 text-primary" />
      </div>

      <h1 className="text-5xl font-bold text-slate-800 mb-4 font-headline">
        MEDCARE QR
      </h1>

      <SplashAnimation />

      <p className="text-xl font-bold text-slate-700 mt-8 max-w-md mx-auto font-headline">
        Easy Access to Medical Records – Anytime, Anywhere
      </p>
      <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
        Designed for elderly, caregivers & non-technical users
      </p>
    </main>
  );
}
