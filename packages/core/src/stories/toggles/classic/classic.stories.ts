import { Story, Meta } from "@storybook/html";
import { BaseTogglePropsType } from "../../utils";
import ButtonComponent from "./classic.button";
import DivComponent from "./classic.div";
import CheckboxComponent from "./classic.checkbox";

export default {
  title: "Classic",
  argTypes: {
    reversed: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    duration: {
      control: { type: "range", min: 0, max: 5000, step: 100 },
      defaultValue: 500,
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
