import Hello from "./assets/components/Hello"
import Welcome from "./assets/components/Welcome"
import Child from "./assets/components/Child"
import State from "./assets/components/State"
import Event from "./assets/components/Event"
import Condition from "./assets/components/Condition"
import List from "./assets/components/List"
import Form from "./assets/components/Form"
import UseEffect from "./assets/components/UseEffect"
import UseRef from "./assets/components/UseRef"
import Context from "./assets/components/Context"
import './App.css'
import Title from "./assets/components/Title"
import Fetch from "./assets/components/fetch"



  const App = () => {
  return (
    <div className="app">
    {/* component */}
    <Welcome />

    {/* jsx expression */}
    <Hello />

    {/* props */}
    <Child name="React" />

    {/* useState */}
    <State/>

    {/* Event Handling */}
    <Event/>

    {/* conditional rendering */}
    <Condition/>

    {/* list Rendering */}
    <List/>

    {/* form */}
    <Form/>

    {/* UseEffect */}
    <UseEffect/>

    {/* UseRef */}
    <UseRef/>
    

    {/* Usecontext */}
    <Context.Provider value={"Learning react"}>
      <Title/>
    </Context.Provider>

    {/* fetch data from api */}
    <Fetch/>

     </div>
  )
}

export default App