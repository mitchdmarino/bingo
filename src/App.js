import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='logo' alt="webtoon bingo"  src="/images/webtoon-bingo.png"/>
        <p>Hello! <br></br><br></br>

          We are playing WEBTOON Bingo, but in the office! <br></br><br></br>

          Complete these special in-office tasks for 5 bingo squares to win “BINGO” and a special prize.  For your square to count, you need to take a photo documenting that you’ve done the bingo square’s task. To start, tap on a bingo square to add a photo.  <br></br><br></br>

          <strong>Please note</strong>: this site <strong>does not</strong> save your uploaded images or information. So, if you accidentally refresh the page, you will not have your Bingo squares’ photos saved and will have to re-add them. We recommend to snap and save the bingo square photos onto your camera roll first, then upload them onto the bingo square once you have 5 bingo squares ready to go! <br></br><br></br>

          Once you have uploaded all 5 bingo square photos and know you’ve gotten bingo in a row, share this on <strong>#wt-officebingo</strong> Slack channel and Dija will check! First person to get bingo wins a prize! For any issues, contact Dija. <br></br><br></br>

          Good luck!</p>
      </div>

      <div className="main">
        <Board />
      </div>
    </div>
  );
}

export default App;
