import { create } from "zustand";
import { FirstFormProperities } from "../components/FirstForm";
import { SecondFormProperities } from "../components/SecondForm";

interface FormStore {
  firstFormData: FirstFormProperities | null;
  secondFormData: SecondFormProperities | null;
  saveFirstForm: (formData: FirstFormProperities) => void;
  saveSecondForm: (formData: SecondFormProperities) => void;
}

const useFormStore = create<FormStore>((set) => ({
  firstFormData: null,
  secondFormData: null,
  saveFirstForm: (formData) => set(() => ({ firstFormData: formData })),
  saveSecondForm: (formData) => set(() => ({ secondFormData: formData })),
}));

export default useFormStore;
