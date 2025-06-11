import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';
import MeetTheOwner from './Pages/MeetTheOwner';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Forex from './Pages/Forex';
import Admin from './Admin';
import PreciousStones from './Pages/PreciousStones';
import { PageNotFound } from './Pages/PageNotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-16">
        <Navbar />

        <main className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 max-w-screen-2xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/meet-the-owner" element={<MeetTheOwner />} />
            <Route path="/precious-stones" element={<PreciousStones />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/forex" element={<Forex />} /> {/* ✅ Add this */}
            <Route path="/*"  element={<PageNotFound />} />             
          </Routes>
        </main>

        <Footer />

        {/* WhatsApp CTA Button */}
        <a
          href="https://wa.me/18624524670?text=Hello%2C%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center space-x-2"
        >
          <i className="bi bi-whatsapp text-xl"></i>
          <span>Chat with us!</span>
        </a>
      </div>
    </Router>
  );
}
