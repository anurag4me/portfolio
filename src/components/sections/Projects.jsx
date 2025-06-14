export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Home Rentals Application</h3>
            <p className="text-gray-400 mb-4">
              Full-featured rental platform with listing creation, image uploads, bookings with calendar, wishlist management, and keyword-based property search.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "MongoDB", "Redux", "SCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/anurag4me/home-rentals"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">AI Website Builder</h3>
            <p className="text-gray-400 mb-4">
              Drag-and-drop website builder with live preview, user authentication, and dynamic content generation using reusable components.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "MongoDB", "Express"].map((tech, key) => (
                <span
                  key={key}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/anurag4me/website-builder"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">Uber App Clone</h3>
            <p className="text-gray-400 mb-4">
              Ride-booking platform with real-time driver tracking, route mapping, and secure login system. Built with the MERN stack.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "MongoDB", "Google Maps API"].map((tech) => (
                <span
                  key={tech}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/anurag4me/uber-app"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">Smart Parking System</h3>
            <p className="text-gray-400 mb-4">
              IoT-powered Flutter app with real-time parking slot booking, countdown timers, and live hardware integration via Raspberry Pi.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Flutter", "GetX", "Node.js", "MongoDB"].map((tech, key) => (
                <span
                  key={key}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center ">
              <a
                href="https://github.com/anurag4me/parking-system"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
