import { create } from "zustand";
import { FirstFormProperities } from "../components/FirstForm";
import { SecondFormProperities } from "../components/SecondForm";
import { ThirdFormProperities } from "../components/ThirdForm";

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
  secondFormData: { educationDegree: null, skills: null, languages: null },
  thirdFormData: { profile: null, workExpirience: null, certificates: null },
  saveFirstForm: (formData) => set(() => ({ firstFormData: formData })),
  saveSecondForm: (formData) => set(() => ({ secondFormData: formData })),
  saveThirdForm: (formData) => set(() => ({ thirdFormData: formData })),
}));

export default useFormStore;
