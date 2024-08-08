import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContextPage from "./pages/UseContextPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
      <Route path="/effect" element={<UseEffect />} />
      <Route path="/context" element={<UseContextPage />} />
    </Routes>
  );
}

export default App;
