import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import initializeApp from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyDl_PzWFU0xZOP8Xs8L3fhalq4-g99xvWo",
    authDomain: "netflix-4f49f.firebaseapp.com",
    projectId: "netflix-4f49f",
    storageBucket: "netflix-4f49f.appspot.com",
    messagingSenderId: "897742596274",
    appId: "1:897742596274:web:d3c19058b0c30e60e001ab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;