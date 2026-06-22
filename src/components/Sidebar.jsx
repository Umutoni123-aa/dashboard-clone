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

// Each object represents one link in the sidebar
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

// This function returns the right className for each NavLink
function navClass({ isActive }) {
  return `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors
    ${isActive
      ? 'text-primary border-l-4 border-primary bg-blue-50'
      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
    }`
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto">

      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <span className="text-xl font-bold text-primary">Hope UI</span>
      </div>

      {/* User mini profile */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          U
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Umutoni</p>
          <p className="text-xs text-gray-400">Student</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-6">

        {/* File Manager group */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">
            File Manager
          </p>
          {fileManagerLinks.map(link => (
            <NavLink key={link.to + link.label} to={link.to} className={navClass}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Pages group */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">
            Pages
          </p>
          {pagesLinks.map(link => (
            <NavLink key={link.to + link.label} to={link.to} className={navClass}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Other group */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">
            Other
          </p>
          {otherLinks.map(link => (
            <NavLink key={link.to + link.label} to={link.to} className={navClass}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

      </nav>
    </aside>
  )
}