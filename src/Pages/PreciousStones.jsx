import { Link } from "react-router-dom";

const whatsappNumber = "2348140000000"; // Replace with your own if needed

const sections = {
  preciousMetals: [
    {
      name: "Gold",
      description: "A symbol of wealth and stability, gold is timeless and highly valuable.",
      image: "https://images.unsplash.com/photo-1612817153382-c3f948c160c2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Silver",
      description: "Known for its brilliance and utility, silver blends beauty with functionality.",
      image: "https://images.unsplash.com/photo-1584652107925-4f3adf8c895c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Platinum",
      description: "Rare and durable, platinum delivers both elegance and strength.",
      image: "https://images.unsplash.com/photo-1593113599421-ea58dd56bb1e?auto=format&fit=crop&w=600&q=80",
    },
  ],
  baseMetals: [
    {
      name: "Copper",
      description: "An essential industrial metal, valued for conductivity and versatility.",
      image: "https://images.unsplash.com/photo-1606836591424-f3d82e173f6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Tin",
      description: "Widely used for coatings and alloys, tin offers reliability and versatility.",
      image: "https://images.unsplash.com/photo-1612277797475-e12ce7c2e4e6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Lead",
      description: "Historically used in many industries, now responsibly handled for safety.",
      image: "https://images.unsplash.com/photo-1645702511425-378ba23f576d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinc",
      description: "Corrosion-resistant and essential for galvanization and alloy creation.",
      image: "https://images.unsplash.com/photo-1587502537745-5c0e0ad0b843?auto=format&fit=crop&w=600&q=80",
    },
  ],
  preciousStones: [
    {
      name: "Diamond",
      description: "The hardest mineral known—symbolizing purity, brilliance, and strength.",
      image: "https://images.unsplash.com/photo-1597511127884-5f9b18a62fc0?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sapphire",
      description: "Deep blue sapphire represents wisdom, loyalty, and timeless elegance.",
      image: "https://images.unsplash.com/photo-1605727216800-f6b7c1c1d585?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

export default function PreciousStones() {
  return (
    <main className="px-4 sm:px-8 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Our Precious Materials
      </h1>

      {["Precious Metals", "Base Metals", "Precious Stones"].map((title, idx) => (
        <section key={title} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {sections[Object.keys(sections)[idx]].map((item, i) => {
              const message = encodeURIComponent(`Hello, I would like to inquire about ${item.name}.`);
              const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

              return (
                <a
                  key={i}
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-transform transform hover:scale-105 w-full max-w-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      ))}

      <div className="mt-16 text-center">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to make an inquiry.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg transition"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </main>
  );
}
