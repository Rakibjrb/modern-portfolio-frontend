const DetailsSkeleton = () => {
  return (
    <div className="space-y-12 animate-pulse w-full">
      {/* Back breadcrumb skeleton */}
      <div className="h-4 w-32 bg-white/10 rounded-md"></div>

      {/* Hero Header Skeleton */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="h-6 w-24 bg-white/10 rounded-full"></div>
          <div className="h-6 w-20 bg-white/10 rounded-full"></div>
        </div>

        <div className="h-12 w-3/4 bg-white/10 rounded-xl"></div>
        <div className="h-6 w-full max-w-2xl bg-white/5 rounded-lg"></div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-10 w-36 bg-white/15 rounded-xl"></div>
          <div className="h-10 w-32 bg-white/10 rounded-xl"></div>
        </div>
      </div>

      {/* Main image preview skeleton */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-3xl border border-white/10"></div>

      {/* Thumbnails row */}
      <div className="flex gap-3">
        <div className="w-24 h-16 bg-white/10 rounded-xl"></div>
        <div className="w-24 h-16 bg-white/10 rounded-xl"></div>
        <div className="w-24 h-16 bg-white/10 rounded-xl"></div>
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
          <div className="h-8 w-48 bg-white/10 rounded-lg"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-5/6 bg-white/5 rounded"></div>
            <div className="h-4 w-4/6 bg-white/5 rounded"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="h-6 w-40 bg-white/10 rounded-md"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-7 w-20 bg-white/10 rounded-xl"></div>
              <div className="h-7 w-16 bg-white/10 rounded-xl"></div>
              <div className="h-7 w-24 bg-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
