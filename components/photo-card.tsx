"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { UnsplashPhoto } from "@/lib/unsplash"
import { useFavorites } from "@/hooks/use-favorites"
import { cn } from "@/lib/utils"

interface PhotoCardProps {
  photo: UnsplashPhoto
}

export function PhotoCard({ photo }: PhotoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { isFavorite, toggleFavorite } = useFavorites()

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(photo)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/photo/${photo.id}`}>
        <div className="relative aspect-square">
          <Image
            src={photo.urls.small || "/placeholder.svg"}
            alt={photo.alt_description || "Photo"}
            fill
            className={cn("object-cover transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white",
              isFavorite(photo.id) && "opacity-100",
            )}
            onClick={handleFavoriteClick}
          >
            <Heart className={cn("w-4 h-4", isFavorite(photo.id) ? "fill-red-500 text-red-500" : "text-gray-600")} />
          </Button>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-600 truncate">by {photo.user.name}</p>
        </div>
      </Link>
    </Card>
  )
}
