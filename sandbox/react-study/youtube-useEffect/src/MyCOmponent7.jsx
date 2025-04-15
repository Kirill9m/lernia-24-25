import { useState, useEffect } from "react";
 
const MyComponent7 = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('Event created')
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event cleaned')
    }
  }, [])

  useEffect(() => {
      document.title = `Size: ${width} x ${height}`
  }, [width, height])

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  } 

  return(
    <>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
    </>
  )
}

export default MyComponent7;