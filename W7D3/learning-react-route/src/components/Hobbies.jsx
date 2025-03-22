export function Hobbies({ hobbies }) {

  return (
    <ul className="hobbies">
      { hobbies.map( item => {
        return (
          <li>{item}</li>
        )
      }) }
    </ul>
  )

}