import { useState } from "react"

const Condition = () => {

    const [Login,setLogin]=useState(false)

    function login(){
        setLogin(true)
    }
  return (
    <>
        {Login ?<h1>Welcome User!</h1>:<h1>Please Login</h1>}
        <button onClick={login}>Login</button>
    </>
  )
}

export default Condition