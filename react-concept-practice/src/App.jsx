import React, { useState } from 'react';
import './App.css';
import ExploreUseCallback from './UseCallbackHook/ExploreUseCallback';
import ClassContextComponent from './UseContextHook/ClassContextComponent';
import FunctionContextComponent from './UseContextHook/FunctionContextComponent';

export const ThemeContext = React.createContext()
function App() {
  const [count, setCount] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
    <ThemeContext.Provider value={darkTheme}>
      {/* <ExploreUseState /> */}
      {/* <ExploreUseEffect />
      <ExploreUSeEffectWithWindow /> */}
      {/* <ExploreUseMemoHook />
      <ExploreUseRefHook /> */}
      <ExploreUseCallback />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
      <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App
// only use in function components not class
// hooks must execute in the same order, cannot be in a:
//  if condition, loops, function, cant be nested have to be at the top level