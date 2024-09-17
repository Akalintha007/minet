import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  handleClick?: () => void;
}

const ButtonComponent:React.FC<Props> = ({handleClick}) => {
  return <Button onClick={handleClick}>click me !</Button>;
};

export default ButtonComponent;
