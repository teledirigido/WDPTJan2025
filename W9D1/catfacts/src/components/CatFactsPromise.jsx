import { useEffect, useState } from "react";

export function CatFactPromise() {
  const [catFacts, setCatFacts] = useState([]);

  async function getCatFacts() {
    fetch("https://meowfacts.herokuapp.com/")
      .then( res => res.json() )
      .then( responseData => {
        setCatFacts(prev => [...prev, responseData.data[0]]);
      }).catch( err => {
      console.log(err);
    });
  }

  useEffect(() => {
    // Fetch new fact every 2 seconds
    const interval = setInterval(getCatFacts, 2000);
    return () => clearInterval(interval);
  }, []); // Empty deps = stale closure

  return (
    <>
      <h1>Meow Facts</h1>
      <ul>
        {catFacts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
    </>
  );
}