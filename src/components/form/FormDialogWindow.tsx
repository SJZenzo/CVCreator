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

interface Props {
  children: ReactNode;
  onSubmit: () => void;
  isValid?: boolean;
  dialogHeader: string;
}

const FormDialogWindow = ({
  children,
  isValid = true,
  dialogHeader,
  onSubmit,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <div>
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
          <AlertDialogBody>{children}</AlertDialogBody>
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

export default FormDialogWindow;
