
import { Outlet } from 'react-router'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PublicLayout