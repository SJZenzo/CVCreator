interface Props {
  buttonText: string;
  onClick?: () => void;
}

const NavButton = ({ buttonText, onClick }: Props) => {
  return (
    <button className="btn btn-primary my-3" type="submit" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default NavButton;
