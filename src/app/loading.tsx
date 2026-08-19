import { Skeleton } from "@/components/sites/toptan16ayakkabidunyasi-com-1d902824/shared/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8">
      <Skeleton className="mx-auto h-8 w-64" />
      <Skeleton className="mx-auto mt-4 h-4 w-80" />
      <div className="mx-auto mt-10 max-w-md">
        <Skeleton className="h-40 w-full rounded-lg" />
      </div>
    </div>
  );
}
