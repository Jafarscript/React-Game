import React from 'react'
import { Link } from 'react-router-dom'

const Player = ({setchoice}) => {

  const selected = (e) => {
    setchoice(e.target.dataset.id);
  }
  return (
    <div>
      <Link to='/game'>
          <p data-id='rock' onClick={selected} src="" >rock</p>
          <img src="./images/icon-scissors.svg" alt="rock" />
      </Link>
      <Link to='/game' >
          <p data-id='paper' onClick={selected}>papar</p>
      </Link>
      <Link to='/game' >
          <p data-id='scissors' onClick={selected}>scissors</p>
      </Link>
    </div>
  )
}

export default Player