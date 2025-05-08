import React from 'react';

interface PluginProps {
  settings: any;
  onLoad: () => void;
  onSave: () => void;
  onBuild: () => void;
}

const ExamplePlugin: React.FC<PluginProps> = ({ settings, onLoad, onSave, onBuild }) => {
  React.useEffect(() => {
    onLoad();
    return () => {
      onSave();
    };
  }, [onLoad, onSave]);

  const handleBuild = () => {
    onBuild();
  };

  return (
    <div>
      <h2>Example Plugin</h2>
      <div>{settings}</div>
      <button onClick={handleBuild}>Build</button>
    </div>
  );
};

export default ExamplePlugin;
