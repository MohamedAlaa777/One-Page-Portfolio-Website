export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "ASP.NET Core"];

  return (
    <section id="skills" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-2 col-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">{skill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
