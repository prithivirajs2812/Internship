import { useEffect } from "react"
import { useState } from "react"

const Fetch = () => {

    const[users,setUsers] = useState([])    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
  return (
    <div style={{
        position:"absolute",
        left:"900px",
        top:"200px",
        backgroundColor:"lavender"
    }}>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Fetch