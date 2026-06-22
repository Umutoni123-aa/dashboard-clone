export default function ImageCard({ image, onClick }) {
  return (
    <div
      onClick={() => onClick(image)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={image.url}
          alt={image.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card info */}
      <div className="p-3">
        <p className="text-sm font-semibold text-gray-800 truncate">{image.name}</p>
        <p className="text-xs text-gray-400 mt-1">{image.createdAt}</p>
        <p className="text-xs text-info mt-1">{image.lastOpenedAt}</p>
      </div>
    </div>
  )
}