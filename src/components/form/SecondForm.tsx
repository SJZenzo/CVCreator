import { HStack, List, ListItem, OrderedList } from "@chakra-ui/react";
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {secondFormData.educationDegree ? (
        <List>
          {secondFormData.educationDegree.map((degree, index) => (
            <EntryDataContainer>
              <ListItem key={index}>
                <p>{degree.degree}</p>
                <p>
                  {degree.startDate} - {degree.endDate}
                </p>
                <p>{degree.instytutionName}</p>
                <p>{degree.fieldOfStudy}</p>
              </ListItem>
            </EntryDataContainer>
          ))}
        </List>
      ) : (
        <EntryDataContainer />
      )}

      <EducationPopup />
      {secondFormData.languages ? (
        <List>
          {secondFormData.languages.map((lang, index) => (
            <EntryDataContainer>
              <ListItem key={index}>
                {lang.language}: {lang.level}
              </ListItem>
            </EntryDataContainer>
          ))}
        </List>
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
