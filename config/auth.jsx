import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const provider = new FacebookAuthProvider();
provider.addScope('user_birthday');

const userCreate = async (email, password) => {
  const resultado = await createUserWithEmailAndPassword(auth, email, password)
  return resultado.user.uid;
};

const login = async (email, password) => {
  const resultado = await signInWithEmailAndPassword(auth, email, password)
  console.log(resultado);
  return resultado;
};

const sessionState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      alert("Session expired");
    }
  });
};

const loginFacebook = async () => {
  const userFacebook = await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      return user;

    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
    return userFacebook;
};

export { auth, userCreate, login, onAuthStateChanged, loginFacebook }