import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div<{ separated?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 14px 0px;
  border-bottom: ${({ separated }) =>
    separated ? "solid 1px rgba(20, 37, 51, 0.05)" : "none"};
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

export type TableProps = {
  title: string;
  actions?: ReactNode;
  children: React.ReactElement;
};

function Table({ title, actions, children }: TableProps): React.ReactElement {
  return (
    <Container>
      <TableHeader separated>
        <Column>{title}</Column>
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
