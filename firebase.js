import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVjtzcEkWwCMQm8u0OXL7VL3V1nnERssE",
    authDomain: "whatsapp-2-644d9.firebaseapp.com",
    projectId: "whatsapp-2-644d9",
    storageBucket: "whatsapp-2-644d9.appspot.com",
    messagingSenderId: "265440614148",
    appId: "1:265440614148:web:17bf8dc98bb80f5f2a2251"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };