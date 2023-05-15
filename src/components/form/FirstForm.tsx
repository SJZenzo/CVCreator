import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import NavButton from "../navigation/NavButton";
import { useNavigate } from "react-router-dom";

export const zString = (message: String) => {
  return z
    .string()
    .min(3, { message: message + " musi zawierać przynajmniej 3 znaki" });
};

export const zNumber = (message: String) => {
  return z.number({ invalid_type_error: message + " jest wymagane" });
};

const shema = z.object({
  name: zString("Imię"),
  surname: zString("Nazwisko"),
  position: zString("Stanowisko"),
  phoneNumber: zNumber("Pole numeru telefonu"),
  email: zString("Email"),
  linkedin: zString("Linkedin link"),
  city: zString("Miasto"),
});

type FormData = z.infer<typeof shema>;

const FirstForm = () => {
  const { firstFormData, saveFirstForm } = useFormStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    saveFirstForm(data);
    navigate("second");
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
            defaultValue={firstFormData?.name}
          />
          <FormInput
            inputType="surname"
            error={errors.surname?.message}
            hint="Nazwisko"
            register={register}
            defaultValue={firstFormData?.surname}
          />
        </div>
        <div className="row">
          <FormInput
            inputType="position"
            error={errors.position?.message}
            hint="Stanowisko"
            register={register}
            defaultValue={firstFormData?.position}
          />

          <FormInput
            inputType="phoneNumber"
            error={errors.phoneNumber?.message}
            hint="Numer telefonu"
            register={register}
            type="number"
            defaultValue={firstFormData?.phoneNumber}
          />
        </div>
        <div className="row">
          <FormInput
            inputType="email"
            error={errors.email?.message}
            hint="Email"
            register={register}
            type="email"
            defaultValue={firstFormData?.email}
          />
          <FormInput
            inputType="city"
            error={errors.city?.message}
            hint="Miasto"
            register={register}
            defaultValue={firstFormData?.city}
          />
        </div>
        <FormInput
          inputType="linkedin"
          error={errors.linkedin?.message}
          hint="Linkedin link"
          register={register}
          type="link"
          defaultValue={firstFormData?.linkedin}
        />
        <div style={{ float: "right" }}>
          <NavButton buttonText="Dalej" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </form>
  );
};

export default FirstForm;
