import { useState } from "react"

const Condition = () => {

  const code=`import { useState } from "react"

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

export default Condition`

    const [Login,setLogin]=useState(false)

    function login(){
        setLogin(true)
    }
  return (
    <div className="output">

        <pre><code>{code}</code></pre>
        <h1>Output:</h1>
        {Login ?<h2>Welcome User!</h2>:<h2>Please Login</h2>}
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Condition