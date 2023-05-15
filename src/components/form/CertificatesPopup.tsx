import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogWindow from "./FormDialogWindow";
import { zString } from "./FirstForm";

const shema = z.object({
  description: zString("Opis kursu"),
  organization: zString("Nazwa organizatora"),
});

type FormData = z.infer<typeof shema>;

const CertificatesPopup = () => {
  const { thirdFormData, saveThirdForm } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (thirdFormData.certificates) {
      saveThirdForm({
        ...thirdFormData,
        certificates: [...thirdFormData.certificates, data],
      });
    } else {
      saveThirdForm({ ...thirdFormData, certificates: [data] });
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
            inputType="description"
            error={errors.description?.message}
            hint="Opis kursu"
            register={register}
          />
          <FormInput
            inputType="organization"
            error={errors.organization?.message}
            hint="Organizator"
            register={register}
          />
        </form>
      </FormDialogWindow>
    </div>
  );
};

export default CertificatesPopup;
