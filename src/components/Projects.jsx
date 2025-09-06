export default function Projects() {
  const projects = [
    {
      title: "Laptop E-commerce",
      img: ".",
      desc: "E-commerce system for laptops using ASP.NET Core MVC."
    },
    {
      title: "Shipping Management",
      img: ".",
      desc: "Manage employees, salaries, and deliveries."
    },
    {
      title: "Vote Salaries",
      img: ".",
      desc: "Voting system for managing employee salaries."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <img src={p.img} alt={p.title} className="w-full rounded mb-3" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
