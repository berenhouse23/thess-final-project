import "./Page.css";
import OccupationNav from "../components/OccupationNav";
import Ausch from "../assets/Ausch.png"
export default function Deportations() {
  return (
    <div className="page">
      <OccupationNav />
      <h2>Deportations</h2>
      <p>Between March and August 1943, German authorities deported more than 45,000 Jews from Thessaloniki to the Auschwitz-Birkenau concentration camp (USHMM, n.d.). Jews were transported in overcrowded trains, and most were murdered shortly after arrival.</p>
      <p>Approximately 96% of the Jewish population of Thessaloniki was killed, representing one of the highest destruction rates of any Jewish community in Europe during the Holocaust (Saltiel, 2020). These deportations effectively ended centuries of Jewish presence in the city.</p>
      <img src={ Ausch } className="centered-image"></img>
      <p>The entrance of Auschwitz II-Birkenau, a view from inside the camp (Wikipedia contributors, 2026)</p>
    </div>
  );
}