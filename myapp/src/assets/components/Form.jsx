import { useState } from 'react'

const Form = () => {

    const[name,setName]=useState("")
  return (
    <>
        <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <h2>Form User-{name}</h2>
    </>
  )
}

export default Form