import { Divider, Heading, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  headingTitle: string;
}

const ListContainer = ({ children, headingTitle }: Props) => {
  return (
    <>
      <Divider borderColor="black" marginBottom={3} />
      <Heading fontSize={20} marginBottom={5}>
        {headingTitle}
      </Heading>
      <UnorderedList>{children}</UnorderedList>
    </>
  );
};

export default ListContainer;
