import Elem from "./Elem";
export default function JatekTer(props) {
  function kattintas(index) {
    props.kattintas(index);

    /*itt kapja a gyerekkomponenstol az adatot*/
  }
  return (
    <div className="elemek">
      {props.lista.map((elem, index) => {
        return (
          <Elem ertek={elem} key={index} index={index} kattintas={kattintas} />
        );
      })}
    </div>
  );
}
