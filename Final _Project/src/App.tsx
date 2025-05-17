
import { Routes, Route, } from "react-router";

import Home from "./Pages/Home"
import Services from "./Pages/Services";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" Component={Home}  />
        <Route path="/services" Component={Services}  />
      </Routes>
    </div>
  );
}
 
export default App