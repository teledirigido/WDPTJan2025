import { useParams } from "react-router-dom"

export function Single({ content }) {

  //  Read the blogId from the url parameter
  const { blogId } = useParams();

  // Search on content the blog article with the id blogId and print the found post.
  const currentPost = content.find( (entry) => entry.id === parseInt(blogId) );

  return(
    <>
      <h1>{ currentPost.title }</h1>
      <p>
        { currentPost.content }
      </p>
    </>
  )
}