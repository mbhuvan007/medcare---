import { cn } from "@/lib/utils";

interface PillShapeProps {
  shape: 'round' | 'capsule' | 'oval';
  color: string;
  className?: string;
}

export function PillShape({ shape, color, className }: PillShapeProps) {
  const baseClasses = "w-12 h-12 flex-shrink-0 border-2 border-slate-300/50 shadow-inner";

  const shapeClasses = {
    round: 'rounded-full',
    capsule: 'w-16 h-8 rounded-full',
    oval: 'w-16 h-10 rounded-full transform -rotate-30',
  };

  return (
    <div className={cn(baseClasses, shapeClasses[shape], color, className)} />
  );
}
