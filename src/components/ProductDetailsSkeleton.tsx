'use client'

export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen bg-stone-50 animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-4 w-1/3 bg-stone-700 rounded mb-4"></div>
          <div className="flex gap-4">
            <div className="h-6 w-24 bg-stone-700 rounded-full"></div>
            <div className="h-6 w-20 bg-stone-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-6">
          <div className="h-[500px] bg-stone-200 rounded-3xl"></div>
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-20 h-20 bg-stone-200 rounded-xl"></div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="h-10 w-2/3 bg-stone-300 rounded mb-4"></div>
            <div className="flex gap-3 items-center">
              <div className="h-6 w-32 bg-stone-200 rounded"></div>
              <div className="h-6 w-16 bg-stone-200 rounded"></div>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
            <div className="h-8 w-40 bg-stone-300 rounded mb-3"></div>
            <div className="h-4 w-28 bg-stone-200 rounded"></div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="h-6 w-40 bg-stone-200 rounded mb-4"></div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-stone-200 rounded"></div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="h-6 w-32 bg-stone-200 rounded mb-4"></div>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-stone-200 rounded"></div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-2xl p-6 shadow space-y-6">
            <div className="h-10 w-1/3 bg-stone-200 rounded"></div>
            <div className="h-12 w-full bg-stone-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="h-8 w-56 bg-stone-200 rounded mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-stone-200 rounded-xl"></div>
          ))}
        </div>
      </div>

      {/* Vendor */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="h-8 w-48 bg-stone-200 rounded mb-4"></div>
        <div className="h-20 bg-stone-200 rounded-xl"></div>
      </div>
    </div>
  )
}
