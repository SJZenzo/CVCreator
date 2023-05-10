import { Box, Divider, HStack, Heading, Text } from "@chakra-ui/react";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import cvData from "../data/cvDataExample";

const AsidePanel = () => {
  return (
    <>
      <Box p={1} marginStart={10}>
        <Heading fontSize={20} marginBottom={2}>
          CONTACT
        </Heading>
        <HStack marginBottom={1}>
          <BsPhone />
          <Text>{cvData.phoneNumber}</Text>
        </HStack>
        <HStack marginBottom={1}>
          <HiOutlineMail />
          <Text>{cvData.email}</Text>
        </HStack>
        <HStack marginBottom={1}>
          <AiFillLinkedin />
          <Text>{cvData.linkedinProfile}</Text>
        </HStack>
        <HStack marginBottom={3}>
          <CiLocationOn />
          <Text>{cvData.city}</Text>
        </HStack>
        <Divider borderColor="black" marginBottom={3}></Divider>
        <Heading fontSize={20} marginBottom={2}>
          EDUCATION
        </Heading>
        <ul>
          {cvData.education.map((level, index) => (
            <li key={index}>
              <Text>
                {level.startYear}-{level.endYear}
              </Text>
              <Text>{level.istytutionName}</Text>
              <Text>{level.fieldOfStudy}</Text>
              <Text marginBottom={3}>{level.degree}</Text>
            </li>
          ))}
        </ul>
        <Divider borderColor="black" marginBottom={3}></Divider>
        <Heading fontSize={20} marginBottom={2}>
          LANGUAGES
        </Heading>
        {cvData.languages.map((language) => (
          <HStack>
            <Text>
              {language.lenguage}: {language.level}
            </Text>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default AsidePanel;
