import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Thessaloniki & WW2</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/prewar">Jewish Life</Link>
        <Link to="/occupation">Occupation</Link>
        <Link to="/effects">Effects</Link>
        <Link to="/after">Aftermath</Link>
        <Link to="/references">References</Link>
      </div>
    </nav>
  );
}