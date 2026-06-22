import useCustom from "./useCustom";

const CustomHook = () => {
  const code = `useCustom.jsx
  import { useState } from "react";
  
  function useCustom() {
    const [name, setName] = useState("");
  
    function edit(e) {
      setName(e.target.value);
    }
  
    return { name, edit };
  }
  
  export default useCustom;
  
CustomHook.jsx
    import useCustom from "./useCustom";

    const CustomHook = () => {
        const { name, edit } = useCustom();
        return (
            <div className="output">
                <input type="text" onChange={edit} value={name} />
                <h2>{name}</h2>
            </div>
         );
    };

export default CustomHook;
`;
  const { name, edit } = useCustom();
  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h1>Output:</h1>
      <input type="text" onChange={edit} value={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default CustomHook;
