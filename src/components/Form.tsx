import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
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
  phoneNumber: z.number(),
  email: zString("Email"),
  linkedin: zString("Linkedin link"),
  city: zString("City name"),
});

type FormData = z.infer<typeof shema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
      <div className="row mb-3">
        <FormInput
          inputType="name"
          error={errors.name?.message}
          hint="Imie"
          register={register}
        />
        <FormInput
          inputType="surname"
          error={errors.surname?.message}
          hint="Nazwisko"
          register={register}
        />
        <FormInput
          inputType="positon"
          error={errors.positon?.message}
          hint="Stanowisko"
          register={register}
        />
        <FormInput
          inputType="phoneNumber"
          error={errors.phoneNumber?.message}
          hint="Numer telefonu"
          register={register}
          type="number"
        />
      </div>
      <div className="row mb-3">
        <FormInput
          inputType="email"
          error={errors.email?.message}
          hint="Email"
          register={register}
          type="email"
        />
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

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
