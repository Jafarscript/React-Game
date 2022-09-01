import React, { useState } from 'react'
import './App.css';
import Player from './components/Player/Player'
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Computer from './components/Computer/Computer'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [choice, setchoice] = useState('');
  const [score, setscore] = useState(0)
  const  [openModal, setOpenModal] = useState(false)

  // const toogle = () => {
  //   setOpenModal(!openModal);
  // }
  // console.log(choice);
  return (
    <div className="App">
      <div>
      <Header score={score}/>
      <Routes>
        <Route exact path='/' element={<Player choice={choice} setchoice={setchoice}/>}>
        {/* <Player   />÷ */}
        </Route>
        <Route path='/game' element={<Computer score={score} choice={choice} setscore={setscore}/>}>
        </Route>
      </Routes>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} openModal={openModal}/>}
      <button className='textmain' onClick={() => setOpenModal(!openModal)}>Rules</button>
      
    </div>
  );
}

export default App;
