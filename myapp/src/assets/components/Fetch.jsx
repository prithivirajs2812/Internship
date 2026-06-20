import { useEffect } from "react"
import { useState } from "react"

const Fetch = () => {


    const code=`import { useEffect } from "react"
import { useState } from "react"

const Fetch = () => {

    const[users,setUsers] = useState([])    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
  return (
    <div className="output">
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Fetch`

    const[users,setUsers] = useState([])    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
  return (

    <div className="output">
      <pre><code>{code}</code></pre>
      <h2>Output:</h2>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Fetch