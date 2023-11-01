import styled from "styled-components";

export const BackgroundImage = styled.div`
   width: 100%;
   height: 100%;
   background-size: cover;
   background-position: center;
   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
   };
`;

export const Body = styled.div`
   height: 5.625rem;
   padding: 0 1.56rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   background-color: white;
   opacity: 0.7;
   position: absolute;
   text-transform: uppercase;
`;
export const BodyTitle = styled.h2`
   font-weight: bold;
   margin: 0 0.375rem 0;
   font-size: 1.375rem;
   color: #4a4a4a;
`;
export const BodySubTitle = styled.p`
   font-weight: lighter;
   font-size: 1rem;
`;

export const DirectoryItemContainer = styled.div`
   min-width: 30%;
   height: 15rem;
   flex: 1 1 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   margin: 0 0.468rem 0.937rem;
   overflow: hidden;

   &:hover {
      cursor: pointer;

      & ${BackgroundImage} {
         transform: scale(1.1);
         transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & ${Body} {
         opacity: 0.9;
      }
   }
   &:first-child {
      margin-right: 0.468rem;
   }
   &:last-child {
      margin-left: 0.468rem;
   }
`;
