import React, { useEffect, useRef, useState } from 'react';

const Preview: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleFileSave = () => {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
    };

    const handleError = (event: ErrorEvent) => {
      setError(event.message);
    };

    window.addEventListener('file-save', handleFileSave);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('file-save', handleFileSave);
      window.removeEventListener('error', handleError);
    };
  }, []);

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
    </div>
  );
};

export default Preview;
