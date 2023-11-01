import styled from "styled-components";

export const ImageContainer = styled.div``;
export const Name = styled.span``;
export const Quantity = styled.span``;
export const Price = styled.span``;
export const Arrow = styled.span``;
export const Value = styled.span``;
export const RemoveButton = styled.div``;

export const CheckoutItemContainer = styled.div`
   width: 100%;
   display: flex;
   min-height: 100px;
   border-bottom: 1px solid darkgrey;
   padding: 15px 0;
   font-size: 20px;
   align-items: center;

   ${ImageContainer} {
      width: 23%;
      padding-right: 15px;
      img {
         width: 100%;
         height: 100%;
      }
   }
   ${Name},
   ${Quantity},
      ${Price} {
      width: 23%;
   }

   ${Quantity} {
      display: flex;

      ${Arrow} {
         cursor: pointer;
      }

      ${Value} {
         margin: 0 10px;
      }
   }
   ${RemoveButton} {
      padding-left: 12px;
      cursor: pointer;
   }
`;

// .checkout-item-container {
//
//    .image-container {
//
//    }
//    .name,
//    .quantity,
//    .price {
//
//    }

//    .quantity {
//       display: flex;

//       .arrow {
//          cursor: pointer;
//       }
//       .value {
//
//       }
//    }
//    .remove-button {
//
//    }
// }
