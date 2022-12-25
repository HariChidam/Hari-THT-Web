import React from 'react';
import "../style/homepage.css";
import Emma from "../images/EmmaForesi.jpeg";
import PTR from "../images/PTR.jpg"
import Pillar from './Pillar';
import profesh from "../images/profession.jpg";
import serve from "../images/service.jpg";
import bro from "../images/brohood.jpeg";
import dei from "../images/DEI.png";

const handleInterestForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScUuegJbkw1w_U_dkYXA4YPSFpPpQhyC5fUY78FBgOFkY80Xg/viewform?usp=sf_link')
};

function HomePage() {
  return (
    <div>
        <div className='section-1'>
            <h3 className='section-2'>
                Theta Tau @UMich
            </h3>
            <p className='section-3'> 
                Michigan's Leading Professional Engineering Fraternity
            </p>
            <button className= 'section-4' onClick= {handleInterestForm}>
                Interest Form
            </button>
        </div>

        <br></br>

        <div className= "header-1">
            <h3> Message From the Regent</h3>
        </div>

        <br></br>

        <div className='message'>
          <img style= {{width: "40%", height: "auto"}} src={Emma}>
          </img> 

          <p className = "message-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Diam maecenas ultricies mi eget. Tempor orci dapibus ultrices in. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Fames ac turpis egestas maecenas. Mattis aliquam faucibus purus in. Amet cursus sit amet dictum sit amet. Quis auctor elit sed vulputate mi sit. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Euismod quis viverra nibh cras.Massa id neque aliquam vestibulum morbi blandit cursus risus at.
              <br></br>
              <br></br>
              Mauris a diam maecenas sed enim ut sem viverra aliquet. Sed ullamcorper morbi tincidunt ornare. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Proin sagittis nisl rhoncus mattis. Volutpat maecenas volutpat blandit aliquam etiam erat. Magnis dis parturient montes nascetur ridiculus mus. Posuere ac ut consequat semper viverra. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Vitae semper quis lectus nulla.
              <br></br>
              <br></br>
              In nibh mauris cursus mattis molestie a iaculis at erat. Ultricies mi quis hendrerit dolor magna. Porttitor massa id neque aliquam vestibulum morbi. Cursus mattis molestie a iaculis at. Viverra orci sagittis eu volutpat. A cras semper auctor neque. Tortor aliquam nulla facilisi cras. Bibendum at varius vel pharetra vel turpis nunc. Habitasse platea dictumst quisque sagittis purus sit. Accumsan in nisl nisi scelerisque. Fusce ut placerat orci nulla pellentesque.
              <br></br>
              <br></br>
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Urna duis convallis convallis tellus id interdum velit laoreet. Semper risus in hendrerit gravida rutrum quisque non. Non tellus orci ac auctor. Metus dictum at tempor commodo ullamcorper a. Nullam ac tortor vitae purus. Nunc mattis enim ut tellus elementum. Tellus in metus vulputate eu scelerisque felis. Sed augue lacus viverra vitae congue eu consequat. Bibendum est ultricies integer quis. Urna duis convallis convallis tellus id interdum. Nec tincidunt praesent semper feugiat. Sed id semper risus in. Pellentesque sit amet porttitor eget dolor morbi non. At tellus at urna condimentum mattis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Semper auctor neque vitae tempus quam pellentesque. Turpis nunc eget lorem dolor sed viverra. Hendrerit gravida rutrum quisque non.
              <br></br>
              <br></br>
              Best,
              <br></br>
              Emma Foresi
              <br></br>
              Regent - Chi Beta Class of '24
          </p>
          
        </div>

        

        <div className='history'>
          <div className='history-2'>
          <h3 className='history-1'> History</h3>
          <p className='history-message'> Theta Tau (THT) is a National Co-ed Professional Engineering Fraternity. It was founded on October 15th, 1904 at the Univeristy of Minnesota. Today, the Theta Tau National Chapter is comprised of 113 Collegiate and Alumni Chapters across the country. Our chapter, Theta Gamma was founded in 1999 and has been the leading professional engineering fraternity since.</p>
          </div>
          <img src= {PTR} style= {{width: "30%", height: "30%"}}> 
          </img>
        </div>
        <div className='pillars'>
          <h3 className='pillars-header'>
            Pillars Of Theta Tau
          </h3>
          <div className='pillars-container'>
            <Pillar name="Service" image ={serve} description = "Members of Theta Tau make an impact on the world around them through service and philanthropic acts."/>
            <Pillar name="Brotherhood" image ={bro} description = "Members of Theta Tau make friendships and connections that they will maintain for the rest of their lives."/>
            <Pillar name="Profession" image ={profesh} description = "Members of Theta Tau are prepared for the job market, networking, and applying their learning in their work."/>
            <Pillar name="DEI" image ={dei} description = "Members of Theta Tau will be exposed to different perspectives and be a part of an encouraging and inclusive communtiy."/>
        </div>
        </div>
    </div>
  );
}

export default HomePage;