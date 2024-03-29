import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { collection, CollectionReference, DocumentData, getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAsI2qLoPZpcA5QFp1Dnz8TiNbrCqr8XNk",
  authDomain: "digital-dahoam.firebaseapp.com",
  projectId: "digital-dahoam",
  storageBucket: "digital-dahoam.appspot.com",
  messagingSenderId: "532207686252",
  appId: "1:532207686252:web:5f455be6b61e787d11fe49",
  measurementId: "G-RB98YSRV64",
  databaseURL: "https://digital-dahoam-default-rtdb.europe-west1.firebasedatabase.app/",
}

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const realtimeDB = getDatabase(app)
export const auth = getAuth(app)
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

export const userCollection = createCollection<User>("users")
export const clubCollection = createCollection<Club>("clubs")
export const postCollection = createCollection<Post>("posts")
