import {
  Skeleton,
  ProductGridSkeleton,
} from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="mt-3 h-4 w-40" />
      <div className="mt-6 flex gap-3 border-b border-[rgba(18,18,18,0.1)] pb-4">
        <Skeleton className="h-9 w-24 rounded-full" />
        <Skeleton className="h-9 w-32 rounded-full" />
        <Skeleton className="h-9 w-24 rounded-full" />
      </div>
      <ProductGridSkeleton />
    </div>
  );
}
