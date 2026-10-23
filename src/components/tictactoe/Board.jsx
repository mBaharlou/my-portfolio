import Cell from './Cell';

function Board({ board, gameOver, onSelect, winningLine }) {
  return (
    <div className="mx-auto grid w-full max-w-[28rem] grid-cols-3 gap-3 sm:gap-4" aria-label="Tic-Tac-Toe board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          index={index}
          disabled={gameOver}
          isWinning={winningLine.includes(index)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Board;
