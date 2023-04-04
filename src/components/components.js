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
import { useEffect } from 'react';

//header component
export function MyHeader(){
  return(
    <header className='header'>
      <nav>
        <ul className='header_list'>
          <li className='tab'><a className='tablink' href='#about'>About</a></li>
          <li className='tab'><a className='tablink' href='#employment'>Employment</a></li>       
          <li className='tab'><a className='tablink' href='#contact'>Contact</a></li>
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
            <a className='mobile_navlink' href='#contact'>Contact</a>
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

export function MyBanner({string}){
    return(
      <div className="Banner">
        <div className='Banner-content'>
          <div className='Banner-header'>
            <img src={images.me} className="Banner-profilepic" alt="Profile Pic" />
            <h1 className='Banner-title'>Frank Kinsey</h1>
          </div>
        <p className='Banner-text'>{string}</p>
        </div>
      </div>
    )
}


//cards for data

//profile container with lazy loading image (3 classes!)
export function Profile({data}){

  useEffect(() => {
    lazyImages();
  },[]);
  
  if (!data) return <div/>;
  return(
      <article id='about' className="profile">
        <img 
          className='workimage lazy loading'
          src={'https://via.placeholder.com/606x461'}
          data-src={images.workimg} 
          alt='workimage'>
        </img>
        {data.map((item, key) => {
          return (
            <div key={key}>
              <h1>About Me</h1>
              <ProfileData
                key={key}
                keyskills={item.keyskills}
                bio={item.bio}
              />
            </div>
          );
        })}
      </article>
  )
}

/* Observer function to lazy load images
  to modify observer if needed - in second arg of IntersectionObserver
  //observe all pag
  root: null,
  //no need to expand observable
  rootMargin: '0px',
  //how much needs to observe before acting - instant is 0
  threshold: 0, feef
*/
//this doesn't work in react - needs new approach
export function lazyImages(){
  //select any images with class of lazy -- 
  const lazyimages = document.querySelectorAll('.lazy');
  //int observer object takes items and itself
  const observer = new IntersectionObserver((items,observer) =>{
    //checks each item, if intersecting visisble screen
    items.forEach(item=>{
      if(item.isIntersecting){
      let img = item.target
      //take src from data-src attribute and add to src (load image)
      img.src = img.dataset.src;
      //change from loading to loaded css
      img.classList.remove('loading');
      img.classList.add('loaded');
      //unobserve item (dont want to reload every time)
      observer.unobserve(img);
      }
    });
  });

  //finally add the observer to each img and
  lazyimages.forEach((img)=>{
    observer.observe(img);
  });
}



//employer container
export function Emplist({data}){
  if (!data) return <div/>;
  return (
    <section id='employment' className='empsection'>
    <h1>Employment History</h1>
    <ul className='emplist'>
      {data.map((job)=>{
        return(
        <Job key={job.role} job={job}></Job>
        );
      })}
    </ul>
    </section>
  );
};


//component classes for handling items

//data holding component for profile data
export function ProfileData({bio, keyskills}){
  if (!keyskills) return <div/>;
  return (
    <section>
      <h4>{keyskills}</h4>
      <p>{bio}</p>
    </section>
  );
};

//data holding component for a job
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

//class for a contact object
class Contact{
  constructor(href,src,alt){
    this.href = href;
    this.src = src;
    this.alt = alt;
  }
}

export function Contacts(){
  const email = new Contact('mailto:frankkinsey1@outlook.com',images.email,'Email');
  const linkedin = new Contact('https://www.linkedin.com/in/frank-kinsey/',images.linkedin,'Linkedin');
  const github = new Contact('https://github.com/talk2frank',images.github,'GitHub');
  
  return(
      <article id='contact' className='contacts'>
        <h1>Contact Information</h1>
        <ul className="contactlist">
          <ContactItem link={email}></ContactItem>
          <ContactItem link={linkedin}></ContactItem>
          <ContactItem link={github}></ContactItem>
        </ul>
      </article>
  );
};

export function ContactItem({link}){
  return(
    <div className='contactlistitem'>
    <a href={link.href}>
            <img src={link.src} alt={link.alt} className='App-icon'></img>
    </a>
    <a href={link.href}>{link.alt}</a>
    </div>
  );
};


//footer component
export function MyFooter(){
    return(
        <footer className='App-footer'>
        <p className='AppFooter-tagline'>© 2023, Frank Kinsey. This work is licensed under a Creative Commons Attribution 4.0 International License&nbsp;</p>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a>
      </footer>
    );
};

export default MyFooter