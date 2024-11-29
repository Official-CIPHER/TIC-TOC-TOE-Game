# Tic-Tac-Toe Game in React
## Overview
This project is a simple Tic-Tac-Toe game built using React. It allows two players to play the classic game, where they take turns to mark either an "X" or "O" on a 3x3 grid. The game ends when either one player wins or all cells are filled (resulting in a draw). This project demonstrates how to manage state, events, and render dynamic content in React.
## Features

Two-player mode (player "X" and player "O").
The game board consists of 9 cells in a 3x3 grid.
Players take turns marking cells with "X" and "O".
The game detects a winner or a draw.
Option to reset the game after completion.

## Prerequisites
Before starting the project, ensure you have the following installed:

Node.js: To run the development server and build the app.
npm (Node Package Manager): To install dependencies.

You can download Node.js from the official site: [Node.js Download](https://nodejs.org/).
## Getting Started
Follow these steps to set up the game:
### 1. Clone the Repository
Start by cloning the repository to your local machine:
git clone https://github.com/Official-CIPHER/TIC-TOC-TOE-Game
cd tic-tac-toe-react

### 2. Install Dependencies
Install the required dependencies using npm:
npm install

### 3. Start the Development Server
Run the development server to launch the application in your browser:
npm start

By default, the app should be available at http://localhost:3000.

### Core Components

Square.js

Represents an individual square on the Tic-Tac-Toe grid.
Renders either an "X", "O", or is empty.
Takes in props for the value of the square and an onClick handler.



import React from 'react';

const Square = ({ value, onClick }) =&gt; {
  return (
    &lt;button className="square" onClick={onClick}&gt;
      {value}
    &lt;/button&gt;
  );
};

export default Square;


Board.js

Represents the entire game board (3x3 grid).
Renders 9 Square components.
Manages the board’s state (which player occupies which square) and determines the winner.



import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) =&gt; {
  return (
    &lt;div className="board"&gt;
      {squares.map((value, index) =&gt; (
        &lt;Square key={index} value={value} onClick={() =&gt; onClick(index)} /&gt;
      ))}
    &lt;/div&gt;
  );
};

export default Board;


GameStatus.js

Displays the game’s current status, such as which player's turn it is, or if there's a winner or draw.



import React from 'react';

const GameStatus = ({ status }) =&gt; {
  return &lt;div className="game-status"&gt;{status}&lt;/div&gt;;
};

export default GameStatus;


App.js

Main component where the game logic is implemented.
Handles the game state, determines if the game is won or drawn, and resets the game when needed.



import React, { useState } from 'react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';

const App = () =&gt; {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState("Next player: X");

  const handleClick = (index) =&gt; {
    const newSquares = squares.slice();

    if (newSquares[index] || calculateWinner(newSquares)) {
      return;
    }

    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setGameStatus(`Winner: ${winner}`);
    } else if (newSquares.every(Boolean)) {
      setGameStatus("It's a draw!");
    } else {
      setGameStatus(`Next player: ${isXNext ? "O" : "X"}`);
    }
  };

  const calculateWinner = (squares) =&gt; {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i &lt; lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] &amp;&amp; squares[a] === squares[b] &amp;&amp; squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () =&gt; {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus("Next player: X");
  };

  return (
    &lt;div className="game"&gt;
      &lt;GameStatus status={gameStatus} /&gt;
      &lt;Board squares={squares} onClick={handleClick} /&gt;
      &lt;button className="reset-button" onClick={resetGame}&gt;Restart Game&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default App;

## Game Logic


Game State:

squares: An array that holds the current state of each square (either "X", "O", or null).
isXNext: A boolean flag that keeps track of whose turn it is.
gameStatus: A string that holds the current status of the game (e.g., "Next player: X", "Winner: X", "It's a draw!").



handleClick():

Updates the squares array when a player clicks a square.
Checks if the click results in a win or draw, and updates the gameStatus.



calculateWinner():

Determines if there’s a winner by checking all possible winning lines (rows, columns, and diagonals).



resetGame():

Resets the game to its initial state, allowing players to start a new game.



## CSS
The game is styled with basic CSS to give it a simple, clean interface. You can add custom styles in the index.css file to make the game visually appealing. Example styles:
/* index.css */
.game {
  text-align: center;
  font-family: Arial, sans-serif;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  margin: 20px auto;
}

.square {
  width: 100px;
  height: 100px;
  font-size: 36px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

.reset-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.game-status {
  margin-bottom: 10px;
  font-size: 20px;
}

## Conclusion
This Tic-Tac-Toe game demonstrates how to use React for building interactive applications by managing state, handling events, and rendering dynamic components. It provides a simple yet effective example of using React to develop a game with basic game logic and user interface elements.
### Possible Improvements

Add functionality for playing against an AI.
Implement a history feature to allow players to step through their moves.
Enhance the UI with animations or advanced styling.

Enjoy building and expanding this project!