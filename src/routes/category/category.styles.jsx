import styled from "styled-components";

export const CategoryTitle = styled.h2`
   font-size: 1.75rem;
   margin-bottom: 1.56rem;
   text-transform: uppercase;
   letter-spacing: 3px;
   font-weight: 400;
   text-align: center;
`;

export const CategoryContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 1rem;
   row-gap: 3.125rem;
`;
