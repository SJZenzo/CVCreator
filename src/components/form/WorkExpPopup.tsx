import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogContainer from "./FormDialogContainer";
import { zString } from "./FirstForm";

const shema = z.object({
  jobPosition: zString("Stanowisko"),
  company: zString("Nazwa firmy"),
  city: zString("Miasto"),
  startDate: zString("Wprowadzenie daty"),
  endDate: zString("Wprowadzenie daty"),
  description: zString("Opis"),
});

type FormData = z.infer<typeof shema>;

const WorkExpPopup = () => {
  const { thirdFormData, saveThirdForm } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (thirdFormData.workExpirience) {
      saveThirdForm({
        ...thirdFormData,
        workExpirience: [...thirdFormData.workExpirience, data],
      });
    } else {
      saveThirdForm({ ...thirdFormData, workExpirience: [data] });
    }

    reset();
  };

  return (
    <FormDialogContainer
      onSubmit={handleSubmit(onSubmit)}
      dialogHeader="Dodawanie doświadzcenia"
      isValid={isValid}
    >
      <FormInput
        inputType="jobPosition"
        error={errors.jobPosition?.message}
        hint="Obejmowane stanowisko"
        register={register}
        expendableText={true}
      />
      <FormInput
        inputType="company"
        error={errors.company?.message}
        hint="Nazwa firmy"
        register={register}
        expendableText={true}
      />
      <FormInput
        inputType="city"
        error={errors.city?.message}
        hint="Siedziba firmy"
        register={register}
      />
      <FormInput
        inputType="startDate"
        error={errors.startDate?.message}
        hint="Rok rozpoczęcia pracy"
        register={register}
        type="date"
      />
      <FormInput
        inputType="endDate"
        error={errors.endDate?.message}
        hint="Rok zakończenia pracy"
        register={register}
        type="date"
      />
      <FormInput
        inputType="description"
        error={errors.description?.message}
        hint="Opis"
        register={register}
        expendableText={true}
      />
    </FormDialogContainer>
  );
};

export default WorkExpPopup;
