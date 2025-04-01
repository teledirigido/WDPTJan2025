import { useState } from "react"

export function MeowFacts() {

  const [catFacts, setCatFacts] = useState([]);

  async function getFacts() {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const responseData = await response.json();
      // setCatFacts(responseData.data);
    } catch(err) {
      console.log(err);
    }
  }

  // 1. Add a button to display the fact
  // 2. Add a setInterval for every second to display another fact
  // getFacts();

  return (
    <>
      <h1>Meow Facts</h1>
      {catFacts}
    </>
  )
}