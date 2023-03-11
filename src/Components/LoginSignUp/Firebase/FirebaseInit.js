import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import firebaseConfig from './firebaseConfig';

export const InitFirebase = () => {
  initializeApp(firebaseConfig);
}

// export const messaging = getMessaging(InitFirebase)