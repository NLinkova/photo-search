"use client"

import { useState, useEffect } from "react"
import type { UnsplashPhoto } from "@/lib/unsplash"
import { addToFavorites, removeFromFavorites, isFavoritePhoto } from "@/lib/favorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load favorites from localStorage on mount
    const savedFavorites = localStorage.getItem("favorites")
    if (savedFavorites) {
      try {
        const favoriteIds = JSON.parse(savedFavorites).map((photo: UnsplashPhoto) => photo.id)
        setFavorites(new Set(favoriteIds))
      } catch (error) {
        console.error("Error loading favorites:", error)
      }
    }
  }, [])

  const isFavorite = (photoId: string) => {
    return favorites.has(photoId)
  }

  const toggleFavorite = async (photo: UnsplashPhoto) => {
    const isCurrentlyFavorite = isFavoritePhoto(photo.id)

    if (isCurrentlyFavorite) {
      removeFromFavorites(photo.id)
      setFavorites((prev) => {
        const newSet = new Set(prev)
        newSet.delete(photo.id)
        return newSet
      })
    } else {
      addToFavorites(photo)
      setFavorites((prev) => new Set(prev).add(photo.id))
    }
  }

  return {
    isFavorite,
    toggleFavorite,
  }
}
