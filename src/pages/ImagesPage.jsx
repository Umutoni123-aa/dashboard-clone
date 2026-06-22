import { useApp } from '../context/AppContext'
import ImageCard from '../components/ImageCard'
import { createPortal } from 'react-dom'

function ImageModal({ image, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800">{image.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Created: {image.createdAt}</p>
          <p className="text-sm text-info mt-1">{image.lastOpenedAt}</p>
        </div>
        <div className="px-5 pb-5">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function ImagesPage() {
  const {
    recentlyViewed,
    filteredImages,
    selectedImage,
    setSelectedImage,
    searchQuery,
    setSearchQuery,
  } = useApp()

  return (
    <div className="flex flex-col gap-8">

      {/* Page header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Images</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          + Add Image
        </button>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search images by name..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="w-full max-w-md border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Recently Viewed section */}
      <section>
        <h2 className="text-base font-semibold text-gray-700 mb-3">Recently Viewed</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {recentlyViewed.map(image => (
            <div key={image.id} className="min-w-[200px]">
              <ImageCard image={image} onClick={setSelectedImage} />
            </div>
          ))}
        </div>
      </section>

      {/* All Images section */}
      <section>
        <h2 className="text-base font-semibold text-gray-700 mb-3">All Images</h2>

        {/* Empty state */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No images found</p>
            <p className="text-sm mt-1">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <ImageCard key={image.id} image={image} onClick={setSelectedImage} />
            ))}
          </div>
        )}
      </section>

      {/* Modal — only shows when an image is selected */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </div>
  )
}