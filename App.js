import "./App.css";
import JatekTer from "./JatekTer";
import { useState } from "react";
import TModel from "./model/Tmodel";
const tmodel = new TModel();
function App() {
  const [list, setAktElem] = useState(tmodel.getList());
  function kattintas(index) {
    tmodel.setAllapot(index);
    setAktElem(tmodel.getList());
    console.log(index);

    /*itt kapja a gyerekkomponenstol az adatot*/
  }
  return (
    <div className="App">
      <header className="App-header">tictactoe</header>
      <article>
        <JatekTer lista={list} kattintas={kattintas} />
      </article>
    </div>
  );
}

export default App;
