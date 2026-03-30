import { Link } from "react-router-dom";
import "./Page.css";
import "./Occupation.css";
import OccupationNav from "../components/OccupationNav";

export default function Occupation() {
  return (
    <div className="page">
      <OccupationNav />
      <h2>German Occupation 1941</h2>
      <p>In April 1941, Nazi Germany invaded Greece, and Thessaloniki became part of the German occupation zone due to its strategic importance as a major port city (USHMM, n.d.). Anti-Jewish policies were introduced almost immediately.
Within the first weeks of occupation:</p>
    <h3>Within the first weeks of occupation:</h3>
      <ul>
        <li>Jewish leaders were arrested</li>
        <li>Jewish families were evicted from their homes</li>
        <li>Jewish businesses and property were confiscated</li>
        <li>The Jewish hospital was taken over by the German army</li>
        <li>Cultural and religious objects were looted from synagogues and institutions (USHMM, n.d.)</li>
      </ul>
      <p>These actions aimed to isolate the Jewish population socially and economically and weaken the foundations of Jewish life in Thessaloniki.</p>
    </div>
  );
}