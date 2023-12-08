import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
   const newCartItems = addCartItem(cartItems, productToAdd);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
   const newCartItems = removeCartItem(cartItems, productToRemove);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItemFromCart = (cartItems, productToDelete) => {
   const newCartItems = deleteCartItem(cartItems, productToDelete);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
