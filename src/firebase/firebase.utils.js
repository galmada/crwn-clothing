import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAb3DNzX5fv6EHd9Rl8o3hd50wr5v20lVM",
    authDomain: "crwn-db-be138.firebaseapp.com",
    databaseURL: "https://crwn-db-be138.firebaseio.com",
    projectId: "crwn-db-be138",
    storageBucket: "crwn-db-be138.appspot.com",
    messagingSenderId: "309084100612",
    appId: "1:309084100612:web:831043866a5bddf4237d51",
    measurementId: "G-MKFMHDHLWJ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;