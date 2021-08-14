import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrNXGF39E7q7YgkVRx8C-I4SR1YWYvq3o",
    authDomain: "disneyplus-clone-5efb1.firebaseapp.com",
    projectId: "disneyplus-clone-5efb1",
    storageBucket: "disneyplus-clone-5efb1.appspot.com",
    messagingSenderId: "264142125974",
    appId: "1:264142125974:web:81c95be2761801344cbbb7"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };

  export default db;