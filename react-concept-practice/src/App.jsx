import { useState } from 'react'
import './App.css'
import ExploreUseState from './UseStateHook/ExploreUseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExploreUseState />
    </>
  )
}

export default App
// only use in function components not class
// hooks must execute in the same order, cannot be in a:
//  if condition, loops, function, cant be nested have to be at the top level