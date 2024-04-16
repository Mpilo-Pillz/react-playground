import React, { useEffect, useMemo, useState } from 'react';

const ExploreUseMemoHook = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFunction(number); // even when you change theme this slows the app down so cache this below
    const doubleNumber = useMemo(() => slowFunction(number),[number]) // only recompute when number changes
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]) 

    // run this hook everytime thmeme syles changes
    useEffect(() => {
        // Gotcha is that when we change our number theme changed runs again becuase fo referential equality
        // what that means that everytime our functions runs a new theme style object is created
        // so the theme style object is always different from the previous one
        // so the useEffect hook runs everytime
        // even if the values are the same
        // as they reference different places in memory
        // so we wrap the themeStyles in a useMemo hook to cache the value stopping it from running again
        console.log('Theme Changed');
    }, [themeStyles])
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

// UseMemo is a hook that will only recompute the cached value when one of the dependencies has changed
// USe Memo is sued for referential equiality