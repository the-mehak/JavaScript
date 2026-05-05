//form data and controlled and uncontrolled components

import { useRef, useState } from "react";
function UnControlledcomp() {
  let [data, setData] = useState();
  let emailRef = useRef("");
  let passwordRef = useRef("");
  function formSubmit(event) {
    event.preventDefault();
    if (!emailRef.current.value.includes("@")) {
      alert("Invalid email");
    }
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log("submit");
  }

  return (
    <>
      <h1>Uncontrooled component use ref</h1>
      <form>
        <input type="email" placeholder="Enter Email" ref={emailRef} />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" ref={passwordRef} />
        <br />
        <br />
        <button onClick={formSubmit}>Login</button>
      </form>
    </>
  );
}
export default UnControlledcomp;
