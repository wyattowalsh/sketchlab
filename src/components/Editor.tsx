import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as monaco from 'monaco-editor';

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState<string>('// type your code...');
  const [error, setError] = useState<string | null>(null);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleEditorChange = useCallback(
    debounce((value: string) => {
      setCode(value);
    }, 300),
    []
  );

  const handleError = (event: ErrorEvent) => {
    setError(event.message);
  };

  useEffect(() => {
    if (editorRef.current) {
      const newEditor = monaco.editor.create(editorRef.current, {
        value: code,
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

      newEditor.onDidChangeModelContent(() => {
        handleEditorChange(newEditor.getValue());
      });

      setEditor(newEditor);

      return () => {
        newEditor.dispose();
      };
    }
  }, [handleEditorChange]);

  useEffect(() => {
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div ref={editorRef} style={{ height: '100%', width: '100%' }}>
      {error && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default Editor;
