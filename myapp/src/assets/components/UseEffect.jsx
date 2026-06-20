import { useEffect } from "react"
import { useState } from "react"

const UseEffect = () => {

  const [count, setCount] = useState(0)

  const [count2,setCount2]=useState(0)

  useEffect(() => {
      console.log("count+1")
  },[count])

    useEffect(() => {
      console.log("count+2")
  },[count2])
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      backgroundColor:"lightblue",
      gap:"50px",
      width:"400px",
      height:"70px"
    }}>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>click</button>
    <h1>{count2}</h1>
    <button onClick={() => setCount2(count2 + 2)}>click</button>
    </div>
  )
}

export default UseEffect