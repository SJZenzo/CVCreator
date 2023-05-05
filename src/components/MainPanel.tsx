import {
  Box,
  Divider,
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import cvData from "../data/cvData";

const MainPanel = () => {
  return (
    <Box p={3} marginX={5}>
      <Heading fontSize={20} marginBottom={2}>
        PROFILE
      </Heading>
      <Text marginBottom={3}>{cvData.profile}</Text>
      <Divider borderColor="black" marginBottom={3}></Divider>
      <Heading fontSize={20} marginBottom={5}>
        WORK EXPIRIENCE
      </Heading>
      <ul>
        {cvData.workExpirience.map((work, index) => (
          <li key={index}>
            <Heading marginBottom={1} fontSize={18}>
              {work.jobPosition}
            </Heading>
            <HStack marginBottom={1} spacing="auto">
              <Text>{work.company}</Text>
              <Text>
                {work.startDateMonth}.{work.startDateYear}-{work.endDateMonth}.
                {work.endDateYear}
              </Text>
            </HStack>
            <Text marginBottom={10}>{work.description}</Text>
          </li>
        ))}
      </ul>
      <Divider borderColor="black" marginBottom={3}></Divider>
      <Heading fontSize={20} marginBottom={2}>
        CERTIFICATES
      </Heading>
      {cvData.certificates.map((certificate) => (
        <>
          <Text marginBottom={1}>{certificate.description}</Text>
          <Text marginBottom={5}>{certificate.organizer}</Text>
        </>
      ))}
      <Divider borderColor="black" marginBottom={3}></Divider>
      <Heading fontSize={20} marginBottom={2}>
        SKILLS
      </Heading>
      <UnorderedList marginBottom={3}>
        {cvData.skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default MainPanel;
