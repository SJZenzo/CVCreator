import { Box, HStack } from "@chakra-ui/react";
import useFormStore from "../../data/store";
import NavButton from "../navigation/NavButton";
import EducationPopup from "./EducationPopup";
import { useNavigate } from "react-router-dom";
import LanguagesPopup from "./LanguagesPopup";
import FormInput from "./FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { zString } from "./FirstForm";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

const shema = z.object({
  profile: zString("Profil"),
});

type FormData = z.infer<typeof shema>;

const SecondForm = () => {
  const { secondFormData, saveSecondForm } = useFormStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    saveSecondForm({ ...secondFormData, profile: data.profile });
    navigate("/third");
  };

  return (
    <Box className="container-sm">
      <ul>
        {secondFormData.educationDegree?.map((degree, index) => (
          <li key={index}>
            <p>{degree.degree}</p>
            <p>
              {degree.startYear} - {degree.endYear}
            </p>
            <p>{degree.instytutionName}</p>
            <p>{degree.fieldOfStudy}</p>
          </li>
        ))}
      </ul>
      <EducationPopup />

      <ul>
        {secondFormData.languages?.map((lang, index) => (
          <li key={index}>
            {lang.language}: {lang.level}
          </li>
        ))}
      </ul>

      <LanguagesPopup />

      <form onSubmit={handleSubmit(onSubmit)} className="m-3 form-floating">
        <FormInput
          inputType="profile"
          error={errors.profile?.message}
          hint="Profil"
          register={register}
          defaultValue={secondFormData?.profile}
        />
      </form>

      <HStack justify="space-between" padding={4}>
        <NavButton onClick={() => navigate("/")} buttonText="Wstecz" />
        <NavButton onClick={handleSubmit(onSubmit)} buttonText="Dalej" />
      </HStack>
    </Box>
  );
};

export default SecondForm;
