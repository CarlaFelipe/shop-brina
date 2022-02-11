// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import fb from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwWEkIBTVAd1Z3xjC-K73ceZDgzUiXGk8",
  authDomain: "brinamini-vue.firebaseapp.com",
  projectId: "brinamini-vue",
  storageBucket: "brinamini-vue.appspot.com",
  messagingSenderId: "814139628524",
  appId: "1:814139628524:web:f129b33c26417ee0017ec9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = firebase.firestore(app);

// export {db};

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()