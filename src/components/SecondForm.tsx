import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import FormInput from "./FormInput";

const zString = (message: String) => {
  return z
    .string()
    .min(3, { message: message + " must be at least 3 charakters" });
};

const shema = z.object({
  name: zString("Name"),
  surname: zString("Surname"),
  positon: zString("Posidion"),
  phoneNumber: z.number({ invalid_type_error: "Number field is required" }),
  email: zString("Email"),
  linkedin: zString("Linkedin link"),
  city: zString("City name"),
});

type FormData = z.infer<typeof shema>;

interface educationProps {
  degree: string;
  startYear: number;
  endYear: number;
  istytutionName: string;
  fieldOfStudy: string;
}

export interface FormProperities {
  id: number;
  skills: string[];
  education: educationProps[];
}

interface Props {
  // receivedFormData: FormData;
  dataToSend: (data: FormProperities) => void;
}

const SecondForm = ({ dataToSend }: Props) => {
  return <div>SecondForm</div>;
};

export default SecondForm;
