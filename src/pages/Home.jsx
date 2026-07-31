import profile from "../assets/profile.JPG"

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-52 md:pt-32 overflow-hidden px-6"
    >

      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center z-10">

        {/* Left Side */}
        <div className="text-center md:text-left order-2 md:order-1">

          <p className="text-cyan-400 text-sm md:text-lg mb-5 tracking-[3px]">
            AVAILABLE FOR NEW PROJECTS
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Hi, I'm

            <span className="text-cyan-400 block">
              Sangharsh.
            </span>

          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-8 mt-8 max-w-xl mx-auto md:mx-0">
            A Java Full Stack Developer passionate
            about building scalable backend systems
            and modern web experiences using React,
            Spring Boot and MySQL.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center md:justify-start">

            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
              className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.5)] text-center"
            >
              Contact Me
            </button>

            <a
              href="resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 text-center"
            >
              Download CV
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center order-1 md:order-2">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

            {/* Image Container */}
            <div className="relative w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border-4 border-cyan-400/30 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.35)]">

              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover object-[center_15%]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Home