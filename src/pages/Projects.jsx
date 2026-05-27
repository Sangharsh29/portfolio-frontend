const projects = [
  {
    title: "Employee Management System",
    tech: ["React", "Spring Boot", "MySQL"],
    description:
      "Full stack CRUD application for managing employee records using REST APIs and MySQL database.",
    buttons: true,
  },

  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind CSS"],
    description:
      "Modern cyber-themed developer portfolio with responsive UI and React Router navigation.",
    buttons: false,
  },
]

function Projects() {
  return (
    <div
  id="projects"
  className="min-h-screen pt-32 md:pt-28 pb-20 px-6 md:px-10 relative overflow-hidden"
>

      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-5 text-sm md:text-base">
            Projects
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">

            Some things I’ve built with

            <span className="text-cyan-400">
              {" "}modern technologies.
            </span>

          </h1>

        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-8 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[580px]"
            >

              <div>

                {/* Project Preview */}
                <div className="h-44 md:h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/10 mb-8 flex items-center justify-center">

                  <p className="text-cyan-400 text-sm md:text-lg tracking-[3px]">
                    PROJECT PREVIEW
                  </p>

                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 leading-7 md:leading-8 text-base md:text-lg min-h-[120px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-500/10 text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

              {/* Buttons */}
              {project.buttons && (
                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                  <button className="bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    Live Demo
                  </button>

                  <button className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300">
                    GitHub
                  </button>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Projects