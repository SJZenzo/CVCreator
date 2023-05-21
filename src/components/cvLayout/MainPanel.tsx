import {
  Box,
  Divider,
  HStack,
  Heading,
  ListItem,
  Show,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { CertificatesProps, WorkExpirienceProps } from "../../data/store";

interface MainProps {
  profile: string;
  workExpirience: WorkExpirienceProps[];
  certificates: CertificatesProps[];
  skills: string[];
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
        <>
          <Divider borderColor="black" marginBottom={3} />
          <Heading fontSize={20} marginBottom={5}>
            DOŚWIADCZENIE ZAWODOWE
          </Heading>
          <UnorderedList>
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
          </UnorderedList>
        </>
      ) : null}

      {inputData.certificates.length !== 0 ? (
        <>
          <Divider borderColor="black" marginBottom={3} />
          <Heading fontSize={20} marginBottom={2}>
            CERTYFIKATY
          </Heading>
          <UnorderedList marginBottom={3}>
            {inputData.certificates.map((certificate, index) => (
              <ListItem key={index}>
                <Text>{certificate.description}</Text>
                <Text>{certificate.organization}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </>
      ) : null}

      {inputData.skills.length !== 0 ? (
        <>
          <Divider borderColor="black" marginBottom={3} />
          <Heading fontSize={20} marginBottom={2}>
            UMIEJĘTNOŚCI
          </Heading>
          <UnorderedList marginBottom={3}>
            {inputData.skills.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
          </UnorderedList>
        </>
      ) : null}
      <Show below="lg">
        <Divider borderColor="black" marginBottom={3} />
      </Show>
    </Box>
  );
};

export default MainPanel;
