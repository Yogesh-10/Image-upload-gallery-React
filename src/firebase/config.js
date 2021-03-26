import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBSw1NMgRjX4oJtSBiO1ghzU09Q5vO7AI4',
	authDomain: 'image-gallery-yogesh.firebaseapp.com',
	projectId: 'image-gallery-yogesh',
	storageBucket: 'image-gallery-yogesh.appspot.com',
	messagingSenderId: '778829803078',
	appId: '1:778829803078:web:89caf2f731942a85926447',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const firestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { storage, firestore, timeStamp }
