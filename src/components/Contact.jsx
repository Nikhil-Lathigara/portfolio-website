import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {;
    
  return (
    <div>
          <section className="mt-16 max-w-3xl mx-auto text-center"data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="https://github.com/Nikhil-Lathigara?tab=repositories"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-full-stack-developer/"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="mailto:nikhilsoni1209@gmail.com"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={32} />
              </a>
              
            </div>
            <p className="text-gray-200 text-lg">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
          </section>
    </div>
  )
}

export default Contact