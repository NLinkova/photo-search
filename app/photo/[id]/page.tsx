import { Suspense } from "react"
import { PhotoDetail } from "@/components/photo-detail"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface PhotoPageProps {
  params: { id: string }
}

function PhotoDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <Skeleton className="w-full h-96" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function PhotoPage({ params }: PhotoPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<PhotoDetailSkeleton />}>
          <PhotoDetail photoId={params.id} />
        </Suspense>
      </main>
    </div>
  )
}
