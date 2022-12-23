import React from 'react'
import { withFirebase } from '../contexts/FirebaseContext';

  function SignOut({firebase}) {
    const auth = firebase.auth()
    return (
      <button onClick= {() => auth.signOut()}>Sign Out</button>
    )
  }

  export default withFirebase(SignOut);