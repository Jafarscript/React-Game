import React from 'react'
import { Link } from 'react-router-dom';
import Triangle from '../images/bg-triangle.svg';
import './Player.css'
const Player = ({setchoice}) => {

  const selected = (e) => {
    setchoice(e.target.dataset.id);
  }
  return (
    <div className='play'>
      <img src={Triangle} alt="" className='tri'/>
      <div className="links">
      <Link to='/game' >
          <div data-id='paper' onClick={selected} className='paper'></div>
      </Link>
      <Link to='/game'>
          <div data-id='rock' onClick={selected} src="" className='rock'></div>
      </Link>
      <Link to='/game' >
          <div data-id='scissors' onClick={selected} className='scissors'></div>
      </Link>
      </div>
    </div>
  )
}

export default Player