import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-black px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Owner Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Engineer Maks</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A project consultant, trader, and full-time academic with an
            entrepreneurial spirit. From research to rare jewels — excellence in every field.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
            <li><Link to="/precious-stones" className="hover:text-green-400">Precious Stones</Link></li>
            <li><Link to="/meet-the-owner" className="hover:text-green-400">Meet the Owner</Link></li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <a
            href="https://wa.me/2347012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-3 rounded-xl text-sm font-medium"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Engineer Maks. All rights reserved.
      </div>
    </footer>
  );
}
