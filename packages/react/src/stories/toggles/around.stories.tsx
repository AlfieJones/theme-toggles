import React from "react";
import { Story, Meta } from "@storybook/react";
import { ToggleProps } from "../../types";
import Around from "../../toggles/around";

export default {
  title: "Around",
  argTypes: {
    duration: {
      control: { type: "range", min: 0, max: 5000, step: 100 },
    },
    reversed: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    title: {
      control: { type: "text" },
      defaultValue: "Toggle theme",
    },
    forceMotion: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta<ToggleProps<"button">>;

const ButtonTemplate: Story<ToggleProps<"button">> = (args) => {
  const [xsToggled, setXsToggle] = React.useState(false);
  const [smToggled, setSmToggle] = React.useState(false);
  const [mdToggled, setMdToggle] = React.useState(false);
  const [lgToggled, setLgToggle] = React.useState(false);

  return (
    <>
      <Around
        toggled={xsToggled}
        onToggle={setXsToggle}
        idPrefix="xs"
        className={`xs ${args.className || ""}`}
        {...args}
      />
      <Around
        toggled={smToggled}
        onToggle={setSmToggle}
        idPrefix="sm"
        className={`sm ${args.className || ""}`}
        {...args}
      />
      <Around
        toggled={mdToggled}
        onToggle={setMdToggle}
        idPrefix="mg"
        className={`md ${args.className || ""}`}
        {...args}
      />
      <Around
        toggled={lgToggled}
        onToggle={setLgToggle}
        idPrefix="lg"
        className={`lg ${args.className || ""}`}
        {...args}
      />
    </>
  );
};

export const Button = ButtonTemplate.bind({});
Button.args = {};
