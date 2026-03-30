import "./Page.css";
import "./Home.css";
import SalonikaFamily from "../assets/SalonikaFamily.png"; 

export default function Home() {
  return (
    <div className="home-page">
      <aside className="sidebar">
        <h3>Key Facts</h3>
        <ul>
          <li>Jewish population before WWII: 50,000–61,000</li>
          <li>Major Jewish group: Sephardic Jews</li>
          <li>Forced labour registration: July 1942</li>
          <li>Ghettos established: 1943</li>
          <li>Jews deported: over 45,000</li>
          <li>Main destination: Auschwitz-Birkenau</li>
          <li>Percentage killed: about 96%</li>
          <li>Jews remaining after the war: fewer than 2,000</li>
        </ul>
      </aside>
      <main className="home-content">
        <div className="page">
          <h2>Introduction</h2>
          <p>Before the Second World War, Thessaloniki was home to one of the largest and most important Jewish communities in Europe. The majority of Jews in the city were Sephardic Jews, whose ancestors arrived after being expelled from Spain in 1492 (Saltiel, 2020). Jewish culture played a central role in the city’s identity, leading Thessaloniki to be known as the “Jerusalem of the Balkans.”</p>
          <p>During the Nazi occupation between 1941 and 1943, this long-established community was almost completely destroyed. Anti-Jewish laws, forced labour, ghettos, deportations, and mass murder led to the deaths of approximately 96% of Thessaloniki’s Jewish population (Saltiel, 2020; United States Holocaust Memorial Museum [USHMM], n.d.). The Holocaust had devastating social, economic, and cultural effects on the city that are still remembered today.</p>
          <img src={ SalonikaFamily } alt=" Jewish family of Salonika in 1917 (Wikipedia contributors, 2026)" className="centered-image"></img>
          <p>Jewish family of Salonika in 1917 (Wikipedia contributors, 2026)</p>
        </div>
      </main>
    </div>
  );
}