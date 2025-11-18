import { cn } from "@/lib/utils";

export const HeadacheIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
  >
    <path d="M12 2a5 5 0 0 0-5 5c0 1.5.6 2.8 1.5 3.7l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6c.9.9 2.2 1.5 3.7 1.5a5 5 0 0 0 5-5 5 5 0 0 0-5-5z" />
    <path d="M2.5 5.5C4 7 5.5 8 7.5 8" />
    <path d="M21.5 5.5C20 7 18.5 8 16.5 8" />
    <path d="M5 2.5C7 4 8 5.5 8 7.5" />
    <path d="M19 2.5C17 4 16 5.5 16 7.5" />
  </svg>
);

export const CoughIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
  >
    <path d="M17 12a5 5 0 1 0-10 0c0 2.4 1.2 4.5 3 5.7" />
    <path d="M7 12a5 5 0 1 1 10 0c0 2.4-1.2 4.5-3 5.7" />
    <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M3 14a2 2 0 0 1 2-2h1m13 2a2 2 0 0 0-2-2h-1" />
  </svg>
);

export const DizzinessIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
  >
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
    <path d="M12 7a5 5 0 1 0 5 5" />
  </svg>
);
