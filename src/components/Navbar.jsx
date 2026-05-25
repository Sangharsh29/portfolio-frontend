import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-5">

      <div className="max-w-7xl mx-auto bg-black/40 border border-cyan-500/20 backdrop-blur-xl rounded-2xl md:rounded-full px-5 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-5 shadow-[0_0_30px_rgba(34,211,238,0.1)]">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 tracking-[2px]">
          Sangharsh.
        </h1>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-lg">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 transition duration-300"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 transition duration-300"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 transition duration-300"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 transition duration-300"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 transition duration-300"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar