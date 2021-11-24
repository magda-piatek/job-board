import React from "react";
import { Button as BootstrapBtn } from "react-bootstrap";
import classNames from "classnames";

import { IButtonProps } from "./typedef";

import "./button.scss";

const Button = ({
  title,
  className = "",
  // iconPosition = IconPosition.LEFT,
  icon,
  ...props
}: IButtonProps) => {
  // const isIconLeft = iconPosition === IconPosition.LEFT;
  // const isIconRight = iconPosition === IconPosition.RIGHT;

  const classes = classNames("button", {
    [className]: className,
  });

  return (
    <BootstrapBtn className={classes} {...props}>
      {title && <span className="button__title">{title}</span>}
    </BootstrapBtn>
  );
};

export default Button;
