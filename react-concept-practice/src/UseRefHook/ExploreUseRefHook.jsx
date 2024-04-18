import React, { useEffect, useRef, useState } from 'react'

const ExploreUseRefHook = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(1) // returns an object with a current property {current: 0}
    const inputRef = useRef()
    const prevName = useRef('')

    function focus() {
        console.log(inputRef.current);
        
        inputRef.current.focus()
    }
    useEffect(() => {
        renderCount.current = renderCount.current + 1
        prevName.current = name
    },[name])
  return (
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <div>My name is {name}</div>
    <div> I rerendered {renderCount.current} times</div>
    <button onClick={focus}>Focus</button>
    <h1>My name is {name} and it used to be {prevName.current}</h1>
    </>
  )
}

export default ExploreUseRefHook

// USe Ref survives re-renders
// we cant use  use state to track rerenders else we will get into a rerender loop.
// beccause when you update state a component rerenders
// refs do not cuase component to update when it gets changed but like state it persists the values between component rerenders

// store values between rerenders
// Acceess/ reference dom elements
// Store previous value of state