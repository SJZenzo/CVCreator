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

export interface FormProperities {
  id: number;
  name: string;
  surname: string;
  positon: string;
  phoneNumber: number;
  email: string;
  linkedin: string;
  city: string;
}

interface Props {
  receivedFormData: FormData;
  dataToSend: (data: FormProperities) => void;
}

const Form = ({ dataToSend }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    let obj = {
      id: 0,
      name: data.name,
      surname: data.surname,
      positon: data.positon,
      phoneNumber: data.phoneNumber,
      email: data.email,
      linkedin: data.linkedin,
      city: data.city,
    };
    dataToSend(obj);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
      <div className="container-sm">
        <div className="row">
          <FormInput
            inputType="name"
            error={errors.name?.message}
            hint="Imię"
            register={register}
          />
          <FormInput
            inputType="surname"
            error={errors.surname?.message}
            hint="Nazwisko"
            register={register}
          />
        </div>
        <FormInput
          inputType="positon"
          error={errors.positon?.message}
          hint="Stanowisko"
          register={register}
        />
        <div className="row">
          <FormInput
            inputType="phoneNumber"
            error={errors.phoneNumber?.message}
            hint="Numer telefonu"
            register={register}
            type="number"
          />
          <FormInput
            inputType="email"
            error={errors.email?.message}
            hint="Email"
            register={register}
            type="email"
          />
        </div>
        <div className="row">
          <FormInput
            inputType="linkedin"
            error={errors.linkedin?.message}
            hint="Linkedin link"
            register={register}
            type="link"
          />
          <FormInput
            inputType="city"
            error={errors.city?.message}
            hint="Miasto"
            register={register}
          />
        </div>
        <button
          className="btn btn-primary mb-3"
          type="submit"
          style={{ float: "right" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
