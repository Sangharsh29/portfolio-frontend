import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {

    await emailjs.send(
      "service_f3od2so",
      "template_299fzs6",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "MfULXRaQ-HTmMgvDA"
    )

    alert("Message sent successfully!")

    setFormData({
      name: "",
      email: "",
      message: "",
    })

  } catch (error) {

    console.error(error)

    alert("Failed to send message")
  }
}

  return (
    <div
  id="contact"
  className=" min-h-screen pt-32 md:pt-28 pb-20 px-6 md:px-10 relative overflow-hidden"
>

      {/* Glow Background */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-5 text-sm md:text-base">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">

            Let’s build something

            <span className="text-cyan-400">
              {" "}amazing together.
            </span>

          </h1>

        </div>

        {/* Contact Container */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">

          {/* Left Info */}
          <div className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.05)] hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div>
                <p className="text-cyan-400 mb-2 text-sm md:text-base">
                  Email
                </p>

                <p className="text-gray-400 text-base md:text-lg break-all">
                  sangharsh.techie@gmail.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400 mb-2 text-sm md:text-base">
                  GitHub
                </p>

                <p className="text-gray-400 text-base md:text-lg break-all">
                  github.com/Sangharsh29
                </p>
              </div>

              <div>
                <p className="text-cyan-400 mb-2 text-sm md:text-base">
                  LinkedIn
                </p>

                <p className="text-gray-400 text-base md:text-lg break-all">
                  linkedin.com/in/sangharsh-taksande
                </p>
              </div>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-black/40 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-6 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.05)] hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/30 border border-cyan-500/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 text-sm md:text-base"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/30 border border-cyan-500/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 text-sm md:text-base"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/30 border border-cyan-500/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 resize-none text-sm md:text-base"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact