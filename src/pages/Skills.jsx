import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si"

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
  },

  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },

  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
]

function Skills() {
  return (
    <div
  id="skills"
  className="min-h-screen pt-32 md:pt-28 pb-20 px-6 md:px-10 relative overflow-hidden"
>

      {/* Glow Background */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-5 text-sm md:text-base">
            Skills
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">

            Technologies I use to build

            <span className="text-cyan-400">
              {" "}modern applications.
            </span>

          </h1>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[25px] p-6 md:p-10 hover:border-cyan-400 hover:scale-105 hover:-translate-y-2 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.05)] flex flex-col items-center text-center"
            >

              {/* Icon */}
              <div className="text-4xl md:text-5xl text-cyan-400 mb-6 md:mb-8">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h2 className="text-lg md:text-2xl font-semibold">
                {skill.name}
              </h2>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Skills