import "./App.css";
import React, { useState } from "react";

const App = () => {
  let i = 0;
  var [result, setResult] = useState([]);
  const [mostrarOcultar, setMostrarOcultar] = useState(false);

  const funcionPrueba = () => {
    for (i = 1; i <= 100; i++) {
      result.push(`${i % 3 ? "" : "Fizz"}${i % 5 ? "" : "Buzz"}` || i);
      setResult([...result]);
    }
    setMostrarOcultar(!mostrarOcultar);
    return <div>{result}</div>;
  };

  return (
    <>
      <h1 className="titulo">Ejercicio de FizzBuzz</h1>
      <p>Es un array de 100 numeros donde los multiplos de 3 se los llama "Fizz", los multiplos de 5 se los llama "Buzz" y los multiplos de ambos se los llama "FizzBuzz"</p>
      <p><b>Realizado por Juan Carlos Iasenza</b></p>
      <br/>
      <button className="boton" onClick={() => funcionPrueba()}>
        {mostrarOcultar ? `Ocultar` : `Mostrar`}
      </button>
      <div className={mostrarOcultar ? "show-element" : null}>
        {mostrarOcultar && result.map((res) => <h3>{res}</h3>)}
      </div>
    </>
  );
};

export default App;
