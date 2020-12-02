import logo from './launch-home.png';
import './spacex-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Space X App</code>
        </p>
        <a
          className="App-link"
          href = "https://api.spacexdata.com/v3/launches"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Comprehensive record of Space X launches
        </a>
      </header>
    </div>
  );
}

export default App;
