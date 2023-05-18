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
import React, { ReactNode } from "react";
import { Form } from "react-router-dom";

interface Props {
  children: ReactNode;
  onSubmit: () => void;
  isValid?: boolean;
  dialogHeader: string;
}

const FormDialogContainer = ({
  children,
  isValid = true,
  dialogHeader,
  onSubmit,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <div
      className="m-3"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button onClick={onOpen}>{dialogHeader}</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{dialogHeader}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Form onSubmit={onSubmit} className="m-3 form-floating">
              {children}
            </Form>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Anuluj
            </Button>
            <Button
              colorScheme="blue"
              ml={3}
              onClick={() => {
                onSubmit();
                if (isValid) onClose();
              }}
            >
              Dodaj
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FormDialogContainer;
