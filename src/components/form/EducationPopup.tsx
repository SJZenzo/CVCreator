import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogContainer from "./FormDialogContainer";
import { zString } from "./FirstForm";

const shema = z.object({
  degree: zString("Wykształcenie"),
  startDate: zString("Wprowadzenie daty"),
  endDate: zString("Wprowadzenie daty"),
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
    console.log(data.startDate);
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
    <FormDialogContainer
      onSubmit={handleSubmit(onSubmit)}
      dialogHeader="Dodawanie wykształcenia"
      isValid={isValid}
    >
      <FormInput
        inputType="degree"
        error={errors.degree?.message}
        hint="Poziom wykształcenia"
        register={register}
      />
      <FormInput
        inputType="startDate"
        error={errors.startDate?.message}
        hint="Rok początku"
        register={register}
        type="date"
      />
      <FormInput
        inputType="endDate"
        error={errors.endDate?.message}
        hint="Rok zakończenia"
        register={register}
        type="date"
      />
      <FormInput
        inputType="instytutionName"
        error={errors.instytutionName?.message}
        hint="Nazwa uczelni"
        register={register}
        expendableText={true}
      />
      <FormInput
        inputType="fieldOfStudy"
        error={errors.fieldOfStudy?.message}
        hint="Dziedzina studiów"
        register={register}
        expendableText={true}
      />
    </FormDialogContainer>
  );
};

export default EducationPopup;
