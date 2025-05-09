import React, { useEffect, useRef, useState, useCallback } from 'react';
import p5 from 'p5';
import 'p5-svg';

const Preview: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState<string>('');
  const [svgExport, setSvgExport] = useState<boolean>(false);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleFileSave = useCallback(
    debounce(() => {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
    }, 300),
    []
  );

  const handleError = (event: ErrorEvent) => {
    setError(event.message);
  };

  const handleSvgExport = () => {
    setSvgExport(true);
  };

  useEffect(() => {
    window.addEventListener('file-save', handleFileSave);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('file-save', handleFileSave);
      window.removeEventListener('error', handleError);
    };
  }, [handleFileSave]);

  useEffect(() => {
    if (svgExport && iframeRef.current) {
      const sketch = (p: p5) => {
        p.setup = () => {
          p.createCanvas(400, 400, p.SVG);
          p.background(200);
          p.ellipse(200, 200, 100, 100);
          p.save('sketch.svg');
        };
      };

      new p5(sketch, iframeRef.current.contentWindow?.document.body);
      setSvgExport(false);
    }
  }, [svgExport]);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src="about:blank"
        style={{ height: '100%', width: '100%', border: 'none' }}
        sandbox="allow-scripts"
      />
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
      <button
        onClick={handleSvgExport}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Export SVG
      </button>
    </div>
  );
};

export default Preview;
