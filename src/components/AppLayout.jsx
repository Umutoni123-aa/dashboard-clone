import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-pageBg overflow-hidden">
      
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right side: Navbar on top, page content below */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        {/* Page content scrolls here */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

    </div>
  )
}