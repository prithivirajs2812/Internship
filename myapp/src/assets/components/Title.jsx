import { useContext } from "react"
import Context from "./Context"

const Title = () => {
    const title = useContext(Context)
  return (
    <div style={{
        textAlign:"center",
        position:"absolute",
        left:"900px",
        top:"70px",
        width:"250px",
        height:"100px",
        backgroundColor:"lavender"
    }}>
        <h1>{title}</h1>
    </div>
  )
}

export default Title