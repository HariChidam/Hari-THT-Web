import React from "react";
import "../style/icons.css";

const Icon = ({ image, name, role, pc, company, companyLink, link }) => (
    
    <div className= "icon-item"> 
        
        <a className = "icon-name" href={link} target="_blank" rel="noopener noreferrer">
        <p> {name} </p>
        </a>
        <a>
        <img style= {{width: "50%", height: "50%"}} src={image} alt={role}/>
        </a>
        <a>
            <p> Current role: {role} </p>
        </a>
        <a className= "icon-company" href={companyLink} target="_blank" rel="noopener noreferrer">
        <p> Company: {company}</p>
        </a>
        <a>
        <p> Pledge Class: {pc} </p>
        </a>
        
    </div>
    
    
  );


  export default Icon;