import React from 'react';
import SplitPane from 'react-split-pane';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App: React.FC = () => {
  return (
    <SplitPane split="vertical" minSize={50} defaultSize="50%">
      <Editor />
      <Preview />
    </SplitPane>
  );
};

export default App;
