import React from "react";
import "../style/committeeicon.css"
import linkdenIcon from "../images/linkdenIcon.png";

const CommitteeIcon = ({name, image, head, linkden , description}) => (
    
    <div className= "Com-item"> 
        <div className="com-img" style={{ backgroundImage: `url(${image})`}} >
            <p className="com-name"> {name} </p>
        </div>
        <div className="Com-head-1">
            <p className="com-head">  Committee Head: {head}</p>
            <a href={linkden} target="_blank" rel="noopener noreferrer">
            <img style= {{width: "10%", height: "auto"}} src={linkdenIcon} />
            </a>
        </div>
        <div>
            <p className="com-description">
                {description}
            </p>
        </div>
    </div>
  );


  export default CommitteeIcon;