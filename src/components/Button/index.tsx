import React from "react";
import styled from "styled-components";

export type ButtonProps = {
  type?:
    | "primary"
    | "secondary"
    | "disabled"
    | "link"
    | "alert"
    | "alert-secondary";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  size?: "large" | "small" | "x-small";
};

type BaseButtonProps = {
  size: string;
};

const paddingBySize = {
  large: "12px 16px",
  small: "10px 16px",
  "x-small": "7px 8px",
};

const BaseButton = styled.button<BaseButtonProps>`
  font-size: 12px;
  line-height: 1.5;
  font-family: Inter;
  box-sizing: border-box;
  font-weight: bold;
  border: 0;
  padding: ${({ size }) => paddingBySize[size]};
  cursor: pointer;
  border-radius: 4px;
  user-select: none;
  background-color: transparent;

  &:disabled {
    background: rgba(20, 37, 51, 0.1);
    color: rgba(20, 37, 51, 0.3);
    cursor: auto;
  }

  &:focus {
    outline: 0;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: #6490f1;
  color: white;
`;

const SecondaryButton = styled(BaseButton)`
  color: rgba(20, 37, 51, 0.5);
  border: 1px solid rgba(20, 37, 51, 0.5);
  margin: -1px;
`;

const LinkButton = styled(BaseButton)`
  color: #6490f1;
`;

const AlertButton = styled(BaseButton)`
  background: #ea2e49;
  color: #ffffff;
`;

const AlertSecondaryButton = styled(BaseButton)`
  background: rgba(234, 46, 73, 0.1);
  color: #ea2e49;
`;

const buttonByType = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  link: LinkButton,
  alert: AlertButton,
  "alert-secondary": AlertSecondaryButton,
};

const IconRightContainer = styled.div`
  margin-left: 8px;
`;

const IconLeftContainer = styled.div`
  margin-right: 8px;
`;

export function Button({
  type = "primary",
  leftIcon,
  rightIcon,
  label,
  size = "large",
  ...rest
}: ButtonProps): React.ReactElement {
  const SelectedButton = buttonByType[type];

  return (
    <SelectedButton size={size} {...rest}>
      {leftIcon ? <IconLeftContainer>{leftIcon}</IconLeftContainer> : null}
      {label}
      {rightIcon ? <IconRightContainer>{rightIcon}</IconRightContainer> : null}
    </SelectedButton>
  );
}
