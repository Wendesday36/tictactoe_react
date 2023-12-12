import "./App.css";
import JatekTer from "./JatekTer";
import { useState } from "react";
const lista = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [aktElem, setAktElem] = useState(0);
  function kattintas(index) {
    if (lista[index]) {
      
    }

    console.log(index);
    setAktElem(index);
    /*itt kapja a gyerekkomponenstol az adatot*/
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>tictactoe</p>
      </header>
      <article>
        <JatekTer lista={lista} obj={lista[aktElem]="X"}  kattintas={kattintas} />
      </article>
    </div>
  );
}

export default App;
