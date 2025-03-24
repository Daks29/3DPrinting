
import { MoonIcon, ShoppingCart, SunIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        BakchodModel
        </Link>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}