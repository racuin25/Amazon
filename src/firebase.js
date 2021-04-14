import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDK1hGJ_ZRgKxqbCUFAjI-vF4jjzMDYrw8",
    authDomain: "renan-8052e.firebaseapp.com",
    databaseURL: "https://renan-8052e-default-rtdb.firebaseio.com",
    projectId: "renan-8052e",
    storageBucket: "renan-8052e.appspot.com",
    messagingSenderId: "311618615281",
    appId: "1:311618615281:web:14e91170cdbb81847ef650",
    measurementId: "G-H9KWKEG9EK"
});

const auth = firebase.auth();

export { auth };