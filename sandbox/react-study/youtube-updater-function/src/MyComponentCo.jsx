import { useState } from "react";

function MyComponentCo () {

  const [count, setCount] = useState(0);

  const incNumber = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  const decNumber = () => {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  }
  
  const resNumber = () => {
    setCount(c => c = 0);
  }

  return(
    <>
      <h1 className="elem-count">{count}</h1>
      <button className="elem-btn" onClick={incNumber}>Inc</button>
      <button className="elem-btn" onClick={resNumber}>Reset</button>
      <button className="elem-btn" onClick={decNumber}>Dec</button>
    </>
  )
}

export default MyComponentCo;