import { HashRouter as Router, Routes, Route } from "react-router-dom";import Home from "./pages/Home";
import PreWar from "./pages/PreWar";
import Occupation from "./pages/Occupation";
import ForcedLabour from "./pages/ForcedLabour";
import Ghettos from "./pages/Ghettos";
import Deportations from "./pages/Deportations";
import Resistance from "./pages/Resistance";
import Effects from "./pages/Effects";
import Aftermath from "./pages/Aftermath";
import References from "./pages/References";
import Navbar from "./components/Navbar";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prewar" element={<PreWar />} />
        <Route path="/occupation" element={<Occupation />} />
        <Route path="/forced" element={<ForcedLabour />} />
        <Route path="/ghettos" element={<Ghettos />} />
        <Route path="/deportations" element={<Deportations />} />
        <Route path="/resistance" element={<Resistance />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/after" element={<Aftermath />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}