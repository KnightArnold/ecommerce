import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbnivW0H3bl--gJQF04gxM0jl2UkUw3c4",
  authDomain: "ecommerce-4de90.firebaseapp.com",
  projectId: "ecommerce-4de90",
  storageBucket: "ecommerce-4de90.appspot.com",
  messagingSenderId: "743845376588",
  appId: "1:743845376588:web:c2551a94b8ca02af06bae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;