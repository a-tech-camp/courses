import { useState } from "react";
import "./styles.css";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState('red');

  function togglePlayerTurn() {
    if (playerTurn === 'yellow') {
      changePlayerTurn('red');
    } else {
      changePlayerTurn('yellow');
    }
  }
  return (
    <div className="App">
      It is {playerTurn}'s turn
      <button onClick={togglePlayerTurn}>change player</button>
    </div>
  );
}
