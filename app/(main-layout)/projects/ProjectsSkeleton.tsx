const ProjectsSkeleton = () => {
    return [1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="animate-pulse bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            {/* Image Skeleton */}
            <div className="h-48 bg-white/5"></div>

            <div className="p-6 space-y-4">
                {/* Title Skeleton */}
                <div className="h-6 bg-white/10 rounded w-3/4"></div>

                {/* Description Skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-white/5 rounded w-full"></div>
                    <div className="h-4 bg-white/5 rounded w-5/6"></div>
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((tagIndex) => (
                        <div key={tagIndex} className="h-6 w-16 bg-white/5 rounded"></div>
                    ))}
                </div>

                {/* Buttons Skeleton */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                    <div className="h-7 w-16 bg-white/10 rounded"></div>
                    <div className="h-7 w-16 bg-white/10 rounded"></div>
                </div>
            </div>
        </div>
    ))

}

export default ProjectsSkeleton;