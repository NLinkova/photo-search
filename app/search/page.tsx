import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"
import { SearchBar } from "@/components/search-bar"
import { Navigation } from "@/components/navigation"
import { PhotoSkeleton } from "@/components/photo-skeleton"

interface SearchPageProps {
  searchParams: { q?: string; page?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const page = Number.parseInt(searchParams.page || "1")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar defaultValue={query} />
        </div>

        {query && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Результаты поиска: "{query}"</h2>
            <Suspense fallback={<PhotoSkeleton count={12} />}>
              <SearchResults query={query} page={page} />
            </Suspense>
          </div>
        )}
      </main>
    </div>
  )
}
