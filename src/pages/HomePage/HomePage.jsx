
function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="font-semibold text-blue-600">
          Welcome to Touchmen
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Build something amazing with React.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          A modern public layout with React Router
          and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/about"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Learn More
          </a>

          <a
            href="/contact"
            className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home