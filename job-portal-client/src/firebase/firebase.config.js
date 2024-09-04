// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ZhvRPPe9iYgFgGgSZhVPxrKUpZwQmQo",
  authDomain: "job-portal-demo-f4d12.firebaseapp.com",
  projectId: "job-portal-demo-f4d12",
  storageBucket: "job-portal-demo-f4d12.appspot.com",
  messagingSenderId: "749118428443",
  appId: "1:749118428443:web:a702f06e8809c922ee2fbe",
  measurementId: "G-GX8Q4G1XCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;