import Square from "./Square";
import { useState } from "react";

const Board = () => {
  //   const [state, setState] = useState(["", "", "", "", "", "", "", "", ""]);
  const [state, setState] = useState<Array<string>>(Array(9).fill(null));
  const [isXPlayer, setIsXPlayer] = useState<boolean>(true);

  const handleSubmit = (index: number) => {
    const previousData = [...state];
    previousData[index] = isXPlayer ? "X" : "0";
    setState(previousData);
    // it will always be X and we need to make it false after the click
    // then we should setIsPlayerX to false
    // console.log(previousData[index]);
    setIsXPlayer(!isXPlayer);
  };

  // validate user

  const validateWinner = (): boolean | string => {
    const winnerLogic: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    // for (let i = 0; i < winnerLogic.length; i++) {
    //   console.log(winnerLogic[i]);
    // }

    for (let i of winnerLogic) {
      const [a, b, c] = i;
      // actually this will show the user win true because our state is initially null
      // so we need to check it the initial state is not null
      //   if (state[a] === state[b] && state[a] === state[c]) { // bug
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        // return true;
        return state[a];
      }
    }
    return false;
  };

  const playAgain = () => {
    // again setting to the null
    setState(Array(9).fill(null));
  };
  const isWinner = validateWinner();
  return (
    <div className="board">
      {isWinner ? (
        <div className="playAgain">
          <p
            style={{
              textAlign: "center",
              fontSize: "40px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "purple", marginRight: "6px" }}>
              {isWinner}
            </span>
            <span>Won ,Congrats !</span>
          </p>
          {/* both button work fine but second one is nice approach */}
          {/* <button onClick={() => window.location.reload()}>play again</button> */}
          <button onClick={playAgain}>play again</button>
        </div>
      ) : (
        <>
          <div className="row">
            <Square player={state[0]} onPlayerClick={() => handleSubmit(0)} />
            <Square player={state[1]} onPlayerClick={() => handleSubmit(1)} />
            <Square player={state[2]} onPlayerClick={() => handleSubmit(2)} />
          </div>
          <div className="row">
            <Square player={state[3]} onPlayerClick={() => handleSubmit(3)} />
            <Square player={state[4]} onPlayerClick={() => handleSubmit(4)} />
            <Square player={state[5]} onPlayerClick={() => handleSubmit(5)} />
          </div>
          <div className="row">
            <Square player={state[6]} onPlayerClick={() => handleSubmit(6)} />
            <Square player={state[7]} onPlayerClick={() => handleSubmit(7)} />
            <Square player={state[8]} onPlayerClick={() => handleSubmit(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
