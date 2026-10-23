function GameStatus({ currentPlayer, isDraw, winner }) {
  const label = winner ? `${winner} wins` : isDraw ? 'Draw game' : `${currentPlayer} to move`;

  return (
    <div className="text-center">
      <h2 className="font-display text-4xl font-semibold text-obsidian dark:text-white">{label}</h2>
    </div>
  );
}

export default GameStatus;
