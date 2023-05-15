import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogWindow from "./FormDialogWindow";
import { zNumber, zString } from "./FirstForm";

const shema = z.object({
  degree: zString("Wykształcenie"),
  startYear: zNumber("Pole roku"),
  endYear: zNumber("Pole roku"),
  instytutionName: zString("Nazwa firmy"),
  fieldOfStudy: zString("Kierunek studiów"),
});

type FormData = z.infer<typeof shema>;

const EducationPopup = () => {
  const { secondFormData, saveSecondForm } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (secondFormData.educationDegree) {
      saveSecondForm({
        ...secondFormData,
        educationDegree: [...secondFormData.educationDegree, data],
      });
    } else {
      saveSecondForm({ ...secondFormData, educationDegree: [data] });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            inputType="degree"
            error={errors.degree?.message}
            hint="Poziom wykształcenia"
            register={register}
          />
          <FormInput
            inputType="startYear"
            error={errors.startYear?.message}
            hint="Rok początku"
            register={register}
            type="date"
          />
          <FormInput
            inputType="endYear"
            error={errors.endYear?.message}
            hint="Rok zakończenia"
            register={register}
            type="date"
          />
          <FormInput
            inputType="instytutionName"
            error={errors.instytutionName?.message}
            hint="Nazwa uczelni"
            register={register}
          />
          <FormInput
            inputType="fieldOfStudy"
            error={errors.fieldOfStudy?.message}
            hint="Dziedzina studiów"
            register={register}
          />
        </form>
      </FormDialogWindow>
    </div>
  );
};

export default EducationPopup;
