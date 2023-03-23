/**
 * Components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * @version 1.0
 * @see {@link https://github.com/talk2frank/githubpages}
 * @since 1.0
 * 
 */

import icons from '../images/imgindex.js';
import { employerData, profileData } from '../data/data.js';



export function MyBanner(){
    return(
        <div className="App-banner">
        <img src={icons.me} className="AppBanner-profilepic" alt="Profile Pic" />
        <div className='AppBanner-space'>
            <h1 className='AppBanner-header'>Frank Kinsey</h1>
            <body className='AppBody-text'>Welcome to my site</body>
            <h2 className='AppBanner-subtext'> 
            Site developed in <a href='https://reactjs.org/'>React</a>
            <a href='https://reactjs.org/'>
            <img src={icons.react} alt="React" className='App-icon'></img></a>
            under construction
            </h2>
        </div>
      </div>
    )
}

export function Profile({ name, bio, keyskills}){
  if (!name) return <div />;
  return (
    <div>
      <h2 className='AppBody-header'>{name}</h2>
      <h5 className='AppBody-text'>{bio}</h5>
      <h5 className='AppBody-text'>{keyskills}</h5>  
    </div>
  );
};

export function ProfileContainer(){
  return(
    <>
      <div className="profilecontainer">
        {profileData.map((data, key) => {
          return (
            <div key={key}>
              <Profile
                key={key}
                name={data.name}
                bio={data.bio}
                keyskills={data.keyskills}
              />
            </div>
          );
        })}
      </div>
    </>
  )
}

//class for a job
export function Job({job}){
  if (!job) return <div/>;
  return (
    <li className='emplist'>
      <h4 className='AppBody-header'>{job.role}</h4>
      <h6 className='AppBody-text'>{job.employer}</h6>
      <h5 className='AppBody-text'>{job.period}</h5>
      <h5 className='AppBody-text'>{job.skills}</h5>
      <body className='AppBody-text'>{job.description}</body>  
    </li>
  );
};

//list of jobs why no worky?
export function Jobs(){
  if (!employerData) return <div/>;
  return (
    <ul className='emplistcont'>
      {employerData.map((job,i)=>{
        return(
        <Job  job={job}></Job>
        );
      })}
    </ul>
  );
};


export function MyFooter(){
    return(
        <footer className='App-footer'>
        <a href='https://www.linkedin.com/in/frank-kinsey/'>
          <img src={icons.linkedin} alt="LinkedIn" className='App-icon'></img>
        </a>
        <p className='AppFooter-tagline'>Site created by Frank Kinsey 2023</p>
        <a href='https://github.com/talk2frank'>
              <img src={icons.github} alt="GitHub" className='App-icon'></img>
        </a>
      </footer>
    )
}

export default MyFooter