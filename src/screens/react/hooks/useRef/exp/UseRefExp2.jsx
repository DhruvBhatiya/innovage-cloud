import React, { useState, useRef, useEffect } from "react";

const UseRefExp2 = () => {
  const [isEditing, setEditing] = useState(false);
  const [isName, setName] = useState("Dhruv");
  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>useRef  Example 2</h1>
      {isEditing ? (
        <input ref={inputRef} value={isName} 
        onChange={handleNameChange} />
      ) : <p>{isName}</p>}
      <button onClick={toggleEditing}>{isEditing ? 'Update' : 'Edit'}</button>
    </div>
  );
};

export default UseRefExp2;
