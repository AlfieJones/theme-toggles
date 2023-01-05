import { Story, Meta } from "@storybook/html";
import { BaseTogglePropsType } from "../../utils";
import ButtonComponent from "./lightbulb.button";
import DivComponent from "./lightbulb.div";
import CheckboxComponent from "./lightbulb.checkbox";

export default {
  title: "Lightbulb",
  argTypes: {
    reversed: {
      control: {
        type: "boolean",
      },
    },
  },
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

const CheckboxTemplate: Story<BaseTogglePropsType> = (args) => {
  return CheckboxComponent(args);
};

export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {};
