import firebase from '@firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD_VJgPnMP60tpHU5ISoGZPTE-e80kDvVo",
    authDomain: "brina-shop.firebaseapp.com",
    projectId: "brina-shop",
    storageBucket: "brina-shop.appspot.com",
    messagingSenderId: "31400710480",
    appId: "1:31400710480:web:23dac85effb151e1649c55",
    measurementId: "G-SPZEDKVR8K"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export {firebase}