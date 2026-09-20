
import { Link } from 'react-router'

function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-gray-900">
        404
      </h1>

      <p className="mt-4 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound