/**
 * home components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 */

import images from '../images/imgindex.js';
import { profileData, bannertext } from '../data/data.js';

export function Home(){
    return(
    <div>
        <MyBanner string={bannertext}></MyBanner>
        <hr></hr>
        <Profile data={profileData}></Profile>
        
    </div>
)};


export function MyBanner({string}){
    return(
      <div className="Banner">
        <div className='Banner-content'>
          <div className='Banner-header'>
            <img src={images.me} className="Banner-profilepic" alt="Frank's Profile" />
            <h1 className='Banner-title'>Frank Kinsey</h1>
          </div>
        <p className='Banner-text'>{string}</p>
        <Contacts></Contacts>
        </div>
      </div>
    )
}


//cards for data

//profile container with lazy loading image (3 classes!)
export function Profile({data}){

  
  if (!data) return <div/>;
  return(
      <article id='about' className="profile">
        <img 
          className='workimage lazy loading'
          src={'https://via.placeholder.com/606x461'}
          data-src={images.workimg} 
          alt='a work desk'>
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
};

/* Observer function to lazy load images
  to modify observer if needed - in second arg of IntersectionObserver
  //observe all pag
  root: null,
  //no need to expand observable
  rootMargin: '0px',
  //how much needs to observe before acting - instant is 0
  threshold: 0, feef
*/

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




export default Home