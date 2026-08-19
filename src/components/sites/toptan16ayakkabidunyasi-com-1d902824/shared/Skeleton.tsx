import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[rgba(18,18,18,0.08)]", className)}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-lg border-[1.6px] border-[rgba(18,18,18,0.1)] bg-white">
      <Skeleton className="aspect-square w-full rounded-t-md rounded-b-none" />
      <div className="flex flex-col items-center gap-2 p-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="mt-2 h-9 w-full rounded-full" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 py-8 md:gap-8 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
