import { Link, useParams } from "react-router-dom"

export function Single({ content }) {

  const { blogId } = useParams(); 
  const SinglePost = content.find( (entry) => {
    return entry.id === parseInt(blogId)
  });

  console.log(SinglePost)

  return (
    <>
      <h1>{ SinglePost.title }</h1>
      <p>{SinglePost.content}</p>
      <p>Tags:</p>
      <ul>
        { SinglePost.tags.map( tag => {
          return (
            <li>{tag}</li>
          )
        }) }
      </ul>
      <hr />
      <Link to="/blog">Go back</Link>
    </>
  )
}