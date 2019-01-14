import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyANNL7NyuOhR1Wy42qfT5AjhwwfZ7o1rVg',
  authDomain: 'clone-instagram-1aa35.firebaseapp.com',
  databaseURL: 'https://clone-instagram-1aa35.firebaseio.com',
  projectId: 'clone-instagram-1aa35',
  storageBucket: 'clone-instagram-1aa35.appspot.com',
  messagingSenderId: '843412783091',
};

firebase.initializeApp(config);

export const autenticacion = firebase.auth();
