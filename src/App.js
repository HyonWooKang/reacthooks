import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
      <Route path="/effect" element={<UseEffect />} />
    </Routes>
  );
}

export default App;
