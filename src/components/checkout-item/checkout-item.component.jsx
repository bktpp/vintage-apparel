import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
   addItemToCart,
   deleteItemFromCart,
   removeItemFromCart,
} from "../../store/cart/cart.action.js";

import {
   CheckoutItemContainer,
   ImageContainer,
   Arrow,
   Value,
   RemoveButton,
   Name,
   Quantity,
   Price,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
   const { name, imageUrl, price, quantity } = item;
   const cartItems = useSelector(selectCartItems);
   const dispatch = useDispatch();

   const addItemHandler = () => {
      dispatch(addItemToCart(cartItems, item));
   };
   const removeItemHandler = () => {
      dispatch(removeItemFromCart(cartItems, item));
   };

   const deleteItemHandler = () => {
      dispatch(deleteItemFromCart(cartItems, item));
   };

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt={name} />
         </ImageContainer>
         <Name>{name}</Name>
         <Quantity>
            <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}>&#10095;</Arrow>
         </Quantity>
         <Price>${price}</Price>
         <RemoveButton onClick={deleteItemHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
   );
};
export default CheckoutItem;
