import { cn } from "@/lib/utils";

interface ArticleSkeletonProps {
  variant?: "card" | "reader";
  className?: string;
}

export function ArticleSkeleton({
  variant = "card",
  className,
}: ArticleSkeletonProps) {
  if (variant === "reader") {
    return (
      <div
        className={cn(
          "rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-sm",
          className,
        )}
      >
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-28 rounded bg-gray-200" />
          <div className="h-10 w-3/4 rounded bg-gray-200" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-10 rounded-full bg-gray-200" />
            <div className="h-10 rounded-full bg-gray-200" />
            <div className="h-10 rounded-full bg-gray-200" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-[96%] rounded bg-gray-200" />
            <div className="h-4 w-[92%] rounded bg-gray-200" />
            <div className="h-4 w-[88%] rounded bg-gray-200" />
            <div className="h-4 w-[95%] rounded bg-gray-200" />
            <div className="h-4 w-[80%] rounded bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm",
        className,
      )}
    >
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-20 rounded-full bg-gray-200" />
        <div className="h-7 w-4/5 rounded bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-[90%] rounded bg-gray-200" />
          <div className="h-4 w-[72%] rounded bg-gray-200" />
        </div>
        <div className="h-4 w-24 rounded bg-gray-200" />
      </div>
    </div>
  );
}
