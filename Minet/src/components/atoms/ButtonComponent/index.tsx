import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  handleClick?: () => void;
  children: string;
  varient:  "text" | "outlined" | "contained" | undefined
}

const ButtonComponent: React.FC<Props> = ({ handleClick, children, varient }) => {
  return <Button onClick={handleClick} variant={varient}>{children}</Button>;
};

export default ButtonComponent;
