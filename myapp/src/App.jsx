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

import { Routes, Route } from 'react-router-dom' 
import { Link } from "react-router-dom"



  const App = () => {
  return (
    <div className="app">

    <nav className="nav-links">
      <ul>
      <li><Link to="/componentEx">Component Example</Link></li>
      <li><Link to="/jsxEx">JSX Example</Link></li>
      <li><Link to="/propsEx">Props Example</Link></li>
      <li><Link to="/stateEx">State Example</Link></li>
      <li><Link to="/eventEx">Event Handling Example</Link></li>
      <li><Link to="/conditionEx">Conditional Rendering Example</Link></li>
      <li><Link to="/listEx">List Rendering Example</Link></li>
      <li><Link to="/formEx">Form Example</Link></li>
      <li><Link to="/useEffectEx">UseEffect Example</Link></li>
      <li><Link to="/useRefEx">UseRef Example</Link></li>
      <li><Link to="/contextEx">UseContext Example</Link></li>
      <li><Link to="/fetchEx">Fetch Data Example</Link></li>  
      </ul>
    </nav>   

    <h1>👆BrowserRouter Example</h1>

      <Routes>
        {/* component */}
        <Route path="/componentEx" element={<Welcome />} />

         {/* jsx expression */}
        <Route path="/jsxEx" element={<Hello />} />

        {/* props */}
        <Route path="/propsEx" element={<Child name="React" />} />

        {/* useState */}
        <Route path="/stateEx" element={<State />} />

        {/* Event Handling */}
        <Route path="/eventEx" element={<Event />} />

        {/* conditional rendering */}
        <Route path="/conditionEx" element={<Condition />} />

        {/* list Rendering */}
        <Route path="/listEx" element={<List />} />

        {/* form */}  
        <Route path="/formEx" element={<Form />} />

        {/* UseEffect */}
        <Route path="/useEffectEx" element={<UseEffect />} />

        {/* UseRef */}
        <Route path="/useRefEx" element={<UseRef />} />

        {/* Usecontext */}
        <Route path="/contextEx" element={
          <Context.Provider value={"Learning react"}>
            <Title/>
          </Context.Provider>
        } />

        {/* fetch data from api */}
        <Route path="/fetchEx" element={<Fetch />} />
      </Routes> 
  
     </div>
  )
}

export default App