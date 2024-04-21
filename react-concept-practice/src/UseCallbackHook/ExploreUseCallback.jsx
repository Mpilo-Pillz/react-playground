import React, { useCallback, useMemo, useState } from 'react'
import List from './List'

const ExploreUseCallback = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    // Everytime we rerender out component this function gets recreated
    const getItems = useCallback(() => {
        // returns this actual function
        return [number, number + 1, number + 2]
    }, [number]) 

    const getItemsCallback = useCallback((incrementer) => {
        // returns this actual function
        return [number + incrementer, number + 1 + incrementer, number + 2 + incrementer]
    }, [number]) 

    const getMemoItems = useMemo(() => {
        // returns this Array at the botttom
        return [number, number + 1, number + 2]
    },[number])

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
  return (
    <div style={theme}>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <List getItems={getItems} />
        </div>
  )
}

export default ExploreUseCallback

// When ever there is a rerender reference types are always new (functions and Objects) even if the values are the same