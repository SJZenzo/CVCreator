import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../data/store";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import { zString } from "./FirstForm";
import { HStack } from "@chakra-ui/react";

const shema = z.object({
  profile: zString("Profil"),
});

type FormData = z.infer<typeof shema>;

interface WorkExpirienceProps {
  jobPosition: string;
  company: string;
  city: string;
  startDateYear: number;
  startDateMonth: number;
  endDateYear: number | null;
  endDateMonth: number | null;
  description: string;
}

interface CertificatesProps {
  description: string;
  organizer: string;
}

export interface ThirdFormProperities {
  profile: string | null;
  workExpirience: WorkExpirienceProps[] | null;
  certificates: CertificatesProps[] | null;
}

const ThirdForm = () => {
  const { thirdFormData, saveThirdForm } = useFormStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    saveThirdForm({ ...thirdFormData, profile: data.profile });
    navigate("/result");
  };

  return (
    <>
      <div className="container-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
          <FormInput
            inputType="profile"
            error={errors.profile?.message}
            hint="Profil"
            register={register}
            defaultValue={thirdFormData?.profile}
          />
        </form>
        <HStack justify="space-between" padding={4}>
          <NavButton onClick={() => navigate("/second")} buttonText="Wstecz" />
          <NavButton onClick={() => navigate("/result")} buttonText="Zakończ" />
        </HStack>
      </div>
    </>
  );
};

export default ThirdForm;
