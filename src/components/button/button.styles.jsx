import styled from "styled-components";

export const BaseButton = styled.button`
   min-width: 165px;
   width: auto;
   height: 50px;
   letter-spacing: 1px;
   line-height: 50px;
   padding: 0 35px 0 35px;
   font-size: 15px;
   background-color: black;
   color: white;
   text-transform: uppercase;
   font-family: "Lato";
   font-weight: bolder;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   transition: all 0.3s ease-in-out;

   &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
      transform: translateY(-4px) scale(1);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
   }
`;

export const GoogleSignInButton = styled(BaseButton)`
   background-color: #4285f4;
   color: white;
   &:hover {
      background-color: #357ae8;
      border: none;
   }
`;

export const InvertedButton = styled(BaseButton)`
   background-color: white;
   color: black;
   border: 1px solid black;
   &:hover {
      background-color: black;
      color: white;
      border: none;
   }
`;
