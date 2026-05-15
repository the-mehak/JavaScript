import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [val, setVal] = useState({ number: "", pass: "" });

  function handleSubmit(e) {
    e.preventDefault();

    // 10 digit check
    if (val.number.length !== 10) {
      alert("Enter 10 digit number");
      return;
    }

    const defaultData = {
      number: "1122334455",
      pass: "2727",
    };

    const { number, pass } = val;

    if (number === defaultData.number && pass === defaultData.pass) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-blue-300 text-2xl text-center p-2 rounded"
          type="text"
          maxLength={10}
          placeholder="Enter your Number"
          onChange={(e) =>
            setVal((prev) => ({ ...prev, number: e.target.value }))
          }
        />

        <input
          className="bg-blue-300 text-2xl text-center p-2 rounded"
          type="text"
          placeholder="OTP"
          onChange={(e) =>
            setVal((prev) => ({ ...prev, pass: e.target.value }))
          }
        />

        <button type="submit" className="bg-black text-white px-6 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
