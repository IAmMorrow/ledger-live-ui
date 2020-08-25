import React from "react";
import styled from "styled-components";

export type ButtonProps = {
    type?: "primary" | "secondary" | "disabled" | "link" | "alert" | "alert-secondary",
    IconLeft?: React.ReactNode,
    IconRight?: React.ReactNode,
    label?: string,
    size?: "large" | "small" | "x-small",
};

type BaseButtonProps = {
    size: string,
}

const paddingBySize = {
    "large": "12px 16px",
    "small": "10px 16px",
    "x-small": "7px 8px",
}

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
  background: #6490F1;
  color: white;
`

const SecondaryButton = styled(BaseButton)`
  color: rgba(20, 37, 51, 0.5);
  border: 1px solid rgba(20, 37, 51, 0.5);
  margin: -1px;
`

const LinkButton = styled(BaseButton)`
  color: #6490F1;
`

const AlertButton = styled(BaseButton)`
  background: #EA2E49;
  color: #FFFFFF;
`

const AlertSecondaryButton = styled(BaseButton)`
  background: rgba(234, 46, 73, 0.1);
  color: #EA2E49;
`

const buttonByType = {
    "primary": PrimaryButton,
    "secondary": SecondaryButton,
    "link": LinkButton,
    "alert": AlertButton,
    "alert-secondary": AlertSecondaryButton,
}

export function Button({ type = "primary", IconLeft, IconRight, label, size = "large", ...rest }: ButtonProps) {
    const SelectedButton = buttonByType[type];

    return (
        <SelectedButton
            size={size}
            {...rest}
        >
            {label}
        </SelectedButton>
    )
}