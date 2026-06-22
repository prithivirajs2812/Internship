const Event = () => {

      const code = `const Event = () => {
        function showMessage(){
            alert("Hiiiii")
        }
  return (
    <button onClick={showMessage}>Click</button>
  )
}

export default Event`

        function showMessage(){
            alert("Hiiiii")
        }
  return (
    <div className="output">
        <pre><code>{code}</code></pre>
        <h1>Output:</h1>
      <button onClick={showMessage}>Click</button>
    </div>
  )
}

export default Event