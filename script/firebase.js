// firebase.js
// Use full URLs to import Firebase modules in browser environment

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB4o1DvyUt2I0T0kM7YIL3WVeKUdg8fwq4",
  authDomain: "gym-management-48806.firebaseapp.com",
  projectId: "gym-management-48806",
  storageBucket: "gym-management-48806.appspot.com",  // corrected domain!
  messagingSenderId: "465102465377",
  appId: "1:465102465377:web:73b37169334a682574bd20"
};

// Initialize Firebase app and export it
export const app = initializeApp(firebaseConfig);
