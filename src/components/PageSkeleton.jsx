import React from 'react';

const PageSkeleton = () => {
  return (
    <div className="section-shell bg-white py-16 md:py-24 min-h-[80vh] flex flex-col justify-start">
      <div className="section-container w-full">
        {/* Title & Subtitle Shimmer placeholders */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="w-48 h-10 rounded-lg shimmer"></div>
          <div className="w-96 h-5 rounded-md shimmer"></div>
        </div>

        {/* Grid Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border border-slate-200/80 p-6 md:p-8 rounded-2xl flex flex-col gap-5 bg-white shadow-xs">
              <div className="w-12 h-12 rounded-xl shimmer"></div>
              <div className="w-3/4 h-7 rounded-md shimmer"></div>
              <div className="w-full h-16 rounded-md shimmer"></div>
              <div className="w-1/3 h-5 rounded-md mt-4 shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
