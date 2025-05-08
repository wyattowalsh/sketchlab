# Sketchlab

## Overview
Sketchlab is a cross-platform desktop IDE for p5.js sketches, combining the ease of the official Web Editor with the power of a native Electron app. The app leverages React (with TypeScript) for UI, integrates the Monaco Editor for code authoring, and delivers an offline-first, plugin-driven workflow tailored for artists, educators, and creative coders.

## Features
- **Real-time Sketch Preview**: Instant canvas updates on code changes
- **Robust Code Authoring**: Monaco Editor with TypeScript support, linting, IntelliSense
- **Project & Asset Management**: Local file-system integration, drag-and-drop assets, project templates
- **Extensible Plugin Framework**: Dynamic plugin loading, UI hooks, and asset pipelines
- **Seamless Version Control**: p5.js version switching via npm or CDN
- **Cross-Platform Packaging**: Single installer for Windows, macOS, Linux with auto-updates
- **Offline Documentation**: Bundled API reference and example galleries

## Getting Started
### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/wyattowalsh/sketchlab.git
   cd sketchlab
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage
### Creating a New Project
1. Open Sketchlab.
2. Click on `File` > `New Project`.
3. Enter the project name and select the location.
4. Start coding in the Monaco Editor and see the real-time preview.

### Managing Assets
- Drag and drop assets (images, audio, JSON) into the sidebar tree-view.
- Use the `Import Asset` button to add assets manually.

### Plugin Management
- Navigate to the `Plugin Manager` from the sidebar.
- Install, enable/disable, and configure plugins as needed.

### p5.js Version Management
- Open the `Settings` panel.
- Select the desired p5.js version from the available options.
- Download and cache the selected version for offline use.

## API Guide
### Editor Component
The `Editor` component embeds the Monaco Editor and provides TypeScript support, linting, and IntelliSense.

#### Props
- `value: string` - The code to be displayed in the editor.
- `onChange: (value: string) => void` - Callback function to handle code changes.

### Preview Component
The `Preview` component creates a sandboxed iframe for the p5.js context and implements auto-reload on file save.

#### Props
- `code: string` - The code to be executed in the p5.js context.

### SVG Generation
The `Preview` component now supports SVG generation using `p5-svg.js`. You can export the current sketch as an SVG file.

### Example
```tsx
import React, { useState } from 'react';
import Preview from './components/Preview';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');

  return (
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <Preview code={code} />
      <button onClick={() => document.dispatchEvent(new Event('export-svg'))}>
        Export SVG
      </button>
    </div>
  );
};

export default App;
```

## Plugin SDK
### Creating a Plugin
1. Create a new directory under `plugins/`.
2. Export a React component for settings/UI.
3. Implement lifecycle hooks (`onLoad`, `onSave`, `onBuild`).

### Example Plugin
```tsx
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
```

## Contributing
Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Documentation Setup
The documentation for Sketchlab follows Fumadocs standards. The content is located in the `./docs/content/docs/*.mdx` files. To view the documentation site, navigate to the `./docs/` directory and follow the instructions in the `README.md` file.

## Available Scripts
In the project directory, you can run the following scripts:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run test`
Launches the test runner in the interactive watch mode.

### `npm run lint`
Runs the linter to check for code quality issues.

### `npm run package`
Packages the Electron app for distribution.

### `npm run docs:build`
Builds the Fumadocs site for production.

### `npm run docs:serve`
Serves the Fumadocs site locally.

### `npm run docs:deploy`
Deploys the Fumadocs site.
