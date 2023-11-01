import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const ItemCount = styled.span``;
export const ShoppingBag = styled(ShoppingIcon)``;

export const CartIconContainer = styled.div`
   width: 2.813rem;
   height: 2.813rem;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-2px);
   }

   ${ItemCount} {
      position: absolute;
      font-size: 0.75rem;
      font-weight: bold;
      bottom: 0.75rem;
      color: #f08804;
      font-weight: 700;
   }

   ${ShoppingBag} {
      width: 1.625rem;
      height: 1.625rem;
   }
`;
