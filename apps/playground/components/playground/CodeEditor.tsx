'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { Box } from '@packages/ui';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  language?: 'typescript' | 'javascript' | 'tsx' | 'jsx';
  height?: string;
  theme?: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  language = 'typescript',
  height = '400px',
  theme,
}) => {
  const [editorValue, setEditorValue] = useState(code);
  const [monacoTheme, setMonacoTheme] = useState(theme);

  // Debounce the onChange callback (300ms as specified in roadmap)
  const debouncedOnChange = useCallback(
    (value: string) => {
      setEditorValue(value);
      onChange(value);
    },
    [onChange]
  );

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      // Immediate update to editor content
      setEditorValue(value);
      // Apply debouncing for the parent's onChange
      debouncedOnChange(value);
    }
  };

  // Create a stable function that handles editor mounting and theme setup
  const handleEditorDidMount = useCallback(() => {
    if (theme) setMonacoTheme(theme);
  }, [theme]);

  useEffect(() => {
    // Update editor when prop changes from outside
    setEditorValue(code);
  }, [code]);

  return (
    <Box
      sx={{
        '.monaco-editor': {
          '&.vs-dark .monaco-editor-background': { backgroundColor: '#1A1A1A' },
        },
      }}
    >
      <Editor
        height={height}
        language={language}
        value={editorValue}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme={monacoTheme || 'vs-dark'}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
          },
          renderLineHighlight: 'line',
          bracketPairColorization: { enabled: true },
          formatOnType: true,
          formatOnPaste: true,
          automaticLayout: true,
        }}
      />
    </Box>
  );
};

export default CodeEditor;