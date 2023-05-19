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
  degree: string;
  startDate: string;
  endDate?: string;
  instytutionName: string;
  fieldOfStudy: string;
}

export interface LanguageProps {
  language: string;
  level: string;
}

export interface SecondFormProperities {
  educationDegree: EducationDegreeProps[] | null;
  languages: LanguageProps[] | null;
  profile: string | null;
}

export interface WorkExpirienceProps {
  jobPosition: string;
  company: string;
  city: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface CertificatesProps {
  description: string;
  organization: string;
}

export interface ThirdFormProperities {
  workExpirience: WorkExpirienceProps[] | null;
  certificates: CertificatesProps[] | null;
  skills: string[] | null;
}

interface FormStore {
  firstFormData: FirstFormProperities | null;
  secondFormData: SecondFormProperities;
  thirdFormData: ThirdFormProperities;
  saveFirstForm: (formData: FirstFormProperities) => void;
  saveSecondForm: (formData: SecondFormProperities) => void;
  saveThirdForm: (formData: ThirdFormProperities) => void;
}

const useFormStore = create<FormStore>((set) => ({
  firstFormData: null,
  secondFormData: { educationDegree: null, languages: null, profile: null },
  thirdFormData: { workExpirience: null, certificates: null, skills: null },
  saveFirstForm: (formData) => set(() => ({ firstFormData: formData })),
  saveSecondForm: (formData) => set(() => ({ secondFormData: formData })),
  saveThirdForm: (formData) => set(() => ({ thirdFormData: formData })),
}));

export default useFormStore;
