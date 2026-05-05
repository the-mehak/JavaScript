//form data and controlled and uncontrolled components
import { useState } from "react";
function Controlledcomp() {
  const [data, setData] = useState({ email: "", password: "" });

  function formSubmit(event) {
    event.preventDefault();
    if (!data.email.includes("@")) {
      alert("Invalid email");
    }
    console.log(data);
    console.log("submit");
  }
  function handleEmail(event) {
    setData((prev) => ({ ...prev, email: event.target.value }));
  }
  function handlePassword(event) {
    setData((prev) => ({ ...prev, password: event.target.value }));
  }
  return (
    <>
      <h1>Controlled component</h1>
      <form>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={handleEmail}
          value={data.email}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handlePassword}
          value={data.password}
        />
        <br />
        <br />
        <button onClick={formSubmit}>Login</button>
      </form>
    </>
  );
}
export default Controlledcomp;
