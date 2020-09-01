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
    background-color: ${({ theme }) => theme.palette.shade[10]};
    color: ${({ theme }) => theme.palette.shade[30]};
    cursor: auto;
  }

  &:focus {
    outline: 0;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const SecondaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.palette.shade[50]};
  border: ${({ theme }) => `1px solid ${theme.palette.shade[50]}`};
  margin: -1px;
`;

const LinkButton = styled(BaseButton)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const AlertButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.palette.error.main};
  color: ${({ theme }) => theme.palette.error.contrastText};
`;

const AlertSecondaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.palette.error.light};
  color: ${({ theme }) => theme.palette.error.main};
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
