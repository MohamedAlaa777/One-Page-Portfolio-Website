export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "ASP.NET Core"];

  return (
    <section id="skills" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-indigo-50 shadow rounded-lg hover:bg-indigo-100 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
