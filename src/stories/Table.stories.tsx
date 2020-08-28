import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Table, TableProps } from "../components/Table";
import { Button } from "../components/Button";

export default {
  title: "UI/Table",
  component: Table,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const TestTable = Template.bind({});
TestTable.args = {
  title: "Votes",
  actions: (
    <>
      <Button label="Manage votes" type="link" size="x-small" />
      <Button label="Claim rewards (TRX 0.42069)" type="link" size="x-small" />
    </>
  ),
  children: (
    <>
      <Table.HeaderRow separated>
        <Table.Column flex="1">Validator</Table.Column>
        <Table.Column flex="2" textAlign="right">
          Amount
        </Table.Column>
        <Table.Column flex="2" textAlign="right">
          % used of TP
        </Table.Column>
        <Table.Column flex="1" textAlign="right">
          Duration
        </Table.Column>
      </Table.HeaderRow>
      <Table.Row separated>
        <Table.Column flex="1">aaa</Table.Column>
        <Table.Column textAlign="right" flex="2">
          bbb
        </Table.Column>
        <Table.Column textAlign="right" flex="2">
          ccc
        </Table.Column>
        <Table.Column textAlign="right" flex="1">
          ddd
        </Table.Column>
      </Table.Row>
      <Table.Row separated>
        <Table.Column flex="1">aaa</Table.Column>
        <Table.Column textAlign="right" flex="2">
          bbb
        </Table.Column>
        <Table.Column textAlign="right" flex="2">
          ccc
        </Table.Column>
        <Table.Column textAlign="right" flex="1">
          ddd
        </Table.Column>
      </Table.Row>
      <Table.Row separated>
        <Table.Column flex="1">eee</Table.Column>
        <Table.Column textAlign="right" flex="2">
          fff
        </Table.Column>
        <Table.Column textAlign="right" flex="2">
          ggg
        </Table.Column>
        <Table.Column textAlign="right" flex="1">
          hhh
        </Table.Column>
      </Table.Row>
      <Table.Row separated>
        <Table.Column flex="1">eee</Table.Column>
        <Table.Column textAlign="right" flex="2">
          iii
        </Table.Column>
        <Table.Column textAlign="right" flex="2">
          jjj
        </Table.Column>
        <Table.Column textAlign="right" flex="1">
          kkk
        </Table.Column>
      </Table.Row>
    </>
  ),
};
