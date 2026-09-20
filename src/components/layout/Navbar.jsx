import { NavLink } from 'react-router'

function Navbar() {
  const links = [
    { name: 'habitify', path: '/' },
    { name: '@usehabitify', path: '/' },
    { name: 'Download', path: '/download' },
    { name: 'For Team', path: '/team' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Icon + Title */}
          <NavLink
            to="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              H
            </div>

            <span className="text-lg font-semibold text-gray-900">
              @usehabitify
            </span>
          </NavLink>

          {/* Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {links.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/signin"
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Sign Up
          </NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Navbar