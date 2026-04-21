import { useCallback, useMemo, useState } from 'react';

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board) {
  const line = winningLines.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  return line ? { player: board[line[0]], line } : null;
}

function useGameLogic() {
  const [board, setBoard] = useState(() => Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const winner = useMemo(() => getWinner(board), [board]);
  const isDraw = !winner && board.every(Boolean);
  const gameOver = Boolean(winner) || isDraw;

  const playMove = useCallback(
    (index) => {
      if (board[index] || gameOver) return;

      setBoard((currentBoard) => {
        if (currentBoard[index] || getWinner(currentBoard)) return currentBoard;

        const nextBoard = [...currentBoard];
        nextBoard[index] = currentPlayer;
        return nextBoard;
      });

      setCurrentPlayer((player) => (player === 'X' ? 'O' : 'X'));
    },
    [board, currentPlayer, gameOver],
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
  }, []);

  return {
    board,
    currentPlayer,
    gameOver,
    isDraw,
    playMove,
    resetGame,
    winner: winner?.player ?? null,
    winningLine: winner?.line ?? [],
  };
}

export default useGameLogic;
