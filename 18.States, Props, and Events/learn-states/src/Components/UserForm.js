import React, { useRef, useState } from "react";

function UserForm(event) {
  const [name, setName] = useState("");
  const nameInputRef = useRef("");

  function UserName(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nameInputValue = nameInputRef.current.value;
    console.log(nameInputValue);
    alert(nameInputValue);
  }

  return (
    <form>
      <p>Your name is : {name}</p>
      <label htmlFor="name">Name</label>
      {/* <input type="text" onChange={UserName} /> */}
      <input type="text" ref={nameInputRef} />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default UserForm;
