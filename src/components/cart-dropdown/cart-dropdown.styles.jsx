import styled from "styled-components";

export const CartItems = styled.div``;

export const CartDropdownContainer = styled.div`
   position: absolute;
   width: 17rem;
   height: 21.25rem;
   display: flex;
   flex-direction: column;
   padding: 20px;
   border: 1px solid black;
   background-color: white;
   top: 90px;
   right: 40px;
   z-index: 5;

   ${CartItems} {
      height: 15rem;
      display: flex;
      flex-direction: column;
      overflow: scroll;
   }

   button {
      margin-top: auto;
   }
`;

export const EmptyMessage = styled.span`
   font-size: 18px;
   margin: 50px auto;
`;
