import {
   DirectoryItemContainer,
   BackgroundImage,
   Body,
   BodyTitle,
   BodySubTitle,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
   const { title, imageUrl } = category;

   return (
      <DirectoryItemContainer>
         <BackgroundImage imageUrl={imageUrl} />
         <Body>
            <BodyTitle>{title}</BodyTitle>
            <BodySubTitle>Shop now</BodySubTitle>
         </Body>
      </DirectoryItemContainer>
   );
};

export default DirectoryItem;
