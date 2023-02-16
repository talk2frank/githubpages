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
import { profileData } from '../data/data.js';


export function MyBanner(){
    return(
        <div className="App-banner">
        <img src={icons.me} className="AppBanner-profilepic" alt="Profile Pic" />
        <div className='AppBanner-space'>
            <h1 className='AppBanner-header'>Frank Kinsey</h1>
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

/* TODO update to a dynamic data field?
*/
/*
export function Profile(){
    return(
        <body className='App-body'>
          <h2 className='AppBody-header'>
            Welcome to my GitHub Pages site
          </h2>
          <p className='AppBody-text'>
            Welcome to my site which is a work in progress<br></br>
            Ultimately this is an alternative to my GitHub profile page
          </p>
          <span></span>
      </body>
    )
}
*/

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


export function Employment({data:{trainer,course,period,description}}){
  if (!trainer) return <div>WHERE IS IT?</div>;
  return (
    <div>
      <h2 className='AppBody-header'>{trainer}</h2>
      <h5 className='AppBody-text'>{course}</h5>
      <h5 className='AppBody-text'>{period}</h5>
      <h5 className='AppBody-text'>{description}</h5>
    </div>
  );
};

//need to build this?
export function EmploymentContainer(){
  return(
    <h1>testing</h1>
  )
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