import { useEffect, useState } from "react";
import "./styles.css";
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
const Tictactoe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const getWinner = (squares ) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };
  const handleClick = (getCurrentIndex) => {
    let cpySquares = [...squares];
    if (cpySquares[getCurrentIndex]) return;
    cpySquares[getCurrentIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };
  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };
  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is draw! Please restart the game.`);
    } else if (getWinner(squares)) {
      setStatus(`${getWinner(squares)} won the game. Restart the game.`);
    } else {
      setStatus(`Next turn is of ${isXTurn ? "X" : "O"}'s`);
    }
  }, [squares, isXTurn]);
  return (
    <div className="tictactoe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Tictactoe;
