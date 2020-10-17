import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';
import { firebase, auth, firestore } from './lib/firebase.prod';

render(
  <FirebaseContext.Provider value={{ firebase, auth, firestore }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
