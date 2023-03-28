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
          <li><a href='#about'>About</a></li>
          <li><a href='#contac'>Contact</a></li>
        </ul>
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
      <article className="profile">
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
    <ul className='emplist'>
      {employerData.map((job)=>{
        return(
        <Job key={job.role} job={job}></Job>
        );
      })}
    </ul>
  );
};


//component classes for handling items

//component class for profile data
export function ProfileData({bio, keyskills}){
  if (!keyskills) return <div/>;
  return (
    <div>
      <h2>Profile</h2>
      <h6>{keyskills}</h6>
      <p>{bio}</p>
    </div>
  );
};

//component class for a job
export function Job({job}){
  if (!job) return <div/>;
  return (
    <li className='emplistitem' key={job.role}>
      <h2>{job.role}</h2>
      <h6>{job.period}</h6>
      <h5>{job.employer}</h5>
      <h6>{job.skills}</h6>
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