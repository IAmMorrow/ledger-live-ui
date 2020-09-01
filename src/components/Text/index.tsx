import styled from "styled-components";

type HeadingProps = {
  as: "h1" | "h2" | "h3";
};

export const Heading = styled.span.attrs(({}) => {})``;

type TextProps = {
  as?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
};

export const Text = styled.span.attrs<TextProps>(({ as }) => ({
  as,
}))<TextProps>`
  font-size: ${({ theme, fontFamily }) =>
    fontFamily ? theme.typography.fontFamily : fontFamily};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.typography.fontSize : fontSize}px;
  font-weight: ${({ theme, fontWeight = "regular" }) =>
    theme.typography.fontWeight[fontWeight]}px;
`;
