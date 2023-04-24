/**
 * Employment Components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * 
 */

import {getEducation} from '../data/data.js';

export function Education(){
    return(
    <div>
        <EduList></EduList>
    </div>
    );
};


//employer container
export function EduList(){
  const eddata = getEducation();

    if (!eddata) return <div/>;
    return (
      <section id='education' className='edsection'>
      <h1>Education </h1>
      <ul className='edList'>
        {eddata.map((ed)=>{
          return(
          <EdItem key={ed.course} ed={ed}></EdItem>
          );
        })}
      </ul>
      </section>
    );
  };

  //data holding component for a job
export function EdItem({ed}){
    if (!ed) return <div/>;
    return (
      <li className='card from-right' key={ed.course}>
        <h2>{ed.course}</h2>
        <h5>{ed.period}</h5>
        <h3>{ed.trainer}</h3>
        <p>{ed.description}</p>  
      </li>
    );
  };

  export default Education