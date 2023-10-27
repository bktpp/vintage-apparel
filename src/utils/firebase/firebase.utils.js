import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyApSIymhly_eS5s9UbE2_0qP3TTp1B2AaA",
   authDomain: "vintage-apparel-db-57173.firebaseapp.com",
   projectId: "vintage-apparel-db-57173",
   storageBucket: "vintage-apparel-db-57173.appspot.com",
   messagingSenderId: "940337082436",
   appId: "1:940337082436:web:ccdb5b245a35efe2ebcc11",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
   if (!userAuth) return;

   const userDocRef = doc(db, "users", userAuth.uid);

   const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;

      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInfo,
         });
      } catch (err) {
         console.log("error creating the user", err.message);
      }
   }

   return userDocRef;
   // check if user data exists

   // if user data does not exist

   // create / set the coument with the data from userAuth in my collection

   //return userdocref
};

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
};