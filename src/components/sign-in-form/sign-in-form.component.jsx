import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SigninContainer, SigninTitle, ButtonContainer } from "./sign-in-form.styles.jsx";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action.js";

const defaultFormFields = {
   email: "",
   password: "",
};

const SignInForm = () => {
   const dispatch = useDispatch();
   const [formFields, setFormFields] = useState(defaultFormFields);

   const { email, password } = formFields;

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const signInWithGoogle = async () => {
      dispatch(googleSignInStart());
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         dispatch(emailSignInStart(email, password));
         resetFormFields();
      } catch (err) {
         if (err.code === "auth/invalid-login-credentials") {
            alert("Email and password don't match. Please try again.");
         }
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <SigninContainer>
         <SigninTitle>Already have an account?</SigninTitle>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
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
            <ButtonContainer>
               <Button type="submit">Sign In</Button>
               <Button
                  type="button"
                  buttonType={BUTTON_TYPE_CLASSES.google}
                  onClick={signInWithGoogle}
               >
                  Google sign in
               </Button>
            </ButtonContainer>
         </form>
      </SigninContainer>
   );
};
export default SignInForm;
