import { Link } from "react-router-dom";
import "./OccupationNav.css";

export default function OccupationNav() {
  return (
    <nav className="occupation-nav">
      <Link to="/forced">Forced Labour</Link>
      <Link to="/ghettos">Ghettos</Link>
      <Link to="/deportations">Deportations</Link>
      <Link to="/resistance">Resistance</Link>
    </nav>
)}