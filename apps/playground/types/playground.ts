export interface ComponentProps {
  [key: string]: unknown;
}

export interface CodeEditorState {
  code: string;
  language: 'typescript' | 'javascript' | 'json';
  errors: string[];
}

export interface PreviewState {
  componentName: string;
  props: ComponentProps;
  variant: string;
}

