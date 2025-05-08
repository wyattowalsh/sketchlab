# Plugin SDK

## Overview
This document provides an overview of the Plugin SDK for Sketchlab. The Plugin SDK allows you to create and manage plugins that extend the functionality of the IDE by adding new features, tools, and workflows.

## Plugin Lifecycle Hooks
Plugins in Sketchlab can implement the following lifecycle hooks:

### `onLoad: () => void`
Called when the plugin is loaded. Use this hook to initialize the plugin and set up any necessary resources.

### `onSave: () => void`
Called when the plugin is saved. Use this hook to save the plugin's state or perform any necessary cleanup.

### `onBuild: () => void`
Called when the plugin is built. Use this hook to perform any build-related tasks, such as compiling code or generating assets.

## Creating a Plugin
To create a plugin for Sketchlab, follow these steps:

1. Create a new directory under the `plugins/` folder.
2. Export a React component for the plugin's settings and UI.
3. Implement the lifecycle hooks (`onLoad`, `onSave`, `onBuild`) as needed.

### Example Plugin
Here is an example of a simple plugin that implements the lifecycle hooks:

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

## Using Plugins
To use a plugin in Sketchlab, follow these steps:

1. Place the plugin directory under the `plugins/` folder.
2. Enable the plugin from the Plugin Manager UI.
3. Configure the plugin settings as needed.

## Plugin Manager UI
The Plugin Manager UI allows you to install, enable/disable, and configure plugins. You can access the Plugin Manager from the sidebar in Sketchlab.

### Installing a Plugin
To install a plugin, click the `Install Plugin` button in the Plugin Manager UI and follow the instructions.

### Enabling/Disabling a Plugin
To enable or disable a plugin, toggle the switch next to the plugin name in the Plugin Manager UI.

### Configuring a Plugin
To configure a plugin, click the `Configure` button next to the plugin name in the Plugin Manager UI and adjust the settings as needed.
