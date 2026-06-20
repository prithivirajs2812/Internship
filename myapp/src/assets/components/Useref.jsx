import { useRef } from "react"

const Useref = () => {

    const inputref=useRef()

    const focusInput=()=>{
        inputref.current.focus()
    }

  return (
    <div>
        <input ref={inputref} type="text" />
        <button onClick={focusInput}>focus</button>
    </div>
  )
}

export default Useref