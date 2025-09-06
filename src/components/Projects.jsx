export default function Projects() {
  const projects = [
    {
      title: "Laptop E-commerce",
      desc: "Online store for laptops built with ASP.NET Core MVC.",
      img: ".",
    },
    {
      title: "Shipping Management",
      desc: "System to manage shipping schedules and deliveries.",
      img: ".",
    },
    {
      title: "Vote Salaries App",
      desc: "App for managing employee salary voting system.",
      img: ".",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
