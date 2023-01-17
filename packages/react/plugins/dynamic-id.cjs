const t = require("@babel/core").types;
const template = require("@babel/core").template;

const getValueWithProps = (value, { prefix, suffix }) =>
  `${prefix ? "${props.idPrefix || ''}" : ""}${value}${
    suffix ? "${props.idSuffix || ''}" : ""
  }`;

const getAttributeValue = (value, opts) => {
  let id = "";
  let prefix = "";
  let suffix = "";
  if (value && value.charAt(0) === "#") {
    id = value.slice(1);
    prefix = "#";
  } else if (value && value.match(/^url\(#/)) {
    id = value.slice(5, -1);
    prefix = "url(#";
    suffix = ")";
  }
  if (id) {
    return t.jsxExpressionContainer(
      template.ast(`\`${prefix}${getValueWithProps(id, opts)}${suffix}\``)
        .expression
    );
  }
};

const getIdValue = (value, opts) =>
  t.jsxExpressionContainer(
    template.ast(`\`${getValueWithProps(value, opts)}\``).expression
  );

const plugin = (api, opts) => ({
  visitor: {
    JSXAttribute(path) {
      if (!opts.prefix && !opts.suffix) return;

      const valuePath = path.get("value");
      const namePath = path.get("name");

      const value = valuePath?.container?.value?.value;
      const name = namePath?.container?.name?.name;

      if (name === "id") {
        valuePath.replaceWith(getIdValue(value, opts));
      } else {
        const attr = getAttributeValue(value, opts);
        if (attr) {
          valuePath.replaceWith(attr);
        }
      }
    },
  },
});

module.exports = plugin;
