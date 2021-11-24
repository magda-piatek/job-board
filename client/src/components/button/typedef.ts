import { ButtonProps } from "react-bootstrap";

export interface IButtonProps extends ButtonProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}
