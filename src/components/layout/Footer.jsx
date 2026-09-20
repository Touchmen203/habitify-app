
function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Touchmen.
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              Building modern web experiences
              with React.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Email: hello@example.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Touchmen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer