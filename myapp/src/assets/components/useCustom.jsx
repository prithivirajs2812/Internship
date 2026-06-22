import { useState } from "react";

function useCustom() {
  const [name, setName] = useState("");

  function edit(e) {
    setName(e.target.value);
  }

  return { name, edit };
}

export default useCustom;
