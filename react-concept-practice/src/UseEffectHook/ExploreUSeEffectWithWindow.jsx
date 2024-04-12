import { useEffect, useState } from "react"

const ExploreUSeEffectWithWindow = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
    const handleResize = () => {setWindowWidth(window.innerWidth)}
  
    // ths event listener is listening better unmount it to clean up 
useEffect(() => {
    window.addEventListener('resize', handleResize)
    setWindowWidth(window.innerWidth)
    console.log('handaling')

    return () => {
        window.removeEventListener('resize', handleResize)
        console.log('cleaning up')
    }
}, [])
  return (
    <div>
   {windowWidth}
    </div>
  )
}

export default ExploreUSeEffectWithWindow

// useEffect(() => {
//     window.addEventListener('resize', () => {
//         setWindowWidth(window.innerWidth)
//     })
//     return () => {
//         window.removeEventListener('resize', () => {
//             setWindowWidth(window.innerWidth)
//         })
//     }
// }, [windowWidth])