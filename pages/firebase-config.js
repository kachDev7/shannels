import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDRESBTSvodAscRGOLOXmEZdipRKuPc2MY",
    authDomain: "shannels-2e835.firebaseapp.com",
    projectId: "shannels-2e835",
    storageBucket: "shannels-2e835.appspot.com",
    messagingSenderId: "13862121201",
    appId: "1:13862121201:web:521c758cad683c90888350",
    measurementId: "G-ENNJ019PN5"
  };

const app = initializeApp(firebaseConfig);
export const dbase = getFirestore(app);

