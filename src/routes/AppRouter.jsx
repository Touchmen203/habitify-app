
import { Routes, Route } from 'react-router'

import PublicLayout from '../layout/PublicLayout'
import Home from '../pages/HomePage/HomePage'
import NotFound from "../pages/NotFoundPage"

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes