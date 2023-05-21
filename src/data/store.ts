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
  educationDegree: EducationDegreeProps[];
  languages: LanguageProps[];
  profile: string | undefined;
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
  workExpirience: WorkExpirienceProps[];
  certificates: CertificatesProps[];
  skills: SkillsProps[];
}

interface FormStore {
  firstFormData: FirstFormProperities | undefined;
  secondFormData: SecondFormProperities;
  thirdFormData: ThirdFormProperities;
  saveFirstForm: (formData: FirstFormProperities) => void;
  saveSecondFormProfile: (formData: string) => void;

  saveEducation: (popupData: EducationDegreeProps) => void;
  saveLanguage: (popupData: LanguageProps) => void;
  saveWorkExp: (popupData: WorkExpirienceProps) => void;
  saveCertificates: (popupData: CertificatesProps) => void;
  saveSkills: (popupData: SkillsProps) => void;

  deleteEducation: (id: number) => void;
  deleteLanguage: (id: number) => void;
  deleteWorkExp: (id: number) => void;
  deleteCertificates: (id: number) => void;
  deleteSkills: (id: number) => void;
}

const useFormStore = create<FormStore>((set) => ({
  firstFormData: undefined,
  secondFormData: {
    educationDegree: [],
    languages: [],
    profile: undefined,
  },
  thirdFormData: {
    workExpirience: [],
    certificates: [],
    skills: [],
  },
  saveFirstForm: (formData) => set(() => ({ firstFormData: formData })),
  saveSecondFormProfile: (formData) =>
    set((state) => ({
      secondFormData: { ...state.secondFormData, profile: formData },
    })),

  saveEducation: (popupData) =>
    set((state) => ({
      secondFormData: {
        ...state.secondFormData,
        educationDegree: [...state.secondFormData.educationDegree, popupData],
      },
    })),

  saveLanguage: (popupData) =>
    set((state) => ({
      secondFormData: {
        ...state.secondFormData,
        languages: [...state.secondFormData.languages, popupData],
      },
    })),

  saveWorkExp: (popupData) =>
    set((state) => ({
      thirdFormData: {
        ...state.thirdFormData,
        workExpirience: [...state.thirdFormData.workExpirience, popupData],
      },
    })),

  saveCertificates: (popupData) =>
    set((state) => ({
      thirdFormData: {
        ...state.thirdFormData,
        certificates: [...state.thirdFormData.certificates, popupData],
      },
    })),

  saveSkills: (popupData) =>
    set((state) => ({
      thirdFormData: {
        ...state.thirdFormData,
        skills: [...state.thirdFormData.skills, popupData],
      },
    })),

  deleteEducation: (id) =>
    set((state) => ({
      secondFormData: {
        ...state.secondFormData,
        educationDegree: state.secondFormData.educationDegree.filter(
          (item) => item.id !== id
        ),
      },
    })),

  deleteLanguage: (id) =>
    set((state) => ({
      secondFormData: {
        ...state.secondFormData,
        languages: state.secondFormData.languages.filter(
          (item) => item.id !== id
        ),
      },
    })),
  deleteWorkExp: (id) =>
    set((state) => ({
      thirdFormData: {
        ...state.thirdFormData,
        workExpirience: state.thirdFormData.workExpirience.filter(
          (item) => item.id !== id
        ),
      },
    })),
  deleteCertificates: (id) =>
    set((state) => ({
      thirdFormData: {
        ...state.thirdFormData,
        certificates: state.thirdFormData.certificates.filter(
          (item) => item.id !== id
        ),
      },
    })),
  deleteSkills: (id) =>
    set((state) => ({
      thirdFormData: {
        ...state.thirdFormData,
        skills: state.thirdFormData.skills.filter((item) => item.id !== id),
      },
    })),
}));

export default useFormStore;
