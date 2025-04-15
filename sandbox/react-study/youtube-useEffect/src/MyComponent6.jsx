import { useState, useEffect } from "react";
 
const MyComponent6 = () => {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(() => {
    document.title = `My conter: ${count} ${color}`

    return () => {
      //SOME CLEANUP
    }
  }, [count, color])

  const addCount = () => {
    setCount(c => c + 1)
  }

  const subtractCount = () => {
    setCount(c => c - 1)
  }

  const changeColor = () => {
    setColor(c => c === 'green' ? 'red' : 'green')
  }
  return(
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br/>
    <button onClick={changeColor}>Change color</button>
    </>
  )
}

export default MyComponent6;