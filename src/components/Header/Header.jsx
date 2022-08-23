import React from 'react'
import './Header.css'
const Header = ({score}) => {
  return (
    <header className='flex-h'>
      <div className='left-h'>
        <h3>Rock</h3>
        <h3>Paper</h3>
        <h3>Scissors</h3>
      </div>
      <div className="scores">
        <h4>SCORE</h4>
        <h1>{score}</h1>
      </div>
    </header>
  )
}

export default Header