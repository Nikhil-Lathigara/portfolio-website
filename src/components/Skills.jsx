const skills = [
  { name: 'HTML5', imageSrc: './svg/html5.svg', imageAlt: 'HTML5', animation: "fade-right" },
  { name: 'CSS3', imageSrc: './svg/css3.svg', imageAlt: 'CSS3', animation: "fade-left" },
  { name: 'JAVASCRIPT', imageSrc: './svg/js.svg', imageAlt: 'JAVASCRIPT', animation: "fade-right" },
  { name: 'NODE.JS', imageSrc: './svg/nodejs.svg', imageAlt: 'NODE.JS', animation: "fade-left" },
  { name: 'EXPRESS.JS', imageSrc: './svg/expressjs.svg', imageAlt: 'EXPRESS.JS', animation: "fade-right" },
  { name: 'REACT.JS', imageSrc: './svg/reactjs.svg', imageAlt: 'REACT.JS', animation: "fade-left" },
  { name: 'TAILWIND', imageSrc: './svg/tailwind.svg', imageAlt: 'TAILWIND', animation: "fade-right" },
  { name: 'BOOTSTRAP', imageSrc: './svg/bootstrap.svg', imageAlt: 'BOOTSTRAP', animation: "fade-left" },
];

export default function Example() {
  return (
    <section className="max-w-xl  lg:max-w-7xl lg:px-4 text-center">
      <h2 className="text-3xl font-bold m-8 text-center text-violet-600"data-aos="fade-up">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-xl mx-auto justify-items-center">
        {skills.map((skill, id) => (
          <div key={id} className="flex flex-col items-center"data-aos={skill.animation}>
            <img
              alt={skill.imageAlt}
              src={skill.imageSrc}
              className="w-12 sm:w-14 md:w-16 lg:w-20 aspect-square object-contain"
            />
            <h3 className="mt-2 text-lg text-gray-300">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
