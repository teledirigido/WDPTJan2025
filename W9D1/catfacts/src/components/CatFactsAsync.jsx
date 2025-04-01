import { useEffect, useState } from "react";

export function CatFactsAsync() {
  const [catFacts, setCatFacts] = useState([]);

  async function getCatFacts() {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const responseData = await response.json();
      
      setCatFacts(prev => [...prev, responseData.data[0]]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // Fetch new fact every 2 seconds
    const interval = setInterval(getCatFacts, 10000);
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