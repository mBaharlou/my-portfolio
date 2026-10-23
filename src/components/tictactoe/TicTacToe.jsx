import { RotateCcw } from 'lucide-react';
import Board from './Board';
import GameStatus from './GameStatus';
import useGameLogic from './useGameLogic';

function TicTacToe() {
  const { board, currentPlayer, gameOver, isDraw, playMove, resetGame, winner, winningLine } = useGameLogic();

  return (
    <section className="w-full max-w-[30rem]">
      <div>
        <GameStatus currentPlayer={currentPlayer} isDraw={isDraw} winner={winner} />
        <div className="mt-8">
          <Board board={board} gameOver={gameOver} onSelect={playMove} winningLine={winningLine} />
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={resetGame}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-navy/30 dark:bg-white dark:text-obsidian dark:focus:ring-white/50"
          >
            <RotateCcw size={17} />
            Reset Game
          </button>
        </div>
      </div>
    </section>
  );
}

export default TicTacToe;
