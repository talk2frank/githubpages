import logo from './images/FKgif.gif';
import linkdin from './images/linkedin.png';
import './App.css';


function App() {

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='Header-text'>
         Site under construction
        </h1>
      </header>

      <body className='App-body'>
        <h2 className='Header2-text'>
          Please be patient
        </h2>
        <p className='Body-text'>
          I'm not even sure what I'll do yet.<br></br>
          It may take a while<br></br>
          Please don't wait up
          </p>
      </body>

      <footer className='App-footer'>
        <a href='https://www.linkedin.com/in/frank-kinsey/'>
          <img src={linkdin} alt="LinkedIn" className='App-icon'>
          </img>

        </a>
        <p className='App-tagline'>
          Site created by Frank Kinsey 2023
        </p>
      </footer>

    </div>
  );
}

export default App;
