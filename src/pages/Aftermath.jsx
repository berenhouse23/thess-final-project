import "./Page.css";
import museum from "../assets/museum.png"

export default function Aftermath() {
  return (
    <div className="page">
      <h2>After the War and Memory</h2>
      <p>After World War II, fewer than 2,000 Jews remained in Thessaloniki (USHMM, n.d.). Many survivors returned to find that their homes had been occupied and their families had been killed.
The once thriving Jewish community, which had played an important role in the city for centuries, had almost completely disappeared. Today, memorials, museums, and historical research preserve the memory of Thessaloniki’s Jewish population and its importance to the history of the city.</p>
    <img src={museum} className="centered-image"></img>
    <p>Jewish Museum of Thessaloniki (Wikipedia contributors, 2026)</p>
    </div>
  );
}