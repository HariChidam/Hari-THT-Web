import React from 'react';
import "../style/leadership.css";
import EboardIcon from './EboardIcon';
import Emma from "../images/EmmaForesi.jpeg";
import Katie from "../images/KatieBailey.jpeg";
import Hari from "../images/Hari.JPG";
import Casey from "../images/Casey.jpeg";
import Charlie from "../images/Charlie.jpg";

function Leadership(){

  return (

    <div className="leadership">
     
        <h3 className='header'>
            Executive Board
        </h3>
        <div className="row-1">
            <EboardIcon name= "Emma Foresi" image={Emma} title="Regent" linkden="https://www.linkedin.com/in/emma-foresi/" description="Our Fearless Leader"/>
        </div>
        <div className="row-2">
            <EboardIcon name= "Charlie Cappelletti" image={Charlie} title="Vice-Regent" linkden="https://www.linkedin.com/in/charlie-cappelletti/" description="Minions"/>
            <EboardIcon name= "Hariharan Chidambaram" image={Hari} title="Scribe" linkden="https://www.linkedin.com/in/hariharan-chidambaram/" description="Minions"/>
        </div>
        <div className="row-3">
            <EboardIcon name= "Casey Kousoulas" image={Casey} title="Treasurer" linkden="https://www.linkedin.com/in/casey-kousoulas/" description="Minions"/>
            <EboardIcon name= "Katie Bailey" image={Katie} title="Corresponding Secretary" linkden="https://www.linkedin.com/in/katherine-m-bailey/" description="Minions"/>
        </div>
    </div>
  );
}

export default Leadership;