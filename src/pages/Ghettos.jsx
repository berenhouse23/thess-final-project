import "./Page.css";
import OccupationNav from "../components/OccupationNav";
import registration from "../assets/registration.png"
export default function Ghettos() {
  return (
    <div className="page">
      <OccupationNav />
      <h2>Ghettos and Daily Life Under Persecution</h2>
      <p>In February 1943, German authorities forced Jews into ghettos, including the Baron Hirsch ghetto, located near the railway station (USHMM, n.d.). Jews were concentrated in these areas in preparation for deportation.</p>
      <p>Letters written by Jewish families during this period provide insight into everyday life under persecution. These letters describe:</p>
      <ul>
        <li>Overcrowding</li>
        <li>Lack of food</li>
        <li>Fear of deportation</li>
        <li>Separation from family members</li> 
      </ul>
      <p>Despite these conditions, many families attempted to maintain hope and emotional connection through correspondence (Molho, 2017). Those  personal accounts help illustrate the human experience of persecution.</p>
      <img src={ registration } className="centered-image"></img>
      <p>Registration of the Jews of Thessaloniki by the Nazis, July 1942, Eleftherias Square (Wikipedia contributors, 2026)</p>
    </div>
  );
}