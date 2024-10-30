import { Link } from 'react-router-dom';

function Navbar({ user, logout }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              Project Manager
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 items-center">
            {user ? (
              // If the user is logged in, show additional navigation options
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                >
                  Settings
                </Link>
                <span className="text-white mr-4">{user}</span>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              // If the user is not logged in, show Login and Signup buttons
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-white text-blue-500 rounded-md hover:bg-gray-200 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
