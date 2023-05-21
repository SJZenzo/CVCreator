import { create } from "zustand";

export interface FirstFormProperities {
  name: string;
  surname: string;
  position: string;
  phoneNumber: number;
  email: string;
  linkedin: string;
  city: string;
}

export interface EducationDegreeProps {
  id: number;
  degree: string;
  startDate: string;
  endDate?: string;
  instytutionName: string;
  fieldOfStudy: string;
}

export interface LanguageProps {
  id: number;
  language: string;
  level: string;
}

export interface SecondFormProperities {
  educationDegree: EducationDegreeProps[] | null;
  languages: LanguageProps[] | null;
  profile: string | null;
}

export interface WorkExpirienceProps {
  id: number;
  jobPosition: string;
  company: string;
  city: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface CertificatesProps {
  id: number;
  description: string;
  organization: string;
}

export interface SkillsProps {
  id: number;
  skill: string;
}

export interface ThirdFormProperities {
  workExpirience: WorkExpirienceProps[] | null;
  certificates: CertificatesProps[] | null;
  skills: SkillsProps[] | null;
}

interface FormStore {
  firstFormData: FirstFormProperities | null;
  secondFormData: SecondFormProperities;
  thirdFormData: ThirdFormProperities;
  saveFirstForm: (formData: FirstFormProperities) => void;
  saveSecondForm: (formData: SecondFormProperities) => void;
  saveThirdForm: (formData: ThirdFormProperities) => void;
  EducationDegreeProps: (id: number) => void;
  deleteLanguageProps: (id: number) => void;
  deleteWorkExpirience: (id: number) => void;
  deleteCertificatesProps: (id: number) => void;
  deleteSkillsProps: (id: number) => void;
}

const useFormStore = create<FormStore>((set) => ({
  firstFormData: null,
  secondFormData: { educationDegree: null, languages: null, profile: null },
  thirdFormData: { workExpirience: null, certificates: null, skills: null },
  saveFirstForm: (formData) => set(() => ({ firstFormData: formData })),
  saveSecondForm: (formData) => set(() => ({ secondFormData: formData })),
  saveThirdForm: (formData) => set(() => ({ thirdFormData: formData })),
  EducationDegreeProps: (id) =>
    set(() => {
      secondFormData;
    }),
  deleteLanguageProps: (id) =>
    set(() => ({
      secondFormData: 
    })),
  deleteWorkExpirience: (id) =>
    set(() => {
      secondFormData;
    }),
  deleteCertificatesProps: (id) =>
    set(() => {
      secondFormData;
    }),
  deleteSkillsProps: (id) =>
    set(() => {
      secondFormData;
    }),
}));

export default useFormStore;
