import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyAUPW9YQj9QwVDu3AU0IxBlNK7Gwg_ofqs",
  authDomain: "shdev-9478d.firebaseapp.com",
  projectId: "shdev-9478d",
  storageBucket: "shdev-9478d.appspot.com",
  messagingSenderId: "77717233192",
  appId: "1:77717233192:web:6c0e646595c4509940df1d"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
