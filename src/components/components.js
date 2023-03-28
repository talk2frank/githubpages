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


//<h2 className='AppBanner-subtext'>A site developed in <a href='https://reactjs.org/'>React</a></h2>

export function MyBanner(){
    return(
        <div className="Banner">
        <img src={images.me} className="Banner-profilepic" alt="Profile Pic" />
        <div className='Banner-cont'>
            <h1 className='Banner-header'>Frank Kinsey</h1>
            <body>Agile • Cross-Platform • Interaction Design • Developer</body>
        </div>
      </div>
    )
}


//containers for data items

//profile container
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
                keyskills={data.keyskills}
                bio={data.bio}
              />
            </div>
          );
        })}
      </div>
    </>
  )
}

//employer container
export function EmplistCont(){
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


//component classes for handling items

//component class for profile data
export function Profile({bio, keyskills}){
  if (!keyskills) return <div/>;
  return (
    <div>
      <h2>Profile</h2>
      <h6>{keyskills}</h6>
      <body>{bio}</body>
    </div>
  );
};

//component class for a job
export function Job({job}){
  if (!job) return <div/>;
  return (
    <li className='emplist'>
      <h2>{job.role}</h2>
      <h6>{job.period}</h6>
      <h5>{job.employer}</h5>
      <h6>{job.skills}</h6>
      <body>{job.description}</body>  
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