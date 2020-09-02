import React from "react";
import styled from "styled-components";

type GenericTextProps = {
  as?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  fontStyle?: string;
  lineHeight?: number;
  color?: string;
};

const GenericText = styled.span.attrs(({ as }: GenericTextProps) => ({
  as: as,
}))<GenericTextProps>`
  font-size: ${({ fontSize, theme }) => fontSize ? `${fontSize}px` : theme.typography.fontSize};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.typography.fontFamily};
  font-weight: ${({ fontWeight, theme }) => fontWeight || theme.typography.fontWeight.regular};
  font-style: ${({ fontStyle }) => fontStyle || "inherit"};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : "1.5")};
`;

const H1 = styled(GenericText).attrs(({ theme }) => ({
  ...theme.typography.h1,
  as: "h1",
}))`
  
`

const textComponents = {
  h1: H1,
};

type TextProps = {
  type?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  color?: string;
  children?: string;
};

export function Text({ type, fontSize, fontFamily, fontWeight, lineHeight, color, children }: TextProps): React.ReactElement {
  const TextComponent = type ? textComponents[type] : GenericText;

  return (
    <TextComponent
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
    >
      {children}
    </TextComponent>
  );
}
