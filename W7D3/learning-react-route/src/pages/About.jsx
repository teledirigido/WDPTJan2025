import { Hobbies } from "../components/Hobbies"

export function About({ content }) {

  console.log(content)

  return (
    <>
      <h1>About {content.name}</h1>
      <Hobbies hobbies={content.hobbies} />
      <p>
        Favourite number: {content.favouriteNumber}
      </p>
    </>
  )
}