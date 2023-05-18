import { Container, SkeletonText } from "@chakra-ui/react";
import { ReactNode } from "react";

// type EntryItemType = LanguageProps | EducationDegreeProps;

interface Props {
  children?: ReactNode;
  noOfLine?: number;
  //   maps?: (item: EntryItemType) => void;
  //   formData?: EntryItemType[];
}

const EntryDataContainer = ({ children, noOfLine = 4 }: Props) => {
  return (
    <Container maxW="750px" shadow="lg" rounded="lg" padding={4}>
      {children ? (
        children
      ) : (
        <SkeletonText noOfLines={noOfLine} spacing="4" skeletonHeight="2" />
      )}
    </Container>
  );
};

export default EntryDataContainer;
