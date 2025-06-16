import { Suspense } from "react"
import { RandomPhotos } from "@/components/random-photos"
import { SearchBar } from "@/components/search-bar"
import { Navigation } from "@/components/navigation"
import { PhotoSkeleton } from "@/components/photo-skeleton"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Поиск изображений</h1>
          <p className="text-gray-600 mb-8">Найдите идеальные изображения для ваших проектов</p>
          <SearchBar />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Случайные изображения</h2>
          <Suspense fallback={<PhotoSkeleton count={8} />}>
            <RandomPhotos />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
