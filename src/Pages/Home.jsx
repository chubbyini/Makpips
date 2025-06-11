import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
export default function Home() {
  const projectCards = [
    {
      level: "Bachelor’s Project",
      icon: "bi-book",
      description: "Core development skills and real-world solutions.",
      link: "/projects"
    },
    {
      level: "Master’s Project",
      icon: "bi-mortarboard",
      description: "Advanced implementation combining theory and innovation.",
      link: "/projects"
    },
    {
      level: "PhD Project",
      icon: "bi-beaker",
      description: "Complex, research-driven explorations at the highest level.",
      link: "/projects"
    },
    {
      level: "Precious Stones & Metals",
      icon: "bi-gem",
      description: "From diamonds to gold – sourcing, evaluation, and trading excellence.",
      link: "/precious-stones"
    }
  ];

  const forexCards = [
    {
      level: "Forex Trading Academy",
      icon: "bi-currency-exchange",
      description: "Master charts, strategy, and risk management with a proven system.",
      link: "/forex"
    },
    {
      level: "Signals & Mentorship",
      icon: "bi-bar-chart-line",
      description: "Get reliable signals and personalized trading mentorship.",
      link: "/forex"
    },
    {
      level: "Forex Project Support",
      icon: "bi-graph-up-arrow",
      description: "Academic support for Forex-related research and project work.",
      link: "/forex"
    }
  ];

  return (
    <main className="px-4 sm:px-8 py-10">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4">Building Visions, Delivering Value</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Explore our academic, engineering, and luxury projects. From research to rare stones, we bring vision to reality.
        </p>
        <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Explore Projects
        </Link>
      </section>

      {/* Category Cards */}
      <section className="mt-10 max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[...projectCards, ...forexCards].map((p) => (
          <Link
            key={p.level}
            to={p.link}
            className="group p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-xl transition transform hover:-translate-y-1"
          >
            <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-3">
              <i className={`bi ${p.icon}`}></i>
            </div>
            <h4 className="text-xl font-semibold mb-2">{p.level}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.description}</p>
            <span className="text-blue-600 group-hover:underline">See More →</span>
          </Link>
        ))}
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <Testimonials />
      </section>
    </main>
  );
}
