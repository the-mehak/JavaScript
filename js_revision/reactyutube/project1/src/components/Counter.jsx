import { useState } from "react"
import function Counter(){
    const [val,setVal]=useState(0)
    return<>
        <h1>Counter</h1>
      <div>  <button>Increase</button>
      <h3>{val}</h3>
           <button>Decrease</button></div>
    </>
}