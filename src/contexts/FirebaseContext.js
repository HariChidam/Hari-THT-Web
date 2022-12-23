import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIPj-Xpk2LbE-EKOkPkg-z-N5y7ZeEmb4",
  authDomain: "tht-website-hari.firebaseapp.com",
  projectId: "tht-website-hari",
  storageBucket: "tht-website-hari.appspot.com",
  messagingSenderId: "1015040403383",
  appId: "1:1015040403383:web:664116954b41302a5faa32",
  measurementId: "G-08L70MDT71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;