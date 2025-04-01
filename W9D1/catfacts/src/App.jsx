import { useEffect, useState } from 'react';
import { CatFactsAsync } from './components/CatFactsAsync';
import { CatFactPromise } from './components/CatFactsPromise';

function App() {
  return (
    <>
      <CatFactPromise />
    </>
  )
}

export default App;