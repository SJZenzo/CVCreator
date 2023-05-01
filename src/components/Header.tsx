import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box p={3} textAlign="center">
        <Heading as="h1" size="xl">
          Sławomir Woryna
        </Heading>
        <Text fontSize="xl">Frontend developer</Text>
        <Stack padding="10px">
          <Divider borderColor="black"></Divider>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
