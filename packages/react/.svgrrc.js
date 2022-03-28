module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-add-jsx-attribute",
          {
            elements: ["svg"],
            attributes: [
              {
                name: "aria-hidden",
                value: "true",
                spread: false,
                literal: false,
                position: "start",
              },
            ],
          },
        ],
        ["./plugins/babel-plugin-update-id-attribute.js"],
      ],
    },
  },
};
