import { useNavigate } from "react-router-dom";

import {
   DirectoryItemContainer,
   BackgroundImage,
   Body,
   BodyTitle,
   BodySubTitle,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
   const { title, imageUrl: imageurl, route } = category;
   const navigate = useNavigate();

   const onNavigateHandler = () => navigate(route);

   return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
         <BackgroundImage imageurl={imageurl} />
         <Body>
            <BodyTitle>{title}</BodyTitle>
            <BodySubTitle>Shop now</BodySubTitle>
         </Body>
      </DirectoryItemContainer>
   );
};

export default DirectoryItem;
