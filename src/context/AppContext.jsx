import { createContext, useContext, useState } from 'react'
import images from '../data/images'

// 1. Create the context
const AppContext = createContext()

// 2. Create the provider — this wraps the app and shares state
export function AppProvider({ children }) {
  const [imageList] = useState(images)
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Recently viewed = first 6 images (already sorted by lastOpenedAt in data file)
  const recentlyViewed = imageList.slice(0, 6)

  // Filtered images based on search input
  const filteredImages = imageList.filter(img =>
    img.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppContext.Provider value={{
      imageList,
      recentlyViewed,
      filteredImages,
      selectedImage,
      setSelectedImage,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </AppContext.Provider>
  )
}

// 3. Custom hook so any component can easily access the context
export function useApp() {
  return useContext(AppContext)
}