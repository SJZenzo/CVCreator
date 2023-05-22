import { HStack } from "@chakra-ui/react";
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
import FormContainer from "./FormContainer";
import EntryDataContainer from "./EntryDataContainer";

const shema = z.object({
  profile: zString("Wprowadzenie opisu"),
});

type FormData = z.infer<typeof shema>;

const SecondForm = () => {
  const {
    secondFormData,
    saveSecondFormProfile,
    deleteEducation,
    deleteLanguage,
  } = useFormStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    saveSecondFormProfile(data.profile);
    navigate("/third");
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} activeForm={1}>
      {secondFormData.educationDegree.length !== 0 ? (
        secondFormData.educationDegree.map((degree, index) => (
          <EntryDataContainer
            key={index}
            onDelete={() => deleteEducation(degree.id)}
          >
            <p>{degree.degree}</p>
            <p>
              {degree.startDate} - {degree.endDate ? degree.endDate : "obecnie"}
            </p>
            <p>{degree.instytutionName}</p>
            <p>{degree.fieldOfStudy}</p>
          </EntryDataContainer>
        ))
      ) : (
        <EntryDataContainer />
      )}

      <EducationPopup />
      {secondFormData.languages.length !== 0 ? (
        secondFormData.languages.map((lang, index) => (
          <EntryDataContainer
            key={index}
            onDelete={() => deleteLanguage(lang.id)}
          >
            <p>
              {lang.language}: {lang.level}
            </p>
          </EntryDataContainer>
        ))
      ) : (
        <EntryDataContainer noOfLine={1} />
      )}

      <LanguagesPopup />

      <FormInput
        inputType="profile"
        error={errors.profile?.message}
        hint="Profil"
        register={register}
        defaultValue={secondFormData?.profile}
        expendableText={true}
      />

      <HStack justify="space-between" padding={4}>
        <NavButton onClick={() => navigate("/")}>Wstecz</NavButton>
        <NavButton onClick={handleSubmit(onSubmit)}>Dalej</NavButton>
      </HStack>
    </FormContainer>
  );
};

export default SecondForm;
