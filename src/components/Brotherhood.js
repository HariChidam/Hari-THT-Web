import React from 'react';
import "../style/brotherhood.css";
import CommitteeIcon from './CommitteeIcon';
import pd from "../images/profession.jpg";

function Brotherhood(){

  return (

    <div className="brotherhood">

      <div>
          <h3 className='Header-1'> What does it mean to be a Brother of Theta Tau? </h3>
          <p className='subheader-1'> 
          <h1 className='subheader-sub'>Theta Tau is</h1> first and foremost a <b>brotherhood</b> of
            engineers. Being a brother of Theta Tau means that you
            have a community of brilliant men AND women not only on
            campus, but across the country that will see you as
            family. Being a brother means you hold a strong
            connection to a broad network of other engineers - a
            network that permeates through your academic,
            professional, and social life.
          </p>
          <p className='subheader-1'> 
            This network is a support structure that you can rely on
            in the face of struggles that you will face in your
            college career. Being a brother means being part of a
            community that you can depend on beyond the campus and
            throughout your life. Being a brother means building
            deep relationships with a diverse group of people who
            hold vast reservoir of insight and experience in many
            areas of life. The wealth of these experiences enrich
            your life and teach you lessons that you can't learn
            from the classroom or even a job. Being a brother means
            building a college experience that is incredibly unique
            and valuable.
          </p>
          <p className='subheader-1'> 
            When you ask someone why they joined Theta Tau,
            you'll probably get a diverse set of answers. Some
            join because they seek professional growth. Others
            join to meet more engineers in their major and
            across disciplines. Some are attracted to networking
            opportunities, or have heard that Theta Tau is the
            oldest and largest Professional Engineering
            Fraternity in the country.
          </p>
          <p className='subheader-1'> 
            However, when you ask someone why they stayed, and
            continue to participate in the Fraternity, you'll
            likely ever hear one answer. <b>It's the people</b>.
            Among all other things, it's the people, their
            values and their culture that make your college
            experience, and what you will remember years after
            you graduate. And this is especially true with Theta
            Gamma Chapter, which is made of some of the most
            diverse and extraordinary engineers you will ever
            meet. These people are going places.
          </p>
      </div>
        
      <div className='container-2'>
        <h3 className='Header-2'> Committees</h3>
        <p className='subheader-2'> There are many committiees withing Theta Tau that organize and plan all internal and external events. 
            These committiees are what make Theta Tau run and a key aspect is creating a tight night community wihtin the organization.</p>
        <p className='subheader-2'> Check below to see all the committies and a what they do!</p>
      </div>
      
      <div className='com-icons'>
            {/*icons for each committee with Name with image in background / committee head / description */}
            <CommitteeIcon name="Professional Development" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Academic" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Recreational Sports" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Historian" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Bylaw" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Marketing" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Apparel" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Social" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Brotherhood" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="Pledge" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
            <CommitteeIcon name="PFC" image={pd} head="Evan Keare" linkden="https://www.linkedin.com/in/evankeare/" description= "Professionally develop out lovely brothers"/>
      </div>
        
    </div>
  );
}

export default Brotherhood;
