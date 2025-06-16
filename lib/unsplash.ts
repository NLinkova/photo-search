export interface UnsplashPhoto {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  downloads?: number
  likes: number
  liked_by_user: boolean
  description: string | null
  alt_description: string | null
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  user: {
    id: string
    username: string
    name: string
    first_name: string
    last_name: string | null
    instagram_username: string | null
    twitter_username: string | null
    portfolio_url: string | null
    links: {
      self: string
      html: string
      photos: string
      likes: string
    }
  }
  tags?: Array<{
    title: string
  }>
}

export interface UnsplashSearchResult {
  total: number
  total_pages: number
  results: UnsplashPhoto[]
}

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || "demo-key"
const UNSPLASH_API_URL = "https://api.unsplash.com"

async function fetchFromUnsplash(endpoint: string): Promise<any> {
  const response = await fetch(`${UNSPLASH_API_URL}${endpoint}`, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
  })

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status}`)
  }

  return response.json()
}

export async function getRandomPhotos(count = 8): Promise<UnsplashPhoto[]> {
  return fetchFromUnsplash(`/photos/random?count=${count}`)
}

export async function searchPhotos(query: string, page = 1, perPage = 12): Promise<UnsplashSearchResult> {
  return fetchFromUnsplash(`/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`)
}

export async function getPhoto(id: string): Promise<UnsplashPhoto> {
  return fetchFromUnsplash(`/photos/${id}`)
}
