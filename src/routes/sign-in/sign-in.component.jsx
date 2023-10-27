// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
   signInWithGooglePopup,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
   // useEffect(() => {
   //    const getData = async () => {
   //       const response = await getRedirectResult(auth);
   //       if (response) {
   //          const userDocRef = await createUserDocumentFromAuth(response.user);
   //       }
   //    };

   //    getData();
   // }, []);

   const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      console.log("user bruh", user);
      await createUserDocumentFromAuth(user);
   };

   return (
      <div>
         <h1>Sign In page</h1>
         <button onClick={logGoogleUser}>Sign in with google</button>
         {/* <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button> */}
         <SignUpForm />
      </div>
   );
};
export default SignIn;
