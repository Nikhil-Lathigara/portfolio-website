function Home() {
  return (
      <section className="pt-10 space-y-8 text-center">
        
        <div className="container flex flex-col items-center gap-10 pb-28 pt-15  sm:gap-14 lg:flex-row">
          <div className="relative flex-1 text-center lg:text-left">
            <img
              src="/image/profile.png"
              alt="user-avatar-image"
              className="rounded-full object-cover w-4/5 mx-auto lg:mx-0"
              data-aos="zoom-out"
            />
          </div>
          <div className="relative font-inter antialiased lg:items-start" data-aos="fade-up">
            <main className="container">
              <p className="text-4xl">Hello 👋 I'm</p>
              <section className="animation space-y-2 md:space-y-2">
                <div className="first">
                  <div className="text-xl md:text-2xl">Nikhil Lathigara</div>
                </div>
                <div className="second">
                  <div className="text-xl md:text-2xl">Full Stack Developer</div>
                </div>
                <div className="third">
                  <div className="text-xl md:text-2xl">Software Engineer</div>
                </div>
              </section>
            </main>
            <p className="text-lg text-gray-100 max-w-md mx-auto">
            I enjoy building dynamic, responsive, and user-centric applications, using modern web technologies to solve real-world challenges.
            </p>
            <a
              href="https://drive.google.com/file/d/1kdaH3GlDcS6ErGagCge073nHt3GmeMNW/view?usp=sharing"
              download
            >
              <button className="btn h-10 text-sm relative inline-flex items-center justify-start overflow-hidden font-medium transition-all border-2 border-solid border-green-500 hover:bg-white group py-1.5 px-2.5 mt-8">
                <span className="w-80 h-72 rounded bg-green-500 absolute bottom-0 left-0 translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-gray-100 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Download Resume
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto" >
          <h3 className="group relative text-3xl text-violet-600 font-bold mb-6"data-aos="fade-left">About Me</h3>
          <p className="text-gray-300 text-lg"data-aos="fade-right">
            Hey there! I'm , an Full Stack Developer
            specializing in the MERN stack (MongoDB, Express.js, React.js, and
            Node.js). I enjoy building dynamic, responsive, and user-centric
            applications, using modern web technologies to solve real-world
            challenges.
          </p>
        </div>
      </section>
  );
}

export default Home;
