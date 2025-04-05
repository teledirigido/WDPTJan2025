import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <ul class="navbar">
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/projects/create">New Project</Link></li>
      </ul>
    </>
  )
}