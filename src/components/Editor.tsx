import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: '// type your code...',
        language: 'typescript',
        theme: 'vs-dark',
        automaticLayout: true,
      });

      // Configure TypeScript support
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        allowNonTsExtensions: true,
      });

      // Configure linting and IntelliSense
      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      });

      return () => {
        editor.dispose();
      };
    }
  }, []);

  return <div ref={editorRef} style={{ height: '100%', width: '100%' }} />;
};

export default Editor;
