import React from 'react';
import "../style/brotherhood.css";
import CommitteeIcon from './CommitteeIcon';
import pd from "../images/profession.jpg";

function Brotherhood(){

  return (

    <div className="brotherhood">

      <div className='Header-1'>
          <h3> What does it mean to be a brother </h3>
          <p> description</p>
      </div>
      <div className='Header-2'>
          <h3> Committees</h3>
          <p> description</p>
      </div>
      <div className='com-icons'>
            {/*icons for each committee with Name with image in background / committee head / description */}
            <CommitteeIcon name="Professional Development" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Academic" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Recreational Sports" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Historian" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Bylaw" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Marketing" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Apparel" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Social" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Brotherhood" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Pledge" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="PFC" image={pd} head="Evan Keare" description= "Professionally develop out lovely brothers"/>
      </div>
        
    </div>
  );
}

export default Brotherhood;
