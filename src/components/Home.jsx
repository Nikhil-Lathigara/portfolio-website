function Home() {
  return (
    <div className="">
      <section className="pt-10 space-y-8 text-center">
        <img
          src="image/coverImage.png"
          alt="cover-image"
          className="hidden md:block w-full absolute top-0 left-0 z-0 h-1/3 object-cover "
          data-aos="fade-right"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="lg:mt-32 md:mt-24 flex items-center justify-center relative z-10 mb-2.5">
            <img
              src="/image/profile.jpg"
              alt="user-avatar-image"
              className="border-4 border-solid border-stone-300 rounded-full object-cover w-40 h-40"
              data-aos="zoom-out"
            />
          </div>
          <div className="relative font-inter antialiased" data-aos="fade-up">
            <main className="container">
              <p>Hello 👋 I'm</p>
              <section className="animation space-y-2 md:space-y-2">
                <div className="first">
                  <div className="text-lg md:text-2xl">Nikhil Lathigara</div>
                </div>
                <div className="second">
                  <div className="text-lg md:text-2xl">Full Stack Developer</div>
                </div>
                <div className="third">
                  <div className="text-lg md:text-2xl">Software Engineer</div>
                </div>
              </section>
            </main>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Crafting Dynamic and Functional Web Experiences
            </p>
            <a
              href="https://drive.google.com/file/d/1kdaH3GlDcS6ErGagCge073nHt3GmeMNW/view?usp=sharing"
              download
            >
              <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all border-2 border-solid border-green-500 hover:bg-white group py-1.5 px-2.5 mt-8">
                <span className="w-56 h-48 rounded bg-green-500 absolute bottom-0 left-0 translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-gray-100 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Download Resume
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto" >
          <h3 className="group relative text-3xl font-bold mb-6"data-aos="fade-left">About Me</h3>
          <p className="text-gray-100 text-lg"data-aos="fade-right">
            Hey there! I'm , an Full Stack Developer
            specializing in the MERN stack (MongoDB, Express.js, React.js, and
            Node.js). I enjoy building dynamic, responsive, and user-centric
            applications, using modern web technologies to solve real-world
            challenges.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
