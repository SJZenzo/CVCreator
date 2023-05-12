import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../data/store";
import FormDialogWindow from "./FormDialogWindow";

const shema = z.object({
  skill: z.string().min(3, { message: "Skill must be at least 3 charakters" }),
});

type FormData = z.infer<typeof shema>;

const SkillPopup = () => {
  const { secondFormData, saveSecondForm } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (secondFormData.skills) {
      saveSecondForm({
        ...secondFormData,
        skills: [...secondFormData.skills, data.skill],
      });
    } else {
      saveSecondForm({ ...secondFormData, skills: [data.skill] });
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
        dialogHeader="Dodawanie umiejętności"
        isValid={isValid}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            inputType="skill"
            error={errors.skill?.message}
            hint="Opis umiejętności"
            register={register}
          />
        </form>
      </FormDialogWindow>
    </div>
  );
};

export default SkillPopup;
