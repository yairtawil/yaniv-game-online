import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuXJfwaJuwIK8UptM9t41MlKuDHg_hMJo',
  authDomain: 'yaniv-game-online.firebaseapp.com',
  projectId: 'yaniv-game-online',
  storageBucket: 'yaniv-game-online.appspot.com',
  messagingSenderId: '230373683057',
  appId: '1:230373683057:web:fb7f5966c6a6fa052ad0d0',
  measurementId: 'G-M2K055XTQ4',
};


let app

export const initFirebase = async () => {
  app = await initializeApp(firebaseConfig);
}

export { app };
