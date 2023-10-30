import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
   // find which object matches
   const matchingProduct = cartItems.find((product) => {
      return product.id === productToAdd.id;
   });

   if (matchingProduct) {
      return cartItems.map((product) =>
         product.id === productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product
      );
   }

   return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
   // find which object matches
   const matchingProduct = cartItems.find((product) => {
      return product.id === productToRemove.id;
   });

   // high level: removes item if not 1 or more
   if (matchingProduct.quantity === 1) {
      return cartItems.filter((product) => product.id !== productToRemove.id);
   }

   return cartItems.map((product) =>
      product.id === productToRemove.id ? { ...product, quantity: product.quantity - 1 } : product
   );
};

const deleteCartItem = (cartItems, productToDelete) => {
   return cartItems.filter((product) => product.id !== productToDelete.id);
};

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   cartCount: 0,
   cartTotal: 0,
});

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);

   useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
      setCartCount(newCartCount);
   }, [cartItems]);

   useEffect(() => {
      const newCartTotal = cartItems.reduce(
         (total, cartItem) => total + cartItem.quantity * cartItem.price,
         0
      );
      setCartTotal(newCartTotal);
   }, [cartItems]);

   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
   };
   const removeItemFromCart = (productToRemove) => {
      setCartItems(removeCartItem(cartItems, productToRemove));
   };
   const deleteItemFromCart = (productToDelete) => {
      setCartItems(deleteCartItem(cartItems, productToDelete));
   };
   const value = {
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      cartCount,
      removeItemFromCart,
      deleteItemFromCart,
      cartTotal,
   };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
