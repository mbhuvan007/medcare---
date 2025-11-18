'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Pill, Mic, HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/profile', label: 'Profile', icon: Home },
  { href: '/medication', label: 'Medication', icon: Pill },
  { href: '/assistant', label: 'Assistant', icon: Mic },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/profile" className="mr-6 flex items-center space-x-2">
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            MedCare Assist
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 ml-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex flex-col sm:flex-row items-center justify-center gap-1 px-2 py-1 transition-colors rounded-md text-sm',
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <link.icon className="h-5 w-5" />
                <span className="text-xs sm:text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
