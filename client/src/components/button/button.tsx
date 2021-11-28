import React from "react";
import { Button as BootstrapBtn } from "react-bootstrap";
import classNames from "classnames";

import { IButtonProps } from "./typedef";
import { IconPosition } from "./constants";

import "./button.scss";

const Button = ({
  title,
  className = "",
  icon,
  iconPosition = IconPosition.LEFT,
  ...props
}: IButtonProps) => {
  const isIconLeft = iconPosition === IconPosition.LEFT;
  const isIconRight = iconPosition === IconPosition.RIGHT;

  const classes = classNames("button", {
    "button_icon-left": isIconLeft,
    "button_icon-right": isIconRight,
    [className]: className,
  });
  return (
    <BootstrapBtn className={classes} {...props}>
      {isIconLeft && icon}
      {title && <span className="button__title">{title}</span>}
      {isIconRight && icon}
    </BootstrapBtn>
  );
};

export default Button;
