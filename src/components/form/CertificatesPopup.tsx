import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../../data/store";
import FormDialogContainer from "./FormDialogContainer";
import { zString } from "./FirstForm";

const shema = z.object({
  description: zString("Opis kursu"),
  organization: zString("Nazwa organizatora"),
});

type FormData = z.infer<typeof shema>;

const CertificatesPopup = () => {
  const { saveCertificates } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    saveCertificates({ ...data, id: Date.now() });

    reset();
  };

  return (
    <FormDialogContainer
      onSubmit={handleSubmit(onSubmit)}
      dialogHeader="Dodawanie certyfikatów"
      isValid={isValid}
    >
      <FormInput
        inputType="description"
        error={errors.description?.message}
        hint="Opis kursu"
        register={register}
        expendableText={true}
      />
      <FormInput
        inputType="organization"
        error={errors.organization?.message}
        hint="Organizator"
        register={register}
      />
    </FormDialogContainer>
  );
};

export default CertificatesPopup;
