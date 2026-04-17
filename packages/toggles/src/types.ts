export interface ClipRef {
  _clip: string;
}

export type AttributeValue = string | number | boolean | ClipRef;

export interface NodeClasses {
  className?: string;
  darkClassName?: string;
}

export interface ToggleNode {
  tag: string;
  attrs?: Record<string, AttributeValue>;
  cls?: NodeClasses;
  children?: ToggleNode[];
}

export interface ClipPathDefinition {
  id: string;
  cls?: NodeClasses;
  children: ToggleNode[];
}

export interface ToggleDefinition {
  slug: string;
  name: string;
  baseline: string;
  defaultDuration: number;
  cssVar: string;
  viewBox: string;
  svgAttrs?: Record<string, string | number>;
  clipPaths?: ClipPathDefinition[];
  content: ToggleNode[];
}

export interface TemplateClip {
  id: string;
  varName: string;
}

export interface TemplateToggle extends ToggleDefinition {
  clips: TemplateClip[];
}
