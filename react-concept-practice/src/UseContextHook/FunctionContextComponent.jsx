import React from 'react'
import { ThemeContext } from '../App'
const FunctionContextComponent = () => {
    const darkTheme = React.useContext(ThemeContext)

    const themeStyles = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
    padding: '2rem',
    margin: '2rem'
}

  return (
    <div style={themeStyles}>FunctionContextComponent</div>
  )
}

export default FunctionContextComponent