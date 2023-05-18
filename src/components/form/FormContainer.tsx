import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Form } from "react-router-dom";

interface Props {
  children: ReactNode;
  onSubmit: () => void;
}

const FormContainer = ({ children, onSubmit }: Props) => {
  return (
    <Container maxW="800px" shadow="lg" rounded="lg" my="40px">
      <Form onSubmit={onSubmit} className="m-3 mt-5">
        {children}
      </Form>
    </Container>
  );
};

export default FormContainer;
