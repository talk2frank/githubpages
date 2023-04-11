/**
 * Education Components for FK github page
 * @description Provides components for application
 * @author Frank Kinsey
 * 
 */

import { Outlet,useParams, NavLink } from "react-router-dom";
import { getEduItem, getEducation } from "../data/data";


export function Education(){
    const education = getEducation();
    if(!education) return(<div></div>);
    return(
        <div>
            <ul>
                {education.map((eduitem)=>(
                <li key={eduitem.course}>
                </li>
                ))}
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export function EduItem(){
   const {id} = useParams();
    const eduitem = getEduItem(id);

    console.log(useParams);

    return(
        <div>
            <h1>{eduitem.course}</h1>
            <h3>{eduitem.trainer}</h3>
            <p>{eduitem.description}</p>
        </div>
    )
}


export default Education;
