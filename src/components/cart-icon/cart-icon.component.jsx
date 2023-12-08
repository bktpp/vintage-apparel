import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import { CartIconContainer, ItemCount, ShoppingBag } from "./cart-icon.styles.jsx";

const CartIcon = () => {
   const dispatch = useDispatch();
   const cartCount = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);

   const toggleIsCartOpen = () => {
      dispatch(setIsCartOpen(!isCartOpen));
      console.log("icon clicked", isCartOpen);
   };

   return (
      <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingBag />
         <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
   );
};
export default CartIcon;
