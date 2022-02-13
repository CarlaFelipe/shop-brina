// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import fb from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// const firebase = require("firebase");


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCwWEkIBTVAd1Z3xjC-K73ceZDgzUiXGk8",
  // authDomain: "brinamini-vue.firebaseapp.com",
  // projectId: "brinamini-vue",
  // storageBucket: "brinamini-vue.appspot.com",
  // messagingSenderId: "814139628524",
  // appId: "1:814139628524:web:f129b33c26417ee0017ec9"
  apiKey: "AIzaSyAp03puo_HhyF3z010oae8CiueedQhylbs",
  authDomain: "vue-tienda-brina.firebaseapp.com",
  projectId: "vue-tienda-brina",
  storageBucket: "vue-tienda-brina.appspot.com",
  messagingSenderId: "1033568643369",
  appId: "1:1033568643369:web:eed7b9f34794d40cc0af38"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = firebase.firestore(app);

// export {db};

// Required for side-effects
require("firebase/firestore");
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()

export const db = firebase.firestore();