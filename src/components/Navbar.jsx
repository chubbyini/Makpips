import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Makpips
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <i className="bi bi-house-door-fill"></i> Home
            </Link>
            <Link to="/projects" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <i className="bi bi-kanban-fill"></i> Projects
            </Link>
            <Link to="/meet-the-owner" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <i className="bi bi-person-badge-fill"></i> Meet Me
            </Link>
            <Link to="/precious-stones" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <i className="bi bi-gem"></i> Precious Stones
            </Link>
            <Link to="/forex" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <i className="bi bi-currency-exchange"></i> Forex
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 transition-all duration-300 ease-in-out">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <i className="bi bi-house-door-fill"></i> Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <i className="bi bi-kanban-fill"></i> Projects
          </Link>
          <Link to="/meet-the-owner" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <i className="bi bi-person-badge-fill"></i> Meet the Owner
          </Link>
          <Link to="/precious-stones" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <i className="bi bi-gem"></i> Precious Stones
          </Link>
          <Link to="/forex" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <i className="bi bi-currency-exchange"></i> Forex
          </Link>
        </div>
      )}
    </nav>
  );
}
