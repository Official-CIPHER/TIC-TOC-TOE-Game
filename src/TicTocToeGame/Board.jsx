import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn,setIsXTurn] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const checkWinner = () => {
    const winner = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]

    for(let logic of winner) {
      const [a,b,c] = logic 
      if(state[a] !==null & state[a] === state[b] && state[a] === state[c]){
          return state[a];
      }
    }

    return false
  }

  const isWinner = checkWinner();

  const hanldeClick = (index) => {
    if(state[index] !== null){
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X":"O"

    setState(copyState)
    setIsXTurn(!isXTurn)
  };

  const hanldeReset = () => {
    setState(Array(9).fill(null))
  }

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`board-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="theme-toggle" onClick={handleToggleTheme}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      {isWinner ?<><div className="winnerPlayer">{isWinner} won the game </div>
      <button className="playBtn" onClick={hanldeReset}>Play Again</button>
      </> :
      <>
      <h4>Player {isXTurn? "X" : "O"} please movw</h4>
      <div className="board-row">
        <Square onClick={() => hanldeClick(0)} value={state[0]} />
        <Square onClick={() => hanldeClick(1)} value={state[1]} />
        <Square onClick={() => hanldeClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => hanldeClick(3)} value={state[3]} />
        <Square onClick={() => hanldeClick(4)} value={state[4]} />
        <Square onClick={() => hanldeClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => hanldeClick(6)} value={state[6]} />
        <Square onClick={() => hanldeClick(7)} value={state[7]} />
        <Square onClick={() => hanldeClick(8)} value={state[8]} />
      </div>
      </>}
    </div>
  );
};

export default Board;
