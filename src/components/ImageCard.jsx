export default function ImageCard({ image, onClick }) {
  return (
    <div
      onClick={() => onClick(image)}
      className="bg-white rounded-xl border border-gray-100 cursor-pointer hover:shadow-md transition-all overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image.url}
          alt={image.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card info */}
      <div className="p-3">
        <p className="text-xs text-gray-400 mb-1">Created on {image.createdAt}</p>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-primary text-sm">🖼</span>
          <p className="text-sm font-semibold text-gray-800 truncate">{image.name}</p>
        </div>
        <p className="text-xs">
          You opened <span className="text-info font-medium">{image.lastOpenedAt}</span>
        </p>
      </div>
    </div>
  )
}