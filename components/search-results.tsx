import { searchPhotos } from "@/lib/unsplash"
import { PhotoGrid } from "@/components/photo-grid"
import { Pagination } from "@/components/pagination"

interface SearchResultsProps {
  query: string
  page: number
}

export async function SearchResults({ query, page }: SearchResultsProps) {
  try {
    const result = await searchPhotos(query, page)

    if (result.results.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">Изображения не найдены</p>
        </div>
      )
    }

    return (
      <div>
        <PhotoGrid photos={result.results} />
        <Pagination
          currentPage={page}
          totalPages={Math.min(result.total_pages, 50)} // Unsplash API limit
          query={query}
        />
      </div>
    )
  } catch (error) {
    console.error("Error searching photos:", error)
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Ошибка поиска изображений</p>
      </div>
    )
  }
}
