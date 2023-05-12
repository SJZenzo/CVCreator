import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../data/store";
import FormDialogWindow from "./FormDialogWindow";
import { zNumber, zString } from "./FirstForm";

const shema = z.object({
  jobPosition: zString("Stanowisko"),
  company: zString("Nazwa firmy"),
  city: zString("Miasto"),
  startDateYear: zNumber("Wprowadzenie roku"),
  startDateMonth: zNumber("Wprowadzenie miesiąca"),
  endDateYear: zNumber("Wprowadzenie roku"),
  endDateMonth: zNumber("Wprowadzenie miesiąca"),
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
    <div
      className="m-3"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormDialogWindow
        onSubmit={handleSubmit(onSubmit)}
        dialogHeader="Dodawanie doświadzcenia"
        isValid={isValid}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
          <FormInput
            inputType="jobPosition"
            error={errors.jobPosition?.message}
            hint="Obejmowane stanowisko"
            register={register}
          />
          <FormInput
            inputType="company"
            error={errors.company?.message}
            hint="Nazwa firmy"
            register={register}
          />
          <FormInput
            inputType="city"
            error={errors.city?.message}
            hint="Siedziba firmy"
            register={register}
          />
          <FormInput
            inputType="startDateYear"
            error={errors.startDateYear?.message}
            hint="Rok rozpoczęcia pracy"
            register={register}
            type="number"
          />
          <FormInput
            inputType="startDateMonth"
            error={errors.startDateMonth?.message}
            hint="Miesiąc rozpoczęcia pracy"
            register={register}
            type="number"
          />
          <FormInput
            inputType="endDateYear"
            error={errors.endDateYear?.message}
            hint="Rok zakończenia pracy"
            register={register}
            type="number"
          />
          <FormInput
            inputType="endDateMonth"
            error={errors.endDateMonth?.message}
            hint="Miesiąc zakończenia pracy"
            register={register}
            type="number"
          />
          <FormInput
            inputType="description"
            error={errors.description?.message}
            hint="Opis"
            register={register}
          />
        </form>
      </FormDialogWindow>
    </div>
  );
};

export default WorkExpPopup;
