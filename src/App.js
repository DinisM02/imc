import { useState } from 'react';
import './app.css';
export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  function calcularIMC(){
    alert("CLICOU");
  }
  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em (kg) Ex: 90" value={peso}
        onChange={(e)=> setPeso(e.target.value)
        }/>
        <input type="text" placeholder="Altura em (cm) Ex: 180" value={altura}
        onChange={(e)=> setAltura(e.target.value)}/>

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>Seu imc foi 25, voce esta abaixo do peso</h2>
    </div>
  )
}

