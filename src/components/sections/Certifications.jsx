import { RevealOnScroll } from "../RevealOnScroll";

export const Certifications = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src="/portfolio/certificates/Hackathon_SSIP.jpg" alt="SSIP Hackathon Certificate" />
              <h3 className="text-xl font-bold my-2">New India Vibrant Hackathon – Regional Round (2023)</h3>
              <p className="text-gray-400 mb-4">
                Actively participated in the regional round of New India Vibrant Hackathon 2023 at Auro University, Surat, tackling real-world innovation challenges with a team-based approach.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Hackathon", "Team Collaboration", "Problem Solving"].map((tech, key) => (
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
            </div>

            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <img src="/portfolio/certificates/React_KG_Coding.jpg" alt="React and Redux KG Coding Certificate" />
              <h3 className="text-xl font-bold my-2">React & Redux Development – KG Coding (2024)</h3>
              <p className="text-gray-400 mb-4">
                Completed a hands-on course covering React fundamentals, Redux for state management, component structure, and dynamic web UI development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Redux", "Frontend"].map((tech) => (
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
            </div>

            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <img src="/portfolio/certificates/Data_Science_Springboard.jpg" alt="Data Science Springboard Certificate" />
              <h3 className="text-xl font-bold my-2">Python for Data Science – Infosys Springboard (2024)</h3>
              <p className="text-gray-400 mb-4">
                Covered core data science tools using Python, including data analysis, NumPy, and visualization techniques. Practical exposure to data pipelines and problem-solving.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Data Science", "NumPy", "Pandas"].map((tech, key) => (
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
            </div>

            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <img src="/portfolio/certificates/Coursera_Wordpress.jpg" alt="Coursera Wordpress Certificate" />
              <h3 className="text-xl font-bold my-2">Build a Free Website with WordPress – Coursera (2024)</h3>
              <p className="text-gray-400 mb-4">
                Completed a guided Coursera project on setting up and customizing a website using WordPress. Covered page building, theme selection, and content publishing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Wordpress", "CMS", "Web Design"].map((tech, key) => (
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
            </div>

            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <img src="/portfolio/certificates/Unnati_2023_2024.jpg" alt="Python Foundation Course – Code Unnati Certificate" />
              <h3 className="text-xl font-bold my-2">Python Foundation Course – Code Unnati (2023–2024)</h3>
              <p className="text-gray-400 mb-4">
                Completed foundational training on Python, data analysis, AI basics, and chatbot development under SAP’s CSR initiative, in collaboration with Edunet Foundation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Data Analysis", "AI", "Chatbot Development"].map((tech, key) => (
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
            </div>

            
            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <img src="/portfolio/certificates/Unnati_2024_2025.jpg" alt="AI/ML & IoT Training Code Unnati Certificate" />
              <h3 className="text-xl font-bold my-2">Advanced Emerging Tech Program (2024–2025)</h3>
              <p className="text-gray-400 mb-4">
                Completed SAP’s CSR-backed advanced training on Machine Learning, IoT, Deep Learning, Computer Vision, and SAP ABAP on Business Technology Platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ML", "IoT", "Computer Vision", "SAP ABAP"].map((tech, key) => (
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
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
