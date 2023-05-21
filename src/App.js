import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Webtoon Bingo</h1>
        <p>Tap on a square to add a picture.</p>
      </div>

      <div className="main">
        <Board />
      </div>
    </div>
  );
}

export default App;
