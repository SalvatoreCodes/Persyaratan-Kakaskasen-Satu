import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwu5NZUnfMYYi0KJPl0lI1g4r2onbrO5E",
  authDomain: "pelayanan-kakaskasen-satu.firebaseapp.com",
  projectId: "pelayanan-kakaskasen-satu",
  storageBucket: "pelayanan-kakaskasen-satu.appspot.com",
  messagingSenderId: "882315547297",
  appId: "1:882315547297:web:5bd62ac04b51a814ba96e0",
  measurementId: "G-5RSCCK41F3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
