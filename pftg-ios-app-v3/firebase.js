import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// Add other Firebase services you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnMUbQpsCU7gnxfp7OSGrB8xJM58mizpw",
  authDomain: "peachy-s-food-to-go-app.firebaseapp.com",
  databaseURL: "https://peachy-s-food-to-go-app-default-rtdb.firebaseio.com",
  projectId: "peachy-s-food-to-go-app",
  storageBucket: "peachy-s-food-to-go-app.appspot.com",
  messagingSenderId: "1079556604883",
  appId: "1:1079556604883:web:58b44aa27f50cf00d5e526"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

