import SkillPopup from "./SkillPopup";
import { Box, HStack } from "@chakra-ui/react";
import useFormStore from "../data/store";
import NavButton from "./NavButton";
import EducationPopup from "./EducationPopup";
import { useNavigate } from "react-router-dom";
import LanguagesPopup from "./LanguagesPopup";

interface EducationDegreeProps {
  degree: string;
  startYear: number;
  endYear: number;
  instytutionName: string;
  fieldOfStudy: string;
}

interface LanguageProps {
  language: string;
  level: string;
}

export interface SecondFormProperities {
  skills: string[] | null;
  educationDegree: EducationDegreeProps[] | null;
  languages: LanguageProps[] | null;
}

const SecondForm = () => {
  const { secondFormData } = useFormStore();
  const navigate = useNavigate();

  return (
    <Box className="container-sm">
      <ul>
        {secondFormData.skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <SkillPopup />

      <ul>
        {secondFormData.educationDegree?.map((degree, index) => (
          <li key={index}>
            <p>{degree.degree}</p>
            <p>
              {degree.startYear} - {degree.endYear}
            </p>
            <p>{degree.instytutionName}</p>
            <p>{degree.fieldOfStudy}</p>
          </li>
        ))}
      </ul>
      <EducationPopup />

      <ul>
        {secondFormData.languages?.map((lang, index) => (
          <li key={index}>
            {lang.language}: {lang.level}
          </li>
        ))}
      </ul>

      <LanguagesPopup />

      <HStack justify="space-between" padding={4}>
        <NavButton onClick={() => navigate("/")} buttonText="Wstecz" />

        <NavButton onClick={() => navigate("/third")} buttonText="Dalej" />
      </HStack>
    </Box>
  );
};

export default SecondForm;
