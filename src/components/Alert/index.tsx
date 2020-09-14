import React from "react";
import styled from "styled-components";
import {
  FiInfo,
  FiCheckCircle,
  FiAlertCircle,
  FiXCircle,
} from "react-icons/fi";

type types = "primary" | "secondary" | "success" | "warning" | "danger";
export type AlertProps = {
  type?: types;
  label?: string;
  size?: "large" | "small" | "x-small";
};

const BaseAlert = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 16px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  & > * {
    align-items: center;
    display: flex;
  }
`;

const PrimaryAlert = styled(BaseAlert)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.light};
`;

const SecondaryAlert = styled(BaseAlert)`
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const SuccessAlert = styled(BaseAlert)`
  background-color: ${({ theme }) => theme.palette.success.light};
  color: ${({ theme }) => theme.palette.success.main};
`;

const WarningAlert = styled(BaseAlert)`
  background-color: ${({ theme }) => theme.palette.warning.light};
  color: ${({ theme }) => theme.palette.warning.main};
`;

const DangerAlert = styled(BaseAlert)`
  background-color: ${({ theme }) => theme.palette.error.light};
  color: ${({ theme }) => theme.palette.error.main};
`;

const alertByType = {
  primary: PrimaryAlert,
  secondary: SecondaryAlert,
  success: SuccessAlert,
  warning: WarningAlert,
  danger: DangerAlert,
};

const iconByType = {
  primary: FiInfo,
  secondary: FiInfo,
  success: FiCheckCircle,
  warning: FiAlertCircle,
  danger: FiXCircle,
};

const IconLeftContainer = styled.div`
  margin-right: 16px;
`;

export function Alert({
  type = "primary",
  label,
  ...rest
}: AlertProps): React.ReactElement {
  const SelectedAlert = alertByType[type];
  const Icon = iconByType[type] || FiInfo;

  return (
    <SelectedAlert {...rest}>
      <IconLeftContainer>
        <Icon size={16} />
      </IconLeftContainer>
      {label}
    </SelectedAlert>
  );
}
