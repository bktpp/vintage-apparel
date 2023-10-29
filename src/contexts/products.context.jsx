import { createContext, useState } from "react";

import SHOP_PRODUCTS from "../shop-data.json";

// this is the actual value/data you want to access
export const ProductsContext = createContext({
   products: [],
   setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
   const [products, setProducts] = useState(SHOP_PRODUCTS);
   const value = { products, setProducts };

   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
