import {
  Skeleton,
  ProductGridSkeleton,
} from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
      <Skeleton className="mx-auto h-12 w-full max-w-2xl rounded-full" />
      <ProductGridSkeleton count={4} />
    </div>
  );
}
