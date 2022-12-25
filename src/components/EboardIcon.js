import React from "react";
import "../style/eboardicon.css"
import linkdenIcon from "../images/linkdenIcon.png";

const EboardIcon = ({name, image, title, linkden, description}) => (
    
    <div className= "Eboard-item"> 

        <img className="Eboard-img" style={{width: "100%", height: "auto"}} src={image}/> 
        <p className="Eboard-name"> {name} </p>
        <p className="Eboard-title"> {title} </p>
        <a className= "Eboard-linkden" href={linkden} target="_blank" rel="noopener noreferrer">
        <img style= {{width: "20%", height: "auto"}} src={linkdenIcon} />
        </a>
        <p className="Eboard-description">
            {description}
        </p>
    </div>
  );


  export default EboardIcon;