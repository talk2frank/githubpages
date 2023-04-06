import { Outlet,useParams } from "react-router-dom";
import { getEduItem, getEducation } from "../data/data";

import { Link } from "react-router-dom";

export function Education(){
    const education = getEducation();
    return(
        <div>
            <ul>
                {education.map((eduitem)=>(
                <li key={eduitem.course}>
                    <Link to={eduitem.course}>{eduitem.course}</Link>
                    <p>{eduitem.trainer}</p>
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
