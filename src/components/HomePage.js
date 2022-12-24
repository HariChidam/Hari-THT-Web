import React from 'react';
import "../style/homepage.css";
import Emma from "../images/EmmaForesi.jpeg";


const handleInterestForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScUuegJbkw1w_U_dkYXA4YPSFpPpQhyC5fUY78FBgOFkY80Xg/viewform?usp=sf_link')
};

function HomePage() {
  return (
    <div>
        <div className='section-1'>
            <h3 className='section-2'>
                Theta Tau @Umich
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
          <img style= {{width: "30%", height: "30%"}} src={Emma}>
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
          <h3> History</h3>
          <div className='history-1'>
            <p> We have been around for years</p>
            <img src= {Emma}> 
            </img>
          </div>
        </div>
    </div>
  );
}

export default HomePage;