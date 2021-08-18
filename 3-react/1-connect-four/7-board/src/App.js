import "./styles.css";

function Column(props) {
    return (
      <div onClick={props.onClick}>
        {[5, 4, 3, 2, 1, 0].map(rowIndex =>
          <div className="slot" className={props.chips[rowIndex]}></div>
        )}
      </div>
    );

}

export default function App() {
  const [board, changeBoard] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  const [playerTurn, changePlayerTurn] = useState('red');

  function togglePlayerTurn() {
    if (playerTurn === 'red') {
      changePlayerTurn('yellow');
    } else {
      changePlayerTurn('red');
    }
  }
  function playColumn(columnNumber) {
    if (chips[columnNumber].length < 6) {
      board[columnNumber] = [...board[columnNumber], playerTurn];
      changeBoard([...board]);
      togglePlayerTurn();
    }
  }

  return (
    <div className="App">
      <div className="blue" onClick={addChips}>
        {board.map((column, index) =>
          <Column onClick={() => playColumn(index)} chips={board[index]}></Column>
        )}
      </div>
      It is player {playerTurn}'s turn
    </div>
  );
}
