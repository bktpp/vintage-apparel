import styled from "styled-components";

export const ItemDetails = styled.div``;
export const Name = styled.span``;

export const CartItemContainer = styled.div`
   width: 100%;
   display: flex;
   height: 80px;
   margin-bottom: 15px;
   img {
      width: 30%;
   }

   ${ItemDetails} {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 10px 20px;

      ${Name} {
         font-size: 16px;
      }
   }
`;
