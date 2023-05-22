import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogContainer from "./FormDialogContainer";
import { zString } from "./FirstForm";

const shema = z.object({
  skill: zString("Wprowadzenie opisu")
});

type FormData = z.infer<typeof shema>;

const SkillPopup = () => {
  const { saveSkills } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    saveSkills({ ...data, id: Date.now() });

    reset();
  };

  return (
    <FormDialogContainer
      onSubmit={handleSubmit(onSubmit)}
      dialogHeader="Dodawanie umiejętności"
      isValid={isValid}
    >
      <FormInput
        inputType="skill"
        error={errors.skill?.message}
        hint="Opis umiejętności"
        register={register}
        expendableText={true}
      />
    </FormDialogContainer>
  );
};

export default SkillPopup;
