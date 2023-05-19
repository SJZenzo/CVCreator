import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Form } from "react-router-dom";
import StepperNavigation from "../navigation/StepperNavigation";

interface Props {
  children: ReactNode;
  onSubmit: () => void;
  activeForm: number;
}

const FormContainer = ({ children, onSubmit, activeForm }: Props) => {
  return (
    <Container maxW="800px" shadow="lg" rounded="lg" my="40px">
      <StepperNavigation setStep={activeForm} />
      <Form onSubmit={onSubmit} className="m-3 mt-5">
        {children}
      </Form>
    </Container>
  );
};

export default FormContainer;
