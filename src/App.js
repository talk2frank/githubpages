import './App.css';
import icons from './images/imgindex.js'
import Footer from './components/components';

function App() {

  return (
    <div className="App">
   
      <div className="App-banner">
        <img src={icons.me} className="App-profilepic" alt="Profile Pic" />
        <div className='Bannerspace'>
          <h1 className='Header-text'>Site developed in <a href='https://reactjs.org/'>React</a>
            <a href='https://reactjs.org/'>
              <img src={icons.react} alt="React" className='App-icon'>
              </img>
            </a>
          </h1>
          <p className='Header-subtext'>*currently under construction*</p>
        </div>
      </div>

      <body className='App-body'>
        <h2 className='Header2-text'>
          Frank Kinsey;: GitHub Pages site
        </h2>
        <p className='Body-text'>
          Welcome to my site which is a work in progress<br></br>
          Ultimately this is an alternative to my GitHub profile page
        </p>
        <span></span>
        <p className='Body-text'>To see my profile page visit <a href='https://github.com/talk2frank'>GitHub</a>
            <a href='https://github.com/talk2frank'>
              <img src={icons.github} alt="GitHub" className='App-icon'>
              </img>
            </a>
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
