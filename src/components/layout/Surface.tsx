import styled from "styled-components";

export const Surface = styled.section`
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.shade[100]};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  overflow: hidden;
`;
