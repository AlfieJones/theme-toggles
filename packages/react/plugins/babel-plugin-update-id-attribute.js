const core = require("@babel/core");
const template = core.template;
const t = core.types;

const removeJSXAttribute = () => ({
  visitor: {
    JSXOpeningElement(path) {
      if (!t.isJSXIdentifier(path.node.name)) return;

      path.get("attributes").forEach((attribute) => {
        if (
          t.isJSXAttribute(attribute.node) &&
          t.isJSXIdentifier(attribute.node.name)
        ) {
          if(attribute.node.name.name === "id"){
            attribute.node.value = t.jsxExpressionContainer(
              template.ast(`\`\${idPrefix}${attribute.node.value.value}\``)
                .expression
            );
          } else if (attribute.node.name.name === "clipPath"){
            attribute.node.value = t.jsxExpressionContainer(
              template.ast(`\`url(#\${idPrefix}${attribute.node.value.value.replace("url(#", "")}\``)
                .expression
            );
          }
        }
      });
    },
  },
});

module.exports = removeJSXAttribute;
