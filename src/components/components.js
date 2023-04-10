/**
 * Components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * 
 */

import images from '../images/imgindex.js';
import { NavLink } from 'react-router-dom';

//header component
export function MyHeader(){
  const getActive = ({isActive}) => (isActive ? "activeLink":"tablink");

  return(
    <header className='header'>
      <nav>
        <ul className='header_list'>
          <li className='tab'><NavLink className={getActive} to='/githubpages'>Home</NavLink></li>
          <li className='tab'><NavLink className={getActive} to='/employment'>Employment</NavLink></li>        
          <li className='tab'><NavLink className={getActive} to='/education'>Education</NavLink></li>     
          <li className='tab'>
            <button id='themebutton' className='sunbutton' onClick={handleThemeToggle}>
              <img aria-label='theme togglebutton' className='sunimg' src={images.sun} alt='Toggle Theme'></img>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export function MobileNav(){
  return(
    <div className='mobile_nav'>
       <button id='barbutton' className='bars'>
          <img src={images.bars} alt='menu'></img>
      </button>
      <nav className='mobile_navmenu'>
          <div className='movile_navcontent'>
            <a className='mobile_navlink' href='#about'>About</a>
            <a className='mobile_navlink' href='#employment'>Employment</a>
            <div className='mobile_navline'></div>
            <button id='themebutton' className='sunbutton' onClick={handleThemeToggle}>
                <img aria-label='theme togglebutton' className='sunimg2' src={images.sun} alt='Toggle Theme'></img>
            </button>
          </div>
      </nav>
    </div>
  )
}

/**
 * theme toggle functino which
 */
export function themeToggle() {

  //grab any local storage state for theme tester
  const theme = localStorage.getItem('theme');

  //on mount - if theme is thruthy (exists) then add theme to body
  theme && document.body.classList.add('darkmode');

  /* handler now added directly to element
  
  //handler of theme toggle and update local storage
  const handleThemeToggle = () =>{
    document.body.classList.toggle('darkmode');
      if(document.body.classList.contains('darkmode')){
        localStorage.setItem('theme','darkmode');
      }
      else{
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
      }
  };

  //access to theme buttonfeew
  const themetoggleBtn = document.querySelectorAll('#themebutton');

  //add button listener and toggle darkmode and update localstorage as req
  themetoggleBtn.forEach(btn =>{
    btn.addEventListener('click',handleThemeToggle)
  });
  */

};

const handleThemeToggle = () =>{
  document.body.classList.toggle('darkmode');
    if(document.body.classList.contains('darkmode')){
      localStorage.setItem('theme','darkmode');
    }
    else{
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
};


/*javascript to shjow or hide menu add to onclick? - removed as using hover
const clickBars = () => {
  const mobilenav = document.querySelector('.mobile_nav');
    if(mobilenav.style.visibility === 'visible'){
    mobilenav.style.visibility ='hidden';
    } else mobilenav.style.visibility = 'visible';
}
*/


//footer component
export function MyFooter(){
    return(
        <footer className='App-footer'>
        <p className='AppFooter-tagline'>&copy;2023, Frank Kinsey. This work is licensed under a Creative Commons Attribution 4.0 International License&nbsp;</p>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a>
      </footer>
    );
};

export default MyFooter