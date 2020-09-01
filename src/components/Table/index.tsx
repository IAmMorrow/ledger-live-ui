import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div<{ separated?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 14px 0px;
  border-bottom: ${({ theme, separated }) =>
    separated ? `solid 1px ${theme.palette.divider}` : "none"};
  align-items: center;
`;

const HeaderRow = styled(Row)`
  background: rgba(20, 37, 51, 0.02);
  color: rgba(20, 37, 51, 0.5);
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

const TableHeader = styled(Row)`
  justify-content: space-between;
`;

const Column = styled.div<{ flex?: string; textAlign?: string }>`
  padding: 0 24px;
  flex: ${({ flex }) => flex || "none"};
  text-align: ${({ textAlign }) => textAlign || "initial"};
`;

const TableTitle = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  align-items: center;

  color: ${({ theme }) => theme.palette.shade[100]};
`;

export type TableProps = {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactElement;
};

function Table({ title, actions, children }: TableProps): React.ReactElement {
  return (
    <Container>
      <TableHeader separated>
        <Column>
          <TableTitle>{title}</TableTitle>
        </Column>
        <Column>{actions}</Column>
      </TableHeader>
      {children}
    </Container>
  );
}

Table.Column = Column;
Table.HeaderRow = HeaderRow;
Table.Row = Row;

export { Table };
