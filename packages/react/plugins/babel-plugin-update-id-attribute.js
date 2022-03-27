const core = require("@babel/core");
const template = core.template;
const t = core.types;


const removeJSXAttribute = () => ({
  visitor: {
    JSXOpeningElement(path) {
      if (!t.isJSXIdentifier(path.node.name)) return

      path.get('attributes').forEach((attribute) => {
        if (
          t.isJSXAttribute(attribute.node) &&
          t.isJSXIdentifier(attribute.node.name) &&
          attribute.node.name.name === "id"
        ) {
          attribute.node.value = t.jsxExpressionContainer(
              (template.ast(`\`\${idPrefix}${attribute.node.value.value}\``)).expression,
            )
        }
      })
    },
  },
})

module.exports = removeJSXAttribute;