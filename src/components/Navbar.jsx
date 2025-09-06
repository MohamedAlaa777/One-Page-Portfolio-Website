export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
  <div class="container d-flex justify-content-between align-items-center">
    
    <a class="navbar-brand fw-bold fs-4 me-4" href="#">MyPortfolio</a>
    <ul class="navbar-nav d-flex flex-row">
      <li class="nav-item">
        <a class="nav-link px-3" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-3" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-3" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-3" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
  );
}
