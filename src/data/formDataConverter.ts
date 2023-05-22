import {
  CertificatesProps,
  EducationDegreeProps,
  FirstFormProperities,
  LanguageProps,
  SecondFormProperities,
  SkillsProps,
  ThirdFormProperities,
  WorkExpirienceProps,
} from "./store";

interface UserCvProps {
  type: "USERDATA";
  firstFormDataInput: FirstFormProperities;
  secondFormDataInput: SecondFormProperities;
  thirdFormDataInput: ThirdFormProperities;
}

interface ExampleDataType {
  type: "EXAMPLE";
  name: string;
  surname: string;
  positon: string;
  phoneNumber: number;
  email: string;
  linkedinProfile: string;
  city: string;
  education: EducationDegreeProps[];
  languages: LanguageProps[];
  profile: string | undefined;
  workExpirience: WorkExpirienceProps[];
  certificates: CertificatesProps[];
  skills: SkillsProps[];
}

export type CvDataType = ExampleDataType | UserCvProps;

const formDataConverter = (inputData: CvDataType) => {
  if (inputData.type === "EXAMPLE") {
    let headerObj = {
      name: inputData.name,
      surname: inputData.surname,
      position: inputData.positon,
    };
    let asideObs = {
      phoneNumber: inputData.phoneNumber,
      email: inputData.email,
      linkedinProfile: inputData.linkedinProfile,
      city: inputData.city,
      education: inputData.education,
      languages: inputData.languages,
    };
    let mainObj = {
      profile: inputData.profile,
      workExpirience: inputData.workExpirience,
      certificates: inputData.certificates,
      skills: inputData.skills,
    };

    return { headerObj, asideObs, mainObj };
  } else if (inputData.type === "USERDATA") {
    let headerObj = {
      name: inputData.firstFormDataInput.name,
      surname: inputData.firstFormDataInput.surname,
      position: inputData.firstFormDataInput.position,
    };
    let asideObs = {
      phoneNumber: inputData.firstFormDataInput.phoneNumber,
      email: inputData.firstFormDataInput.email,
      linkedinProfile: inputData.firstFormDataInput.linkedin,
      city: inputData.firstFormDataInput.city,
      education: inputData.secondFormDataInput.educationDegree,
      languages: inputData.secondFormDataInput.languages,
    };
    let mainObj = {
      profile: inputData.secondFormDataInput.profile,
      workExpirience: inputData.thirdFormDataInput.workExpirience,
      certificates: inputData.thirdFormDataInput.certificates,
      skills: inputData.thirdFormDataInput.skills,
    };

    return { headerObj, asideObs, mainObj };
  }
  return null;
};

export default formDataConverter;
