/**
 * Employment Components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * 
 */

import { employerData} from '../data/data.js';

export function Employment(){
    return(
    <div>
        <Emplist data={employerData}></Emplist>
    </div>
    );
};


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

  export default Employment