const Child = (props) => {

  const code=`const Child = (props) => {
  return (

    
    <div>Learning {props.name}</div>
  )
}

export default Child`
  return (

    <div className="output">
      <pre><code>{code}</code></pre>
      <h1>Output</h1>
      <div>Learning {props.name}</div>
    </div>
  )
}

export default Child