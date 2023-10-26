import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid);
   console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef);
   console.log(userSnapshot);
   console.log(userSnapshot.exists());

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;

      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
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
