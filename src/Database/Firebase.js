import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB-07IihGd3Dyzei1iRY89Voth5OLImK84',
  authDomain: 'eshop-19ed9.firebaseapp.com',
  projectId: 'eshop-19ed9',
  storageBucket: 'eshop-19ed9.appspot.com',
  messagingSenderId: '799318243790',
  appId: '1:799318243790:web:55b7ba124906dd7a49939f',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
