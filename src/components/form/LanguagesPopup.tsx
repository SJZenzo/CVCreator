import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogWindow from "./FormDialogWindow";
import { zString } from "./FirstForm";
import { Select } from "@chakra-ui/react";

const shema = z.object({
  language: zString("Język"),
  level: z.string().min(3, { message: "Poziom wymagany" }),
});

type FormData = z.infer<typeof shema>;

const LanguagesPopup = () => {
  const { secondFormData, saveSecondForm } = useFormStore();

  const languageLevels = [
    "",
    "A1 - Początkujący",
    "A2 - Podstawowy",
    "B1 - Średnio zaawansowany",
    "B2 - Ponad średnio zaawansowany",
    "C1 - Zaawansowany",
    "C2 - Biegły",
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (secondFormData.languages) {
      saveSecondForm({
        ...secondFormData,
        languages: [...secondFormData.languages, data],
      });
    } else {
      saveSecondForm({ ...secondFormData, languages: [data] });
    }

    reset();
  };

  return (
    <div
      className="m-3"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormDialogWindow
        onSubmit={handleSubmit(onSubmit)}
        dialogHeader="Dodawanie języka"
        isValid={isValid}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
          <FormInput
            inputType="language"
            error={errors.language?.message}
            hint="Język"
            register={register}
          />

          <div className="col-md mb-3">
            Poziom
            <Select {...register("level")}>
              {languageLevels.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </Select>
            {errors.level?.message && (
              <p className="text-danger">{errors.level?.message}</p>
            )}
          </div>
        </form>
      </FormDialogWindow>
    </div>
  );
};

export default LanguagesPopup;