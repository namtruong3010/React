import firebase from 'firebase';
import 'firebase/storage'
const config = {
    apiKey: "AIzaSyBHPrN9e6TE-z7W9WeLNxgqWniPyRRb2Tg",
    authDomain: "amessnt-6c21a.firebaseapp.com",
    databaseURL: "https://amessnt-6c21a.firebaseio.com",
    projectId: "amessnt-6c21a",
    storageBucket: "amessnt-6c21a.appspot.com",
    messagingSenderId: "260380544878",
    appId: "1:260380544878:web:dd590fa2bbea046302fb7f",
    measurementId: "G-XF5SXTJ3B4"
  };
  firebase.initializeApp(config)

  export default firebase