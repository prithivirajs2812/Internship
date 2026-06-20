import { useContext } from "react";
import Context from "./Context";

const Title = () => {
  const code = `App.jsx
    <Context.Provider value={"Learning react"}>
            <Title/>
    </Context.Provider>
    
Context.jsx
    import {createContext} from "react"
    
    const Context = createContext()
    export default Context
    
Title.jsx    
    import { useContext } from "react"
    import Context from "./Context"

    const Title = () => {
        const title = useContext(Context)
      return (
        <div className="output">
            <h1>{title}</h1>
        </div>
      )
    }

export default Title`;

  const title = useContext(Context);
  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h2>Output:</h2>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
