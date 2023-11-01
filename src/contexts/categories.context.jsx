import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// this is the actual value/data you want to access
export const CategoriesContext = createContext({
   categoriesMap: {},
   setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
   const [categoriesMap, setCategoriesMap] = useState({});

   useEffect(() => {
      const getCategoriesMap = async () => {
         const categoryMap = await getCategoriesAndDocuments();

         setCategoriesMap(categoryMap);
      };
      getCategoriesMap();
   }, []);

   const value = { categoriesMap };

   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
