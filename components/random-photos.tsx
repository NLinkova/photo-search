import { getRandomPhotos } from "@/lib/unsplash"
import { PhotoGrid } from "@/components/photo-grid"

export async function RandomPhotos() {
  try {
    const photos = await getRandomPhotos(8)
    return <PhotoGrid photos={photos} />
  } catch (error) {
    console.error("Error fetching random photos:", error)
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Ошибка загрузки изображений</p>
      </div>
    )
  }
}
