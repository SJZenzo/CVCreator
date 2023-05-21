import { Box, CloseButton, Container, SkeletonText } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  noOfLine?: number;
  keyValue?: number;
  onDelete?: () => void;
}

const EntryDataContainer = ({
  noOfLine = 4,
  children,
  keyValue = 0,
  onDelete,
}: Props) => {
  return (
    <Container maxW="650px" shadow="lg" rounded="lg" py={1} key={keyValue}>
      {children ? (
        <>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CloseButton onClick={onDelete} />
          </Box>
          {children}
        </>
      ) : (
        <SkeletonText noOfLines={noOfLine} spacing="8" py={4} mt={8} />
      )}
    </Container>
  );
};

export default EntryDataContainer;
