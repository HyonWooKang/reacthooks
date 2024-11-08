import { Route, Routes } from "react-router-dom";
import './asset/style.css';
import Home from "./pages/Home";
import UseContext from "./pages/UseContext.jsx";
import UseEffect from "./pages/UseEffect";
import UseMemoPage from "./pages/UseMemo";
import UseRef from "./pages/UseRef";
import UseState from "./pages/UseState";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
      <Route path="/effect" element={<UseEffect />} />
      <Route path="/context" element={<UseContext />} />
      <Route path="/ref" element={<UseRef />} />
      <Route path="/memo" element={<UseMemoPage />} />
    </Routes>
  );
}

export default App;
