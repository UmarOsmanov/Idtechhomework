import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;