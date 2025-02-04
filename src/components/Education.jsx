function Education() {
  const educations=[
    {
      degree:"Bachelor's in Computer Engineering",
      college:"Sandip Institute of Engineering and Management, Nashik",
      cgpa:"CGPA : 7.29",
    },
    {
      degree:"12th Boards",
      college:"Chhatrapati Shivaji Junior Science College, Jalgaon",
      cgpa:"Percentage : 70.20%",

    },
    {
      degree:"10th Boards",
      college:"St. Lawrence High School, Jalgaon",
      cgpa:"Percentage : 70%",

    }
  ]
  return (
    <div>
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-12 text-center"data-aos="fade-up">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 max-w-5xl mx-auto justify-items-center">
          {educations.map((education,index)=>(
            <div key={index} className="card" data-aos="slide-up" style={{ width: '300px', height: '150px' }} >
            <div className="px-6 py-4">
              <div className="text-xl font-semibold text-gray">
                {education.degree}
              </div>
              <p className="pt-2 text-gray-200 text-sm">
                {education.college}
              </p>
              <p className="pt-1 text-gray-200 text-sm">
                {education.cgpa}
              </p>
            </div>
          </div>
          ))}
        
        </div>
      </section>
    </div>
  );
}

export default Education;
