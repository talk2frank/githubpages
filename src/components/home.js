/**
 * home components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * @version 1.0
 * @see {@link https://github.com/talk2frank/githubpages}
 * @since 1.0
 * 
 */

import images from '../images/imgindex.js';
import { useEffect } from 'react';
import { profileData, employerData, bannertext } from '../data/data.js';

export function Home(){
    return(
    <div>
        <MyBanner string={bannertext}></MyBanner>
        <Profile data={profileData}></Profile>
        <Emplist data={employerData}></Emplist>
        <Contacts></Contacts>
    </div>
)};


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




export default MyBanner