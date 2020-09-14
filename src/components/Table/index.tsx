import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 0px;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
`;

const HeaderRow = styled(Row)`
  background: ${({ theme }) => theme.palette.shade[2]};
  color: ${({ theme }) => theme.palette.shade[50]};
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const TableHeader = styled(Row)`
  justify-content: space-between;
  border-bottom: ${({ theme }) => `solid 1px ${theme.palette.divider}`};
`;

const TableFooter = styled(Row)`
  justify-content: center;
  border-top: ${({ theme }) => `solid 1px ${theme.palette.divider}`};
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

const TableBody = styled.div<{ separated?: boolean }>`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    border-bottom: ${({ theme, separated }) =>
      separated ? `solid 1px ${theme.palette.divider}` : "none"};
  }
`;

export type TableProps = {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactElement;
};

function Table({ title, actions, children }: TableProps): React.ReactElement {
  return (
    <Container>
      <TableHeader>
        <Column>
          <TableTitle>{title}</TableTitle>
        </Column>
        <Column>{actions}</Column>
      </TableHeader>
      <TableBody separated>{children}</TableBody>
      <TableFooter>lol</TableFooter>
    </Container>
  );
}

Table.Column = Column;
Table.HeaderRow = HeaderRow;
Table.Row = Row;

export { Table };
