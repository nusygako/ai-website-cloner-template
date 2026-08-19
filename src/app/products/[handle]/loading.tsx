import { Skeleton } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[45%_1fr] lg:gap-16">
        <div>
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="mt-3 flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-[72px] w-[72px] rounded-md" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="h-9 w-3/4" />
          <Skeleton className="mt-3 h-7 w-32" />
          <Skeleton className="mt-6 h-20 w-full rounded-lg" />
          <Skeleton className="mt-6 h-5 w-40" />
          <div className="mt-3 flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-12 rounded-full" />
            ))}
          </div>
          <Skeleton className="mt-6 h-14 w-full rounded-full" />
          <Skeleton className="mt-3 h-14 w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}
