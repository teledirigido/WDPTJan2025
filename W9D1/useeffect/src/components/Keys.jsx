import { useEffect, useState } from "react";

export function Keys () {

  const [isHidden, setIsHidden] = useState(true);

  const handleKeys = (event) => {
    if ( event.key === 'Escape' ) {
      setIsHidden(prev => !prev);
    }
    console.log(event.key)
  }

  useEffect( () => {
    window.addEventListener('keyup', handleKeys);
    return () => {
      window.removeEventListener('keyup', handleKeys);
    }
  }, []);

  return (
    <>
      <h1>Press anything</h1>
      { !isHidden && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam!</p>}
    </>
  )
}