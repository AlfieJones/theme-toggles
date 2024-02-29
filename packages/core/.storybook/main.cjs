module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../assets/svgs"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {}
  },

  features: {
    storyStoreV7: true,
  },

  docs: {
    autodocs: true
  }
};
