import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useFormStore from "../data/store";

const shema = z.object({
  skill: z.string().min(3, { message: "Skill must be at least 3 charakters" }),
});

type FormData = z.infer<typeof shema>;

const SkillPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  //const { secondFormData, saveSecondForm } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // if (secondFormData) {
    //   var obj = secondFormData.skills;
    //   obj = obj.push(data);
    // }

    // var str = data
    // var obj = [''];
    // obj = obj.push(str);
    // saveSecondForm();
    reset();
    onClose();
  };

  return (
    <div>
      <Button onClick={onOpen}>Dodaj umiejętność</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Dodawnie umiejętności</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="m-3 form-floating"
            >
              <FormInput
                inputType="skill"
                error={errors.skill?.message}
                hint="Opis umiejętności"
                register={register}
              />
            </form>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleSubmit(onSubmit)}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SkillPopup;
