import React, { useRef } from 'react'


const UseRefExp1 = () => {

    let inputRef = useRef(null)

    const handleInput =()=> {
        inputRef.current.value="Dhruv"
        // inputRef.current.focus();
        inputRef.current.style.background="yellow"
    }

    const focus = () => {
        inputRef.current.focus();
      }
      
      const blur = () => {
        inputRef.current.blur();
      }
    
  return (
    <div>
      <h1>useRef  Example 1</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Submit</button>
      <button onClick={focus}>Focus!</button>
      <button onClick={blur}>Remove Focus</button>
      <hr />
     
    </div>
  )
}

export default UseRefExp1
