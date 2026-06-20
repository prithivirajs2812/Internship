import { useState } from "react"

const State = () => {

    const [action, setAction] = useState("Notepad")

    function changeAction() {
        setAction(prompt("Enter your action"))
    }
  return (
    <>
    <h1>I am working on {action}</h1>
    <button onClick={changeAction}>Change</button>
    </>
  )
}

export default State