import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled(Link)``;

export const Preview = styled.div``;

export const CategoryPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;

   ${Title} {
      font-size: 1.7rem;
      letter-spacing: 2px;
      font-weight: 400;
      margin-bottom: 25px;
      cursor: pointer;
   }

   ${Preview} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1.25rem;
   }
`;
