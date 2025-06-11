export default function MeetTheOwner() {
  return (
    <main className="relative px-4 py-20 lg:py-32 max-w-6xl mx-auto overflow-hidden">
      {/* Artistic Gradient + Wave Background */}
      <div className="absolute inset-0 -z-10">
        {/* Light Mode */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-[#f0fdfa] via-[#ccfbf1] to-[#fef9c3]" />
        
        {/* Dark Mode */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827]" />

        {/* Artistic Wave SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 opacity-20 dark:opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,122.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white relative z-10">
        Who is Engineer Maks?
      </h1>

      {/* Content */}
      <div className="relative z-10 bg-white/90 dark:bg-black/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 lg:p-14 flex flex-col lg:flex-row items-center gap-10 transition">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328b86c5?auto=format&fit=crop&w=400&q=80"
          alt="Engineer Maks"
          className="w-44 h-44 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-green-500 shadow-lg"
        />

        <div className="text-gray-800 dark:text-gray-200 text-base lg:text-lg leading-relaxed space-y-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
              Engineer Maks
              <span className="block text-xl font-semibold text-green-600 dark:text-green-400">
                (Makinde Samuel)
              </span>
            </h2>
            <p className="mt-2 text-sm lg:text-base text-gray-600 dark:text-gray-400 italic">
              COREN, NSE, LAME, SMPIN, NIMECHE, SLAMEN, IAENG, AUTOEI, HSE 1–3 Certified
            </p>
          </div>

          <p>
            A multi-talented entrepreneur with a strong academic and business background, Engineer Maks is a
            <span className="font-semibold text-green-700 dark:text-green-400"> trained lecturer</span> at the
            <span className="font-medium text-gray-900 dark:text-gray-100"> Air Force Institute of Technology (AFIT)</span>,
            and a <span className="font-semibold text-green-700 dark:text-green-400">project coordinator</span>
            mentoring students at all academic levels.
          </p>

          <p>
            He’s also a <span className="font-semibold text-green-700 dark:text-green-400">certified strategist</span>,
            <span className="font-semibold text-green-700 dark:text-green-400"> forex trader</span>, and trusted
            <span className="font-semibold text-green-700 dark:text-green-400"> precious stone merchant</span>. From academic clarity
            to global trading — he delivers excellence with integrity.
          </p>

          <p>
            His motto? <em className="text-gray-700 dark:text-gray-300">“If you can think of it, I can sell it.”</em> Whether it's
            luxury or legacy, he combines deep insight with practical business success.
          </p>
        </div>
      </div>
    </main>
  );
}
