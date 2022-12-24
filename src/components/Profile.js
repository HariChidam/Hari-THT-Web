import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

function Profile() {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [position, setPosition] = useState('');
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  // Initialize Firebase Database
  const firestore = firebase.firestore();

  // Sign in with Google
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const handleSignOut = () => {
     auth.signOut();
  };

  // Create user profile
  const handleCreateProfile = () => {
    const userId = user.uid;
    firestore.collection('users').doc(userId).get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setName(data.name);
        setGrade(data.grade);
        setPosition(data.position);
      } else {
        firestore.collection('users').doc(userId).set({
          name,
          grade,
          position
        });
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  };

  const handleUpdateProfile = () => {
    const userId = user.uid;
    firestore.collection('users').doc(userId).update({
      name,
      grade,
      position
    });
  };


  return (
    <div>
      {user ? (
        <div>
          Welcome, {user.displayName}
        </div>
      ) : (
        <div> Sign in and make a Profile!</div>
      )}
      {user && (
        <form>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Grade:
            <input
              type="text"
              value={grade}
              onChange={(event) => setGrade(event.target.value)}
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              value={position}
              onChange={(event) => setPosition(event.target.value)}
            />
          </label>
        </form>
      )}
      {user ? (
        <div>
          <button onClick={handleCreateProfile}>Create Profile</button>
          <button onClick={handleUpdateProfile}>Update Profile</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Profile;