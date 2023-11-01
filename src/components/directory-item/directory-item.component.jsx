import { useNavigate } from "react-router-dom";

import {
   DirectoryItemContainer,
   BackgroundImage,
   Body,
   BodyTitle,
   BodySubTitle,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
   const { title, imageUrl, route } = category;
   const navigate = useNavigate();

   const onNavigateHandler = () => navigate(route);

   return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
         <BackgroundImage imageUrl={imageUrl} />
         <Body>
            <BodyTitle>{title}</BodyTitle>
            <BodySubTitle>Shop now</BodySubTitle>
         </Body>
      </DirectoryItemContainer>
   );
};

export default DirectoryItem;
