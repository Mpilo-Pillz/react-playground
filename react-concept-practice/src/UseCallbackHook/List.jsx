import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('updating items')
    }, [getItems])
    
    // useEffect(() => {
    //     setItems(getItemsCallback(5))
    //     console.log('updating items')
    // }, [getItems]) // cant do this with use mamo as its not a function is a value returned by a function

  return items.map(item => <div key={item}>{item}</div>)
}

export default List