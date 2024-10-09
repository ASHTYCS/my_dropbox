import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMMA-JEnz-PfWFBoGSaHWAd9-sYUDWE0M",
  authDomain: "my-drop-box-5e00d.firebaseapp.com",
  projectId: "my-drop-box-5e00d",
  storageBucket: "my-drop-box-5e00d.appspot.com",
  messagingSenderId: "288248597673",
  appId: "1:288248597673:web:27cc0b53c27b79a46c6db8"
})

const firestore = firebaseApp.firestore()

export const db = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => ({ id: doc.id, ...doc.data() }),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()

export default firebaseApp
