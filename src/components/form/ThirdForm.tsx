import useFormStore from "../../data/store";
import NavButton from "../navigation/NavButton";
import { useNavigate } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import WorkExpPopup from "./WorkExpPopup";
import CertificatesPopup from "./CertificatesPopup";
import SkillPopup from "./SkillPopup";
import FormContainer from "./FormContainer";
import EntryDataContainer from "./EntryDataContainer";

const ThirdForm = () => {
  const { thirdFormData } = useFormStore();
  const navigate = useNavigate();

  return (
    <FormContainer onSubmit={() => navigate("/result")} activeForm={2}>
      {thirdFormData.workExpirience ? (
        thirdFormData.workExpirience.map((exp, index) => (
          <EntryDataContainer key={index}>
            <p>{exp.jobPosition}</p>
            <p>{exp.company}</p>
            <p>
              {exp.startDate} - {exp.endDate ? exp.endDate : "obecnie"}
            </p>
            <p>{exp.city}</p>
            <p>{exp.description}</p>
          </EntryDataContainer>
        ))
      ) : (
        <EntryDataContainer noOfLine={5} />
      )}
      <WorkExpPopup />
      {thirdFormData.certificates ? (
        thirdFormData.certificates.map((certificate, index) => (
          <EntryDataContainer key={index}>
            <p>{certificate.description}</p>
            <p>{certificate.organization}</p>
          </EntryDataContainer>
        ))
      ) : (
        <EntryDataContainer noOfLine={2} />
      )}
      <CertificatesPopup />
      {thirdFormData.skills ? (
        thirdFormData.skills.map((skill, index) => (
          <EntryDataContainer key={index}>
            <p>{skill}</p>
          </EntryDataContainer>
        ))
      ) : (
        <EntryDataContainer noOfLine={1} />
      )}
      <SkillPopup />
      <HStack justify="space-between" padding={4}>
        <NavButton onClick={() => navigate("/second")}>Wstecz</NavButton>
        <NavButton onClick={() => navigate("/result")}>Zakończ</NavButton>
      </HStack>
    </FormContainer>
  );
};

export default ThirdForm;
