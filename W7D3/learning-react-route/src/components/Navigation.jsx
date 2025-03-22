import { Link } from "react-router-dom";

export function Navigation() {
  return(
    <>
      <ul className="main-menu">
        <li>
          <Link to="/">🏡</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
      </ul>
    </>
  )
}