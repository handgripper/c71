import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC2T8vVallT5RpoX3irGpsnWS15psBwzaw",
    authDomain: "e---ride-stage-4.firebaseapp.com",
    projectId: "e---ride-stage-4",
    storageBucket: "e---ride-stage-4.appspot.com",
    messagingSenderId: "118788761725",
    appId: "1:118788761725:web:26124f5acc64d7053ea914"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
