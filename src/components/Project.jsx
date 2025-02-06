function Project() {
  const projects = [
    {
      title: "Book Collection",
      description:
        " A user-friendly application that allows users to catalog, organize, and manage their book collections efficiently. Built with a focus on database management and intuitive interface design.",
      tech: ["React.js", "Node.js","Express.js", "MongoDB"],
      github_link: "https://github.com/Nikhil-Lathigara/BookCollection.git",
      img: "./image/book_coll.png",
      animation:"fade-right",
    },
    {
      title: "URL Shortener",
      description:
        "A robust tool for generating compact and shareable URLs. Developed using Node.js, Express.js, and EJS, this project streamlines long links into manageable short URLs.",
      tech: ["Node.js", "MongoDB", "EJS"],
      github_link: "https://github.com/Nikhil-Lathigara/url_shortner.git",
      img: "./image/short_url.png",
      animation:"fade-left"

    },
    {
      title: "Password Generator",
      description:
        "A secure tool for generating strong, random passwords to enhance user security. Built with modern web technologies, ensuring simplicity and reliability.",
      tech: ["React.js", "Tailwind CSS"],
      link: "https://password-generator-sepia-seven.vercel.app/",
      github_link: "https://github.com/Nikhil-Lathigara/BookCollection.git",
      img: "./image/password.png",
      animation:"fade-right"

    },
    {
      title: "Book Collection",
      description:
        "A sleek, interactive application built using React.js and Tailwind CSS. It enables users to convert currencies seamlessly with real-time exchange rates.",
      tech: ["React.js", "Tailwind CSS"],
      link: "https://currency-converter-delta-ten.vercel.app/",
      github_link: "https://github.com/Nikhil-Lathigara/BookCollection.git",
      img: "./image/curr_conv.png",
      animation:"fade-left"

    },
  ];
  return (
    <div>
      <section className="mt-10">
        <h2 className="text-3xl text-violet-600 font-bold mb-12 text-center" data-aos="fade-up">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="card" data-aos={project.animation}>
              <a href={project.link}>
                <img
                  className="w-full  rounded-xl"
                  src={project.img}
                  alt="Book Collection"
                />
              </a>

              <div className="px-6 py-4">
                <div className="font-bold text-xl text-slate-100 mb-2">
                  {project.title}
                  <a
                    href={project.link}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 m-2 hover:bg-gray-500 hover:text-white"
                  >
                    Github Link
                  </a>
                </div>
                <p className="text-slate-300 text-base">{project.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
