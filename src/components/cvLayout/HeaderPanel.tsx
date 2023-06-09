import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";

interface HeaderProps {
  name: string;
  surname: string;
  position: string;
}

interface Props {
  inputData: HeaderProps;
}

const HeaderPanel = ({ inputData }: Props) => {
  return (
    <>
      <Box p={3} textAlign="center">
        <Heading as="h1" size="xl">
          {inputData.name} {inputData.surname}
        </Heading>
        <Text fontSize="xl">{inputData.position}</Text>
        <Stack padding="2px">
          <Divider borderColor="black"></Divider>
        </Stack>
      </Box>
    </>
  );
};

export default HeaderPanel;
