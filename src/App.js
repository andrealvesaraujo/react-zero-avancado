import React from 'react'

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.anos} anos</h3>
    </div>
  )
}

function App(){
  return (
    <div>
      Olá Mundo!
      <Bemvindo nome="Matheus" anos="24"/>
      <Bemvindo nome="Amanda" anos="21"/>      
    </div>
  )
}

export default App;