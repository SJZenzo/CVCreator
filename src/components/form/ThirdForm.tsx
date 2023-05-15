import useFormStore from "../../data/store";
import NavButton from "../navigation/NavButton";
import { useNavigate } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import WorkExpPopup from "./WorkExpPopup";
import CertificatesPopup from "./CertificatesPopup";
import SkillPopup from "./SkillPopup";

const ThirdForm = () => {
  const { thirdFormData } = useFormStore();
  const navigate = useNavigate();

  return (
    <>
      <div className="container-sm">
        <ul>
          {thirdFormData.workExpirience?.map((exp, index) => (
            <li key={index}>
              <p>{exp.jobPosition}</p>
              <p>{exp.company}</p>
              <p>
                {exp.startDateMonth}.{exp.startDateYear} - {exp.endDateMonth}.
                {exp.endDateYear}
              </p>
              <p>{exp.city}</p>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
        <WorkExpPopup />
        <ul>
          {thirdFormData.certificates?.map((certificate, index) => (
            <li key={index}>
              <p>{certificate.description}</p>
              <p>{certificate.organization}</p>
            </li>
          ))}
        </ul>
        <CertificatesPopup />
        <ul>
          {thirdFormData.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <SkillPopup />
        <HStack justify="space-between" padding={4}>
          <NavButton onClick={() => navigate("/second")} buttonText="Wstecz" />
          <NavButton onClick={() => navigate("/result")} buttonText="Zakończ" />
        </HStack>
      </div>
    </>
  );
};

export default ThirdForm;
