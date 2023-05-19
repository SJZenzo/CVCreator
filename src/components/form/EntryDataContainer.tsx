import { Container, SkeletonText } from "@chakra-ui/react";
import { ReactNode } from "react";

// type EntryItemType = LanguageProps | EducationDegreeProps;

interface Props {
  children?: ReactNode;
  noOfLine?: number;
  keyValue?: number;
}

// interface Props {
//   noOfLine?: number;
//   maps?: (item: EntryItemType) => void;
//   formData?: EntryItemType[];
// }

const EntryDataContainer = ({
  noOfLine = 4,
  children,
  keyValue = 0,
}: Props) => {
  return (
    <Container maxW="650px" shadow="lg" rounded="lg" padding={4} key={keyValue}>
      {children ? children : <SkeletonText noOfLines={noOfLine} spacing="4" />}
    </Container>
  );
};

export default EntryDataContainer;
