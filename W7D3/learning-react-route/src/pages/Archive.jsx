import { Link } from "react-router-dom"

export function Archive({ content }) {
  return (
    <>
      <h2>My Blogposts:</h2>
      <ol>
      { content.map( entry => {
        return (
          <li>
            <Link to={`/blog/${entry.id}`}>
              {entry.title}
            </Link>
          </li>
        )
      }) }
      </ol>
    </>
  )
}