import React, { useState } from 'react';


function countInitial() {
    console.log("un function");
    return 15
}
const ExploreUseState = () => {
    const [state, setState] = useState({bgColor: 'dark', textColor: 'light', iteration: 0}) // runs everytime component rerenders
    const [countInit, setCountInitial] = useState(countInitial()) // runs everytime component rerenders
  const [count, setCount] = useState(13) // runs everytime component rerenders
  const iteration = state.iteration
  const bgColor = state.bgColor
  const textColor = state.textColor

  const [runOnce, setRunOnce] = useState(() => {
    console.log('This ever runsOnce so it is a good place to put computationally expensive operations')
    return 14
  
  }) // runs only once
  // careful not to put complet computeations

  function decrementCountIncorrectly() { 
    setCount(count - 1)
    setCount(count - 1)
}
  function incrementCountIncorrectly() { 
    setCount(count + 1)
    setCount(count + 1)
    // increments by 1 becuase it takes the inital state and not the updated state 
    // calulation is wrong as it should increment by 2 but increments by 1
}

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)

    setState((prevState) => { return {...prevState, iteration: prevState.iteration - 1}})
  }

    function decrementCount() {
        setCount(prevCount => prevCount - 1)

        setState((prevState) => { return {iteration: prevState.iteration + 1}})
        // setState((prevState) => { return {...prevState, iteration: prevState.iteration + 1}})
    }

    function incrementRunOnce() {
        console.log('Increment Run Once');
        setRunOnce(runOnce + 1)
    }

    return (
    <>
    <h1>Run One {14}</h1>
    <h3>{iteration} - {bgColor} - {textColor}</h3>
    <button onClick={incrementRunOnce}>Increment Run Once</button>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCountIncorrectly}>Incorrect Decrement</button>
    <button onClick={incrementCountIncorrectly}>Incorrect Increment</button>
    </>
  )
}

export default ExploreUseState

// first arge is the current state
// second value is the function to update the state

