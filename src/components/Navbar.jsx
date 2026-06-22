import { useState } from 'react'
import { MdShoppingCart, MdNotifications, MdPerson } from 'react-icons/md'

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-10">

      {/* Left side: page title */}
      <h1 className="text-lg font-semibold text-gray-800">File Manager</h1>

      {/* Right side: icons */}
      <div className="flex items-center gap-4">

        {/* Cart icon */}
        <button className="text-gray-500 hover:text-primary text-xl">
          <MdShoppingCart />
        </button>

        {/* Notifications icon */}
        <button className="text-gray-500 hover:text-primary text-xl">
          <MdNotifications />
        </button>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold"
          >
            U
          </button>

          {/* Dropdown menu — only shows when profileOpen is true */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-md z-20">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Privacy Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}