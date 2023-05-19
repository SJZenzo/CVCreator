import { Box, Divider, HStack, Heading, Text } from "@chakra-ui/react";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { EducationDegreeProps, LanguageProps } from "../../data/store";

interface AsideProps {
  phoneNumber: number;
  email: string;
  linkedinProfile: string;
  city: string;
  education: EducationDegreeProps[] | null;
  languages: LanguageProps[] | null;
}

interface Props {
  inputData: AsideProps;
}

const AsidePanel = ({ inputData }: Props) => {
  return (
    <>
      <Box p={3} marginX={5}>
        <Heading fontSize={20} marginBottom={2}>
          CONTACT
        </Heading>
        <HStack marginBottom={1}>
          <BsPhone />
          <Text>{inputData.phoneNumber}</Text>
        </HStack>
        <HStack marginBottom={1}>
          <HiOutlineMail />
          <Text>{inputData.email}</Text>
        </HStack>
        <HStack marginBottom={1}>
          <AiFillLinkedin />
          <Text>{inputData.linkedinProfile}</Text>
        </HStack>
        <HStack marginBottom={3}>
          <CiLocationOn />
          <Text>{inputData.city}</Text>
        </HStack>

        {inputData.education ? (
          <>
            <Divider borderColor="black" marginBottom={3}></Divider>
            <Heading fontSize={20} marginBottom={2}>
              EDUCATION
            </Heading>

            {inputData.education.map((level, index) => (
              <Box key={index}>
                <Text>
                  {level.startDate} -{" "}
                  {level.endDate ? level.endDate : "obecnie"}
                </Text>
                <Text>{level.instytutionName}</Text>
                <Text>{level.fieldOfStudy}</Text>
                <Text marginBottom={3}>{level.degree}</Text>
              </Box>
            ))}
          </>
        ) : null}

        {inputData.languages ? (
          <>
            <Divider borderColor="black" marginBottom={3}></Divider>
            <Heading fontSize={20} marginBottom={2}>
              LANGUAGES
            </Heading>
            {inputData.languages.map((language, index) => (
              <HStack key={index}>
                <Text>
                  {language.language}: {language.level}
                </Text>
              </HStack>
            ))}
          </>
        ) : null}
      </Box>
    </>
  );
};

export default AsidePanel;
