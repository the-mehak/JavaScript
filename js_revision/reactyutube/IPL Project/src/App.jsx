import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Matchdetails from "./components/Matchdetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Matchdetails/:id" element={<Matchdetails />} />
      </Routes>
    </>
  );
}
export default App;
