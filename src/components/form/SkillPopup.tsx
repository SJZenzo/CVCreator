import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogContainer from "./FormDialogContainer";

const shema = z.object({
  skill: z.string().min(3, { message: "Skill must be at least 3 charakters" }),
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
