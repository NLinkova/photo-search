"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Download, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type UnsplashPhoto, getPhoto } from "@/lib/unsplash"
import { useFavorites } from "@/hooks/use-favorites"
import { cn } from "@/lib/utils"

interface PhotoDetailProps {
  photoId: string
}

export function PhotoDetail({ photoId }: PhotoDetailProps) {
  const [photo, setPhoto] = useState<UnsplashPhoto | null>(null)
  const [loading, setLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    const loadPhoto = async () => {
      try {
        const photoData = await getPhoto(photoId)
        setPhoto(photoData)
      } catch (error) {
        console.error("Error loading photo:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPhoto()
  }, [photoId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!photo) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Изображение не найдено</p>
      </div>
    )
  }

  const handleDownload = () => {
    window.open(photo.links.download, "_blank")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="relative">
          <Image
            src={photo.urls.regular || "/placeholder.svg"}
            alt={photo.alt_description || "Photo"}
            width={photo.width}
            height={photo.height}
            className={cn("w-full h-auto transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <div className="aspect-video bg-gray-200 animate-pulse" />}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{photo.alt_description || "Untitled"}</h1>
              <p className="text-gray-600">
                Автор:{" "}
                <a
                  href={photo.user.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {photo.user.name}
                </a>
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => toggleFavorite(photo)}>
                <Heart
                  className={cn("w-4 h-4 mr-2", isFavorite(photo.id) ? "fill-red-500 text-red-500" : "text-gray-600")}
                />
                {isFavorite(photo.id) ? "Убрать из избранного" : "В избранное"}
              </Button>

              <Button size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Скачать
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Размер</p>
              <p className="font-medium">
                {photo.width} × {photo.height}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Лайки</p>
              <p className="font-medium">{photo.likes}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Скачивания</p>
              <p className="font-medium">{photo.downloads || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Дата</p>
              <p className="font-medium">{new Date(photo.created_at).toLocaleDateString("ru-RU")}</p>
            </div>
          </div>

          {photo.tags && photo.tags.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Теги</p>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag) => (
                  <Badge key={tag.title} variant="secondary">
                    {tag.title}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t">
            <Button variant="outline" asChild>
              <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Посмотреть на Unsplash
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
