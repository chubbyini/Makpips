export default function Projects() {
  const projects = [
    {
      title: 'Design and Simulation of an Aircraft Fuel System',
      level: 'Bachelor’s',
      description: 'A project focusing on the efficient distribution and management of fuel in a small aircraft model, considering redundancy and safety.',
    },
    {
      title: 'Development of an Unmanned Aerial Vehicle (UAV) for Reconnaissance',
      level: 'Master’s',
      description: 'Design, construction, and programming of a surveillance drone with GPS and real-time camera feedback tailored for local terrain monitoring.',
    },
    {
      title: 'Analysis of Jet Engine Compressor Blade Failure Using Finite Element Method',
      level: 'PhD',
      description: 'Advanced computational study investigating stress distribution and failure mechanisms in axial-flow jet engine blades.',
    },
    {
      title: 'Design and Fabrication of a Wind Tunnel for Aerodynamic Testing',
      level: 'Bachelor’s',
      description: 'Construction of a subsonic wind tunnel to facilitate hands-on aerodynamic analysis for scale aircraft models.',
    },
    {
      title: 'Development of a Real-Time Aircraft Maintenance Tracker System',
      level: 'Master’s',
      description: 'Software system integrated with RFID to monitor aircraft part usage, wear, and automated maintenance alerts.',
    },
    {
      title: 'Design and Fabrication of a Remote-Controlled Ground Vehicle for Runway Inspection',
      level: 'Bachelor’s',
      description: 'A rugged rover built to navigate and inspect military airfield surfaces for debris and damage.',
    },
    {
      title: 'Computational Fluid Dynamics Analysis of Supersonic Inlets',
      level: 'PhD',
      description: 'Simulation-based study of airflow behavior in high-speed jet intakes using ANSYS Fluent and OpenFOAM.',
    },
    {
      title: 'Design of a Compact Ground-Based Radar System for UAV Detection',
      level: 'Master’s',
      description: 'Development of a cost-effective radar prototype using microwave modules for low-altitude airspace monitoring.',
    },
    {
      title: 'Fabrication of an Aircraft Structural Test Rig',
      level: 'Bachelor’s',
      description: 'A testing framework used to apply simulated aerodynamic forces to aircraft wing and fuselage prototypes.',
    },
    {
      title: 'Development of a 3D Printed Jet Engine Model for Demonstration',
      level: 'Bachelor’s',
      description: 'Educational turbine engine prototype illustrating working principles of compression, combustion, and exhaust stages.',
    },
    {
      title: 'Noise Reduction Techniques for Aircraft Cabins',
      level: 'Master’s',
      description: 'Research into the application of advanced materials and structural damping techniques for improving in-flight acoustic comfort.',
    },
    {
      title: 'Thermal Analysis of Jet Engine Combustion Chamber Linings',
      level: 'PhD',
      description: 'High-fidelity thermal stress modeling of jet combustion chamber linings under extreme operating conditions.',
    },
    {
      title: 'Design and Development of a Lightweight Parachute for Payload Recovery',
      level: 'Bachelor’s',
      description: 'Parachute optimized for low-weight reconnaissance drones using drag coefficient and wind load simulations.',
    },
    {
      title: 'Fabrication of an Emergency Evacuation System for Cockpits',
      level: 'Master’s',
      description: 'Ejection system prototype for small aircraft integrating seat actuation, restraint, and parachute deployment.',
    },
    {
      title: 'Design and Optimization of Winglets for Improved Aircraft Performance',
      level: 'Bachelor’s',
      description: 'Aerodynamic design of wingtip devices to reduce vortex drag and improve fuel efficiency using XFLR5.',
    },
    {
      title: 'Avionics System Simulation Using MATLAB Simulink',
      level: 'PhD',
      description: 'Creation of a modular avionics architecture simulation for flight control, navigation, and fault detection systems.',
    }
  ];

  return (
    <main className="px-4 py-16 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Our Aerospace & Engineering Project Portfolio
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-green-600 mb-2 font-medium">{project.level} Project</p>
            <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed mb-4">
              {project.description}
            </p>
            <button className="mt-auto inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              View Project
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
