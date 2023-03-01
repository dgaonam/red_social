import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHZ6RHvEuaYfUG9JXjIRgWK-hcEnxfEQ8",
  authDomain: "curso-f876a.firebaseapp.com",
  databaseURL: "https://curso-f876a-default-rtdb.firebaseio.com",
  projectId: "curso-f876a",
  storageBucket: "curso-f876a.appspot.com",
  messagingSenderId: "143594891060",
  appId: "1:143594891060:web:2d7531aa1a4a3fc64e6761",
  measurementId: "G-X3WK084BT4"
};

const app = initializeApp(firebaseConfig);

export default app;