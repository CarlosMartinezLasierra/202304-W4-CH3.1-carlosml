import React from "react";
import King from "./components/mock-data/king.tsx";
import ReactDOM from "react-dom";

const App: React.FC = () => {
  const king = new King(
    "Joffrey",
    18,
    "Y'all gonna die!",
    ["Lannister"],
    true,
    "Westeros",
    1
  );

  return (
    <div>
      <h1>King Card</h1>
      <div>
        <h2>{king.name}</h2>
        <p>Age: {king.age}</p>
        <p>Warcry: {king.warcry}</p>
        <p>Family: {king.family.join(", ")}</p>
        <p>Is alive? {king.itsalive ? "Yes" : "No"}</p>
        <p>Kingdom: {king.kingdom}</p>
        <p>Reign years: {king.reignYears}</p>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
export default App;
