import { useState } from 'react'

export function ToggleBalance() {
  
  const [ showBalance, setShowbalance ] = useState('balance-on');
  const toggleBalance = () => {
    if ( showBalance === 'balance-on') {
      setShowbalance('balance-off');
    } else {
      setShowbalance('balance-on');
    }
  }

  return (
    <>
      <h1>
        Balance: <span className={`balance ${showBalance}`}>$100</span>
      </h1>
      <button onClick={toggleBalance}>Toggle Balance</button>
    </>
  )

}