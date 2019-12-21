import firebase from 'firebase';



let Config = {
    apiKey: "AIzaSyDRgYDofdrqDKVROMW1cXsEht41TCfdQjQ",
    authDomain: "fireworks-b4b26.firebaseapp.com",
    databaseURL: "https://fireworks-b4b26.firebaseio.com",
    projectId: "fireworks-b4b26",
    storageBucket: "fireworks-b4b26.appspot.com",
    messagingSenderId: "858666908632",
    appId: "1:858666908632:web:7297a3dc681a59e2"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(Config);
}

export default firebase