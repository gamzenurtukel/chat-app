import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCVEbTTMrk1CiUp08jkI5b1teGcwXC8RMo',
  authDomain: 'chat-app-d2b69.firebaseapp.com',
  projectId: 'chat-app-d2b69',
  storageBucket: 'chat-app-d2b69.appspot.com',
  messagingSenderId: '113922878716',
  appId: '1:113922878716:web:ab53356dd2e9d573877b79',
  measurementId: 'G-RH1TR7J1G1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
