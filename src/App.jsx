import React, { useState } from 'react'
import './App.css';
import Player from './components/Player/Player'
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Computer from './components/Computer/Computer'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [choice, setchoice] = useState('');
  const [score, setscore] = useState(0)
  console.log(choice);
  return (
    <div className="App">
      <Header score={score}/>
      <Routes>
        <Route exact path='/' element={<Player choice={choice} setchoice={setchoice}/>}>
        {/* <Player   />÷ */}
        </Route>
        <Route path='/game' element={<Computer score={score} choice={choice} setscore={setscore}/>}>
        </Route>
      </Routes>
      <Modal />
    </div>
  );
}

export default App;
