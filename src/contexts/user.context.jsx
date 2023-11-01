import { createContext, useState, useEffect } from "react";
import {
   createUserDocumentFromAuth,
   onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

// this is the actual value/data you want to access
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);
   const value = { currentUser, setCurrentUser };

   // this cleans up. removes observer
   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocumentFromAuth(user);
         }
         setCurrentUser(user);
      });

      return unsubscribe;
   }, []);
   // This wraps around any component that needs access to data in UserContext
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
