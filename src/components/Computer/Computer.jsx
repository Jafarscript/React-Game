import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Computer.css'


const Computer = ({ setscore, score, choice }) => {
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const computerChoice = () => {
    const chioces = ["rock", "paper", "scissors"];
    setComputer(chioces[Math.floor(Math.random() * chioces.length)]);
  };

  useEffect(() => {
    computerChoice();
  }, []);

  const outcome = () => {
    if (choice === "rock" && computer === "scissors") {
      setPlayerWin("win");
      setscore(score + 1);
    } else if (choice === "rock" && computer === "paper") {
      setPlayerWin("lose");
      setscore(score - 1);
    } else if (choice === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setscore(score - 1);
    }
    else if (choice === "paper" && computer === "rock") {
      setPlayerWin("win");
      setscore(score + 1);
    }
    else if (choice === "scissors" && computer === "rock") {
      setPlayerWin("lose");
      setscore(score - 1);
    }
    else if (choice === "scissors" && computer === "paper") {
      setPlayerWin("win");
      setscore(score + 1);
    } else{
      setPlayerWin('draw');
    }
  };

  useEffect(() => {
    const timer = counter > 0 ? setInterval( () => {
      setCounter(counter -1);
    }, 1000) : outcome();
    return () => {clearInterval(timer)}
  }, [counter, computer]);


  return (
    <div className="game">
      <div className="yours">
        <span className="text">You Picked</span>
        <div className={`new-${choice} ${playerWin === 'win' ? `new-${choice}-winner`: ''}`}></div>
      </div>
      {playerWin === 'win' && <div className="result">
        <span className="text">You Win</span>
        <Link to='/' className="again" onClick={() => setComputer()}>Play Again</Link>
      </div>}
      {playerWin === 'lose' && <div className="result">
        <span className="text">You Lose</span>
        <Link to='/' className="again" onClick={() => setComputer()}>Play Again</Link>
      </div>}
      {playerWin === 'draw' && <div className="result">
        <span className="text">You Draw</span>
        <Link to='/' className="again" onClick={() => setComputer()}>Play Again</Link>
      </div>}
      <div className="computer">
        <span className="text">The House Picked</span>
       {
        counter === 0 ?  <div className={`new-${computer} ${playerWin === 'lose' ? `new-${computer}-winner`: ''}`}></div> :
        <div className="count">
          <p>{counter}</p>
        </div>
       }
      </div>
    </div>
  );
};

export default Computer;
