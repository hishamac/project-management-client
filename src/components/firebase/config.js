var firebase = require("firebase/app");
// var firebasedb = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyCCCsaS6LkSXXJUGznFeVLB2pKJ0VKjWQ8",
  authDomain: "project-management-f341a.firebaseapp.com",
  databaseURL: "https://project-management-f341a-default-rtdb.firebaseio.com",
  projectId: "project-management-f341a",
  storageBucket: "project-management-f341a.appspot.com",
  messagingSenderId: "267368504630",
  appId: "1:267368504630:web:408cd923d98b7953872797",
  measurementId: "G-7Y70LXSC1N",
}; //by adding your credentials, you get authorized to read and write from the database

export const app = firebase.initializeApp(firebaseConfig);
