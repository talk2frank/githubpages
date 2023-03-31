/**
 * Components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * @version 1.0
 * @see {@link https://github.com/talk2frank/githubpages}
 * @since 1.0
 * 
 */

import images from '../images/imgindex.js';
import { employerData, profileData } from '../data/data.js';

//header component
export function MyHeader(){
  return(
    <header className='header'>
      <nav>
        <ul className='header_list'>
          <li className='tab'><a className='tablink' href='#bio'>About</a></li>
          <li className='tab'><a className='tablink' href='#employment'>Employment</a></li>       
          <li className='tab'><a className='tablink' href='mailto:frankkinsey1@outlook.com?subject=Github Profile Query'>Contact</a></li>
          <li className='tab'>
            <button id='themebutton' className='sunbutton'>
              <img className='sunimg' src={images.sun} alt='Toggle Theme'></img>
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
            <a className='mobile_navlink' href='#bio'>About</a>
            <a className='mobile_navlink' href='#employment'>Employment</a>
            <a className='mobile_navlink' href='mailto:frankkinsey1@outlook.com?subject=Github Profile Query'>Contact</a>
            <div className='mobile_navline'></div>
            <button id='themebutton' className='sunbutton'>
                <img className='sunimg2' src={images.sun} alt='Toggle Theme'></img>
            </button>
          </div>
      </nav>
    </div>
  )
}


export const themeToggle = () =>{

  //grab any local storage state for theme
  const theme = localStorage.getItem('theme');

  //on mount - if theme is thruthy (exists) then add theme to body
  theme && document.body.classList.add('darkmode');

  //handler of theme toggle and update local storage dwqfq
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

};


/*javascript to shjow or hide menu - removed
const clickBars = () => {
  const mobilenav = document.querySelector('.mobile_nav');
    if(mobilenav.style.visibility === 'visible'){
    mobilenav.style.visibility ='hidden';
    } else mobilenav.style.visibility = 'visible';
}
*/
  



export function MyBanner(){
    return(
      <div className="Banner">
        <div className='Banner-content'>
        <div className='Banner-header'>
          <img src={images.me} className="Banner-profilepic" alt="Profile Pic" />
          <h1 className='Banner-title'>Frank Kinsey</h1>
        </div>
        <p className='Banner-text'>Agile Developer • Full-Stack • Serverless • Cross-Platform • Business Analysis • User Design • Interaction Design</p>
        </div>
      </div>
    )
}


//cards for data item

//profile container
export function Profile(){
  return(
      <article id='bio' className="profile">
        {profileData.map((data, key) => {
          return (
            <div key={key}>
              <img className='workimage' src={images.workimg} alt='workimage'></img>
              <h1>About Me</h1>
              <ProfileData
                key={key}
                keyskills={data.keyskills}
                bio={data.bio}
              />
            </div>
          );
        })}
      </article>
  )
}

//employer container
export function Emplist(){
  if (!employerData) return <div/>;
  return (
    <section id='employment' className='empsection'>
    <h1>Employment History</h1>
    <ul className='emplist'>
      {employerData.map((job)=>{
        return(
        <Job key={job.role} job={job}></Job>
        );
      })}
    </ul>
    </section>
  );
};


//component classes for handling items

//component class for profile data
export function ProfileData({bio, keyskills}){
  if (!keyskills) return <div/>;
  return (
    <section>
      <h4>{keyskills}</h4>
      <p>{bio}</p>
    </section>
  );
};

//component class for a job
export function Job({job}){
  if (!job) return <div/>;
  return (
    <li className='emplistitem' key={job.role}>
      <h2>{job.role}</h2>
      <h5>{job.period}</h5>
      <h3>{job.employer}</h3>
      <h4>{job.skills}</h4>
      <p>{job.description}</p>  
    </li>
  );
};



//footer component
export function MyFooter(){
    return(
        <footer className='App-footer'>
        <a href='https://www.linkedin.com/in/frank-kinsey/'>
          <img src={images.linkedin} alt="LinkedIn" className='App-icon'></img>
        </a>
        <p className='AppFooter-tagline'>© 2023, Frank Kinsey</p>
        <a href='https://github.com/talk2frank'>
              <img src={images.github} alt="GitHub" className='App-icon'></img>
        </a>
      </footer>
    )
}

export default MyFooter