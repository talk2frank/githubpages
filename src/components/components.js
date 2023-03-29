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


export function MyHeader(){
  return(
    <header className='header'>
      <nav>
        <ul className='header_list'>
          <li className='tab'><a className='tablink' href='#employment'>Employment</a></li>
          <li className='tab'><a className='tablink' href='#bio'>Bio</a></li>
          <li className='tab'><a className='tablink' href='#contact'>Contact</a></li>
          <li className='tab'>
            <button className='sunbutton'>
              <img className='sunimg' src={images.sun} alt='Toggle Theme'></img>
            </button>
          </li>
        </ul>
        <button className='bars'>
          <img src={images.bars} alt='menu'></img>
        </button>
      </nav>
    </header>
  )
}


export function MyBanner(){
    return(
      <div className="Banner">
        <img src={images.me} className="Banner-profilepic" alt="Profile Pic" />
        <div className='Banner-cont'>
            <h1 className='Banner-header'>Frank Kinsey</h1>
            <p>Agile • Cross-Platform • Interaction Design • Developer</p>
        </div>
      </div>
    )
}


//cards for data items

//profile container
export function Profile(){
  return(
      <article id='bio' className="profile">
        {profileData.map((data, key) => {
          return (
            <div key={key}>
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
      <h1>Profile</h1>
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