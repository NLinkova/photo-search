import type { UnsplashPhoto } from "./unsplash"

const FAVORITES_KEY = "favorites"

export function getFavorites(): Promise<UnsplashPhoto[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve([])
      return
    }

    try {
      const saved = localStorage.getItem(FAVORITES_KEY)
      const favorites = saved ? JSON.parse(saved) : []
      resolve(favorites)
    } catch (error) {
      console.error("Error loading favorites:", error)
      resolve([])
    }
  })
}

export function addToFavorites(photo: UnsplashPhoto): void {
  if (typeof window === "undefined") return

  try {
    const saved = localStorage.getItem(FAVORITES_KEY)
    const favorites = saved ? JSON.parse(saved) : []

    if (!favorites.find((fav: UnsplashPhoto) => fav.id === photo.id)) {
      favorites.push(photo)
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  } catch (error) {
    console.error("Error adding to favorites:", error)
  }
}

export function removeFromFavorites(photoId: string): void {
  if (typeof window === "undefined") return

  try {
    const saved = localStorage.getItem(FAVORITES_KEY)
    const favorites = saved ? JSON.parse(saved) : []
    const filtered = favorites.filter((fav: UnsplashPhoto) => fav.id !== photoId)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error("Error removing from favorites:", error)
  }
}

export function isFavoritePhoto(photoId: string): boolean {
  if (typeof window === "undefined") return false

  try {
    const saved = localStorage.getItem(FAVORITES_KEY)
    const favorites = saved ? JSON.parse(saved) : []
    return favorites.some((fav: UnsplashPhoto) => fav.id === photoId)
  } catch (error) {
    console.error("Error checking favorite status:", error)
    return false
  }
}
