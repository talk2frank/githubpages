import './App.css';
import icons from './images/imgindex.js'


function App() {

  return (
    <div className="App">
   
      <div className="App-banner">
        <img src={icons.fkicon} className="App-logo" alt="logo" />
        <div className='Bannerspace'>
          <h1 className='Header-text'>
          Site developed in <a href='https://reactjs.org/'>React</a>
          </h1>
          <p className='Header-subtext'>*currently under construction*</p>
        </div>
      </div>

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
          <img src={icons.linkedin} alt="LinkedIn" className='App-icon'>
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
