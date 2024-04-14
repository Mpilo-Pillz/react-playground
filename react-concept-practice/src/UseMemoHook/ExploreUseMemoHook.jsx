import React, { useState } from 'react';

const ExploreUseMemoHook = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFunction(number); // even when you change theme this slows the app down so cache this below
    const doubleNumber = useMemo(() => slowFunction(number),[number]) // only recompute when number changes
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++){}
    return num * 2
}

export default ExploreUseMemoHook

// Cache a Value so that you do not have to recompute it every time the component re-renders
// can't meoise everything resulting in memeory and performance overhead