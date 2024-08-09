import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext.jsx";
import UseRef from "./pages/UseRef";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
      <Route path="/effect" element={<UseEffect />} />
      <Route path="/context" element={<UseContext />} />
      <Route path="/ref" element={<UseRef />} />
    </Routes>
  );
}

export default App;
