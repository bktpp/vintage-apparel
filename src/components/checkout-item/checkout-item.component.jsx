import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

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
   const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
   const { name, imageUrl, price, quantity } = item;

   const addItemHandler = () => {
      addItemToCart(item);
   };
   const removeItemHandler = () => {
      removeItemFromCart(item);
   };

   const deleteItemHandler = () => {
      deleteItemFromCart(item);
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
