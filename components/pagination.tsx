import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  query: string
}

export function Pagination({ currentPage, totalPages, query }: PaginationProps) {
  const createPageUrl = (page: number) => {
    return `/search?q=${encodeURIComponent(query)}&page=${page}`
  }

  const pages = []
  const maxVisiblePages = 5
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Button variant="outline" size="sm" asChild>
          <Link href={createPageUrl(currentPage - 1)}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
      )}

      {pages.map((page) => (
        <Button key={page} variant={page === currentPage ? "default" : "outline"} size="sm" asChild>
          <Link href={createPageUrl(page)}>{page}</Link>
        </Button>
      ))}

      {currentPage < totalPages && (
        <Button variant="outline" size="sm" asChild>
          <Link href={createPageUrl(currentPage + 1)}>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}
