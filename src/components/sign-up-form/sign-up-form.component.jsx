import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import {
   createAuthUserWithEmailAndPassword,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import { SignupContainer, SignupTitle } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields);

   const { displayName, email, password, confirmPassword } = formFields;

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
         alert("passwords do not match");
         return;
      }
      try {
         const { user } = await createAuthUserWithEmailAndPassword(email, password);

         await createUserDocumentFromAuth(user, { displayName });
         resetFormFields();
      } catch (err) {
         switch (err.code) {
            case "auth/weak-password":
               alert("Password must be at least 6 characters");
               break;
            case "auth/email-already-in-use":
               alert("Email already in use");
               break;
            default:
               alert("user creation encountered an error", err.message);
         }
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <SignupContainer>
         <SignupTitle>Don't have an account?</SignupTitle>
         <span>Sign up with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Display Name"
               required
               type="text"
               onChange={handleChange}
               name="displayName"
               value={displayName}
            />
            <FormInput
               label="Email"
               required
               type="email"
               onChange={handleChange}
               name="email"
               value={email}
            />
            <FormInput
               label="Password"
               required
               type="password"
               onChange={handleChange}
               name="password"
               value={password}
            />
            <FormInput
               label="Confirm Password"
               required
               type="password"
               onChange={handleChange}
               name="confirmPassword"
               value={confirmPassword}
            />

            <Button type="submit">Sign Up</Button>
         </form>
      </SignupContainer>
   );
};
export default SignUpForm;
