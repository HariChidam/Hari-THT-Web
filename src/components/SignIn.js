import React from 'react'
import firebase from 'firebase/compat/app';
import { withFirebase } from '../contexts/FirebaseContext';

const auth = firebase.auth()

function SignIn() {
    
    const useSignInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <button onClick={useSignInWithGoogle}>Sign in with Google</button>
    )
  }

  export default withFirebase(SignIn);