import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const NavButton = ({ children, onClick }: Props) => {
  return (
    <Button colorScheme="blue" marginBottom={5} onClick={onClick}>
      {children}
    </Button>
  );
};

export default NavButton;
