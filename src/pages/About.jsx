function About() {
  return (
    <div
  id="about"
  className="min-h-screen ppt-32 md:pt-28 pb-20 px-6 md:px-10 relative overflow-hidden"
>

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-5 text-sm md:text-base">
            About Me
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">

            Turning ideas into

            <span className="text-cyan-400">
              {" "}modern web experiences.
            </span>

          </h1>

        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">

          {/* Left Card */}
          <div className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.08)] hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Who I Am
            </h2>

            <p className="text-gray-400 leading-7 md:leading-8 text-base md:text-lg">
              I am a fresher Java Full Stack Developer
              passionate about building scalable and
              responsive applications using React,
              Spring Boot and MySQL.
            </p>

            <p className="text-gray-400 leading-7 md:leading-8 text-base md:text-lg mt-6">
              I enjoy transforming complex problems
              into clean and user-friendly solutions
              with modern technologies.
            </p>

          </div>

          {/* Right Cards */}
          <div className="space-y-6 md:space-y-8">

            <div className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                Education
              </h3>

              <p className="text-gray-400 text-base md:text-lg">
                B.Tech in Artificial Intelligence
              </p>

            </div>

            <div className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                Interests
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-7 md:leading-8">
                Full Stack Development,
                Backend Engineering,
                UI Design and Problem Solving.
              </p>

            </div>

            <div className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                Goal
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-7 md:leading-8">
                To become a skilled software engineer
                capable of building impactful and
                scalable products.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About