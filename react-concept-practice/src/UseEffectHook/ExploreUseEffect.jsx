import React, { useEffect, useState } from 'react';

const ExploreUseEffect = () => {
    const [resourceType, setResourceType] = useState('posts')

    console.log("---------------------------Runs outside use effect");
    // we need a side effect when the resource type changes
    useEffect(() => {
        console.log("runs everytime the components render")
    })

    useEffect(() => { 
        console.log('Runs only when the component mounts')
    }, []) // runs only once when the component mounts

    useEffect(() => {
        console.log('Resource Type Changed to: ', resourceType)
    } , [resourceType]) // runs everytime the resourceType changes
  return (
    <>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  )
}

export default ExploreUseEffect

// useEffect(() => {
//     console.log('Resource Type Changed')
// }) run everytime the component renders

/**
 * In the React component you've provided, ExploreUseEffect, there are different behaviors associated with the console.log statements depending on where they are placed in relation to the useEffect hooks.

Console.log outside useEffect (console.log("---------------------------Runs outside use effect");):
This console.log statement will run every time the component re-renders. React components re-render in response to state changes, prop changes, or parent component re-renders, among other reasons.
In your component, every time you click one of the buttons to change the resourceType state, this will trigger a re-render of the component, which means this specific console.log outside of any useEffect hook gets executed.
Additionally, it also runs on the initial render of the component.
Console.log inside the useEffect without dependencies (console.log("runs everytime the components render")):
This console.log statement is placed inside a useEffect hook without any dependencies ([]), meaning it is intended to run after every render of the component, much like the console.log outside of the useEffect.
The difference here is subtle and has to do with the timing of execution: console.log inside this useEffect runs after the DOM updates, whereas the console.log outside runs before the DOM is updated. This means that any changes you make during rendering are reflected in the DOM by the time the useEffect runs, which might be relevant if you were manipulating or checking DOM elements directly after rendering.
*Essentially, both the console.log statements outside and inside the useEffect (without dependencies) log on every render, but the one inside useEffect does so after the browser has painted any DOM updates. This can be crucial for operations that need to happen after the DOM is guaranteed to be in its updated state.
 * 
 */