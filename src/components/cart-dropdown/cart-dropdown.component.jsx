import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
   const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
      navigate("/checkout");
      setIsCartOpen(!isCartOpen);
   };

   return (
      <CartDropdownContainer>
         <CartItems>
            {cartItems.length ? (
               cartItems.map((item) => {
                  return <CartItem key={item.id} cartItem={item} />;
               })
            ) : (
               <EmptyMessage>Your cart is empty.</EmptyMessage>
            )}
         </CartItems>
         <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
      </CartDropdownContainer>
   );
};
export default CartDropdown;
