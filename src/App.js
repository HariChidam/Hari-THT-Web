import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Brotherhood from "./components/Brotherhood";
import NonMembers from "./components/NonMembers";
import Rush from "./components/Rush";
import Alumni from "./components/Alumni";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";
import './style/App.css';
import HomePage from "./components/HomePage";
import firebase from 'firebase/compat/app';
import FirebaseContext from "./contexts/FirebaseContext";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {useAuthState} from 'react-firebase-hooks/auth'
import Profile from "./components/Profile";

firebase.initializeApp({
  apiKey: "AIzaSyCIPj-Xpk2LbE-EKOkPkg-z-N5y7ZeEmb4",
  authDomain: "tht-website-hari.firebaseapp.com",
  projectId: "tht-website-hari",
  storageBucket: "tht-website-hari.appspot.com",
  messagingSenderId: "1015040403383",
  appId: "1:1015040403383:web:664116954b41302a5faa32",
  measurementId: "G-08L70MDT71"
})

 const auth = firebase.auth()
 


function App() {

  const [user] = useAuthState(auth);

  return (
    <FirebaseContext.Provider value={firebase}>
      <React.Fragment>
          <Router>
            <div className="content-wrapper" >
            <Navbar /> 
                <Routes>
                  
                  <Route path="/homepage" element={<HomePage />}/>

                  <Route path="/leadership" element={<Leadership />}/>

                  <Route path="/brotherhood" element={user ? <Brotherhood/> : <NonMembers/>}/>
                  
                  <Route path="/rush" element={<Rush />}/>
                  
                  <Route path="/faq" element={<FAQ/>}/>

                  <Route path="/alumni" element={<Alumni/>}/>

                  <Route path="/profile" element={<Profile/>}/>

                </Routes>
              <Footer/>
            </div>
          </Router>
      </React.Fragment>
    </FirebaseContext.Provider>
  );
}

export default App;
