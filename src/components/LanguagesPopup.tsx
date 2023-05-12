import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../data/store";
import FormDialogWindow from "./FormDialogWindow";
import { zString } from "./FirstForm";

const shema = z.object({
  language: zString("Język"),
  level: zString("Poziom"),
});

type FormData = z.infer<typeof shema>;

const LanguagesPopup = () => {
  const { secondFormData, saveSecondForm } = useFormStore();

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
        dialogHeader="Dodawanie wykształcenia"
        isValid={isValid}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
          <FormInput
            inputType="language"
            error={errors.language?.message}
            hint="Język"
            register={register}
          />
          <FormInput
            inputType="level"
            error={errors.level?.message}
            hint="Poziom"
            register={register}
          />
        </form>
      </FormDialogWindow>
    </div>
  );
};

export default LanguagesPopup;
