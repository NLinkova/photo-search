"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { PhotoGrid } from "@/components/photo-grid"
import type { UnsplashPhoto } from "@/lib/unsplash"
import { getFavorites } from "@/lib/favorites"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<UnsplashPhoto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritePhotos = await getFavorites()
        setFavorites(favoritePhotos)
      } catch (error) {
        console.error("Error loading favorites:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFavorites()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Избранные изображения</h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : favorites.length > 0 ? (
          <PhotoGrid photos={favorites} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">У вас пока нет избранных изображений</p>
          </div>
        )}
      </main>
    </div>
  )
}
