import { Link } from "react-router-dom";
import SkillPopup from "./SkillPopup";
import { HStack } from "@chakra-ui/react";
import useFormStore from "../data/store";

export interface SecondFormProperities {
  skills: string[];
}

const SecondForm = () => {
  const { secondFormData } = useFormStore();

  return (
    <>
      <ul>
        {secondFormData?.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <HStack align="center" justify="center" spacing={20}>
        <Link to="/">
          <button className="btn btn-primary" type="submit">
            Wstecz
          </button>
        </Link>

        <SkillPopup />

        <Link to="/third">
          <button className="btn btn-primary" type="submit">
            Dalej
          </button>
        </Link>
      </HStack>
    </>
  );
};

export default SecondForm;
