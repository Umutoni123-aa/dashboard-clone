import { NavLink } from 'react-router-dom'
import {
  MdDashboard,
  MdImage,
  MdVideoLibrary,
  MdDescription,
  MdFolder,
  MdDelete,
  MdLogout,
  MdHelp,
} from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const fileManagerLinks = [
  { label: 'Dashboard', icon: <MdDashboard />, to: '/images' },
]

const pagesLinks = [
  { label: 'Image',     icon: <MdImage />,       to: '/images' },
  { label: 'Video',     icon: <MdVideoLibrary />, to: '/videos' },
  { label: 'Document',  icon: <MdDescription />,  to: '/documents' },
  { label: 'All Files', icon: <MdFolder />,        to: '/all-files' },
  { label: 'Trash',     icon: <MdDelete />,        to: '/trash' },
]

const otherLinks = [
  { label: 'Sign Out', icon: <MdLogout />, to: '/' },
  { label: 'Help',     icon: <MdHelp />,   to: '/' },
]

function navClass({ isActive }) {
  return `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors
    ${isActive
      ? 'text-primary border-l-4 border-primary bg-blue-50'
      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
    }`
}

export default function Sidebar({ onClose }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto">

      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <span className="text-xl font-bold text-primary">Hope UI</span>
      </div>

      {/* User profile */}
      <div className="flex flex-col items-center py-5 border-b border-gray-200 gap-2">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
          U
        </div>
        <p className="text-sm font-bold text-gray-800">Umutoni</p>
        <p className="text-xs text-primary">@umutoni</p>
        {/* Social icons */}
        <div className="flex items-center gap-3 mt-1">
          <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
            <FaFacebook />
          </button>
          <button className="w-8 h-8 rounded-full bg-info text-white flex items-center justify-center text-sm">
            <FaTwitter />
          </button>
          <button className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm">
            <FaInstagram />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-6">

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">File Manager</p>
          {fileManagerLinks.map(link => (
            <NavLink key={link.to + link.label} to={link.to} className={navClass} onClick={onClose}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">Pages</p>
          {pagesLinks.map(link => (
            <NavLink key={link.to + link.label} to={link.to} className={navClass} onClick={onClose}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">Other</p>
          {otherLinks.map(link => (
            <NavLink key={link.to + link.label} to={link.to} className={navClass} onClick={onClose}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

      </nav>
    </aside>
  )
}