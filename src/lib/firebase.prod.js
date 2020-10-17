import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBnDBdg-zeIT7yul_W5QlXnu0Gxo7yGb8w',
  authDomain: 'netflix-a13b7.firebaseapp.com',
  databaseURL: 'https://netflix-a13b7.firebaseio.com',
  projectId: 'netflix-a13b7',
  storageBucket: 'netflix-a13b7.appspot.com',
  messagingSenderId: '718977122691',
  appId: '1:718977122691:web:7298ca4bc600ef6d9ab6b6',
};

const firebase = Firebase.initializeApp(config);
const firestore = Firebase.firestore();
const auth = Firebase.auth();

export { firebase, firestore, auth };
