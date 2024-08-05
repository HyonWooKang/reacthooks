import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UseState from "./pages/UseState";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
    </Routes>
  );
}

export default App;
