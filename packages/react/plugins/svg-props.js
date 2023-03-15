/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { types as t } from '@babel/core'

const elements = ['svg', 'Svg']


const getValue = (raw) => {
  if (raw === undefined) return t.stringLiteral('1em')
  switch (typeof raw) {
    case 'number':
      return t.jsxExpressionContainer(t.numericLiteral(raw))
    case 'string':
      return t.stringLiteral(raw)
    default:
      return t.stringLiteral('1em')
  }
}

const plugin = (_, opts) => ({
  visitor: {
    JSXOpeningElement(path) {
      if (
        !elements.some((element) =>
          path.get('name').isJSXIdentifier({ name: element }),
        )
      )
        return

        const identifier = t.identifier('svgProps')
        if (t.isObjectPattern(props[0])) {
          props[0].properties.push(t.restElement(identifier))
          if (opts.typescript) {
            props[0].typeAnnotation = t.tsTypeAnnotation(
              t.tsIntersectionType([
                tsTypeReferenceSVGProps(ctx),
                (props[0].typeAnnotation).typeAnnotation,
              ]),
            )
          }
        } else {
          props.push(identifier)
          if (opts.typescript) {
            identifier.typeAnnotation = t.tsTypeAnnotation(
              tsTypeReferenceSVGProps(ctx),
            )
          }
        }

      path.pushContainer(
        'attributes',
          t.jsxAttribute(
            t.jsxIdentifier(attr),
            values[attr],
          ),
      )
    },
  },
})

export default plugin