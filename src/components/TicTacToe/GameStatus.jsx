function GameStatus({ currentPlayer, isDraw, winner }) {
  const label = winner ? `${winner} wins` : isDraw ? 'Draw game' : `${currentPlayer} to move`;
  const detail = winner
    ? 'Nice finish. Reset the board for another round.'
    : isDraw
      ? 'No empty cells left. Clean match.'
      : 'Pick any open square and keep the pressure on.';

  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/65">Game Status</p>
      <h2 className="mt-3 font-display text-4xl font-semibold text-obsidian dark:text-white">{label}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-silver/75">{detail}</p>
    </div>
  );
}

export default GameStatus;
