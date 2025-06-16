import { PhotoCard } from "@/components/photo-card"
import type { UnsplashPhoto } from "@/lib/unsplash"

interface PhotoGridProps {
  photos: UnsplashPhoto[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  )
}
