import React from "react";
import "../style/pillar.css"

const Pillar = ({name, image, description}) => (
    
    <div className= "pillar-item"> 
        <p className="pillar-title"> {name} </p>
        <a className= "pillar-img">
        <img style= {{width: "100%", height: "100%"}} src={image}/>
        </a>
        <p className="pillar-description">
            {description}
        </p>
    </div>
    
    
  );


  export default Pillar;