import { Link } from "react-router-dom";

const whatsappNumber = "2348161148391";

export default function Forex() {
  return (
    <main className="bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-black min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-[url('/images/forex-header.jpg')] bg-cover bg-center py-28 px-6 text-white text-center rounded-xl shadow-lg mb-16">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Makpips Academy</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Learn high-probability strategies, get real results, and gain the confidence to trade like a pro with Engineer Maks.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=I’m ready to start your Forex training`}
            className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 text-white rounded-lg font-semibold"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Academy Overview */}
      <section className="max-w-5xl mx-auto mb-16 px-4 sm:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Academy Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Engineer Maks teaches Forex with a structured, mentorship-based approach. You’ll master technical setups, risk control, and trading psychology.
        </p>
      </section>

      {/* Signal Plans */}
      <section className="max-w-6xl mx-auto mb-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Signal Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Free Channel",
              desc: "Occasional setups, community updates, and education. Great for beginners.",
              icon: "🔓",
            },
            {
              title: "VIP Signals",
              desc: "Multiple high-quality trade setups per week with entry, SL, and TP.",
              icon: "💎",
            },
            {
              title: "Funded Challenge Help",
              desc: "Signals tailored to help you pass FTMO/MyForexFunds challenges.",
              icon: "🎯",
            },
          ].map((plan, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
              <div className="text-6xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{plan.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Results */}
      <section className="max-w-6xl mx-auto mb-20 px-4 sm:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Student Results</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Makpips students consistently achieve funding, profitability, and peace of mind. These icons represent the milestones they hit regularly.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-6xl text-green-600 dark:text-green-400">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <span>📈</span>
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Consistent Growth</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <span>💰</span>
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Funded Accounts</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <span>🏆</span>
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Challenge Wins</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20 px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Join?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Whether you're starting out or scaling up, Engineer Maks is ready to guide you through every stage.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=I’m ready to join your Forex mentorship.`}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg text-lg font-medium shadow-md transition"
        >
          Join on WhatsApp
        </a>
      </section>

    </main>
  );
}
