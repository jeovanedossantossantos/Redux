import './App.css';
import {Intervalo, Soma, Media,Sorteio} from './components/index'
import React from 'react';
function App() {

 
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className="linha">
    
      <Intervalo></Intervalo> 
      </div>
      <div className="linha">
      <Soma></Soma> 
      <Media></Media> 
      <Sorteio></Sorteio> 
      </div>
    
    </div>
  );
}

export default App;
