import "./Page.css";
import OccupationNav from "../components/OccupationNav";
import humiliation from "../assets/humiliation.png"

export default function ForcedLabour() {
  return (
    <div className="page">
      <OccupationNav />
      <h2>Forced Labour and Public Humiliation</h2>
      <p>Persecution increased in July 1942, when approximately 9,000 Jewish men aged 18–45 were forced to gather in Eleftherias Square (Liberty Square) to register for forced labour (USHMM, n.d.).</p>
      <h3>During this event:</h3>
      <ul>
        <li>Jewish men were publicly humiliated and beaten</li>
        <li>About 2,000 men were sent to forced labour camps for the German army</li>
        <li>The Jewish community was forced to pay ransom for the release of labourers</li>
      </ul>
      <p>To raise money, the Jewish community was forced to sell the historic Jewish cemetery, one of the largest Jewish cemeteries in Europe. The cemetery was later destroyed, and tombstones were used as construction materials (USHMM, n.d.). The destruction of the cemetery symbolized the attempt to erase Jewish history and presence in the city.</p>
      <img src={ humiliation } className="centered-image"></img>
      <p>Humiliation of the Jews, Eleftherias Square (Wikipedia contributors, 2026)</p>
    </div>
  );
}