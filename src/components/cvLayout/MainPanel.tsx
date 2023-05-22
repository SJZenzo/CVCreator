import {
  Box,
  Divider,
  HStack,
  Heading,
  ListItem,
  Show,
  Text,
} from "@chakra-ui/react";
import {
  CertificatesProps,
  SkillsProps,
  WorkExpirienceProps,
} from "../../data/store";
import ListContainer from "./ListContainer";

interface MainProps {
  profile: string | undefined;
  workExpirience: WorkExpirienceProps[];
  certificates: CertificatesProps[];
  skills: SkillsProps[];
}

interface Props {
  inputData: MainProps;
}

const MainPanel = ({ inputData }: Props) => {
  return (
    <Box p={3} marginX={5}>
      <Heading fontSize={20} marginBottom={2}>
        PROFIL
      </Heading>
      <Text marginBottom={3}>{inputData.profile}</Text>

      {inputData.workExpirience.length !== 0 ? (
        <ListContainer headingTitle="DOŚWIADCZENIE ZAWODOWE">
          {inputData.workExpirience.map((work, index) => (
            <ListItem key={index}>
              <Heading marginBottom={1} fontSize={18}>
                {work.jobPosition}
              </Heading>
              <HStack marginBottom={1} spacing="auto">
                <Text>{work.company}</Text>
                <Text>
                  {work.startDate} - {work.endDate ? work.endDate : "obecnie"}
                </Text>
              </HStack>
              <Text marginBottom={10}>{work.description}</Text>
            </ListItem>
          ))}
        </ListContainer>
      ) : null}

      {inputData.certificates.length !== 0 ? (
        <ListContainer headingTitle="CERTYFIKATY">
          {inputData.certificates.map((certificate, index) => (
            <ListItem key={index}>
              <Text>{certificate.description}</Text>
              <Text>{certificate.organization}</Text>
            </ListItem>
          ))}
        </ListContainer>
      ) : null}

      {inputData.skills.length !== 0 ? (
        <ListContainer headingTitle="UMIEJĘTNOŚCI">
          {inputData.skills.map((skill, index) => (
            <ListItem key={index}>{skill.skill}</ListItem>
          ))}
        </ListContainer>
      ) : null}
      <Show below="lg">
        <Divider borderColor="black" marginBottom={3} />
      </Show>
    </Box>
  );
};

export default MainPanel;
