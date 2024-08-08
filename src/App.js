import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
      <Route path="/effect" element={<UseEffect />} />
      <Route path="/context" element={<UseContext />} />
    </Routes>
  );
}

export default App;
