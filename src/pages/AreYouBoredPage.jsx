import TicTacToe from '../components/tictactoe/TicTacToe';

function AreYouBoredPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <TicTacToe />
    </div>
  );
}

export default AreYouBoredPage;
