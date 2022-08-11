import './App.css';
import {Intervalo, Soma, Media,Sorteio} from './components/index'
import React, {useState} from 'react';
function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className="linha">
    
      <Intervalo 
      min={min} 
      max={max}
      onMinChange={setMin}
      onMaxChange={setMax}
      ></Intervalo> 
      </div>
      <div className="linha">
      <Soma min={min} max={max}></Soma> 
      <Media min={min} max={max}></Media> 
      <Sorteio min={min} max={max}></Sorteio> 
      </div>
    
    </div>
  );
}

export default App;
