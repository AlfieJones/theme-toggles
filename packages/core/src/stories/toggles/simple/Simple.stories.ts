import { Story, Meta } from "@storybook/html";
import { BaseTogglePropsType } from "../../utils";
import ButtonComponent from "./Simple.Button";
import DivComponent from "./Simple.Div";

export default {
  title: "Simple",
  argTypes: {},
} as Meta<BaseTogglePropsType>;

const ButtonTemplate: Story<BaseTogglePropsType> = (args) => {
  return ButtonComponent(args);
};

export const Button = ButtonTemplate.bind({});
Button.args = {};


const DivTemplate: Story<BaseTogglePropsType> = (args) => {
  return DivComponent(args);
};

export const Div = DivTemplate.bind({});
Div.args = {};