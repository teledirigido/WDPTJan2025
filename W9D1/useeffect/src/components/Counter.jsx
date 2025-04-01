import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true);

  useEffect( () => {
    const intervalId = setInterval( () => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <>
      <button onClick={ () => { setIsVisible(!isVisible)} }>Toggle</button>
      { isVisible && <h1>{count}</h1> }
    </>
  )
}