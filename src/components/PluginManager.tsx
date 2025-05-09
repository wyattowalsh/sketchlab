import React, { useState } from 'react';

interface Plugin {
  name: string;
  enabled: boolean;
  settings: React.ReactNode;
  category: string;
  rating: number;
  reviews: string[];
}

const PluginManager: React.FC = () => {
  const [plugins, setPlugins] = useState<Plugin[]>([
    { name: 'Example Plugin', enabled: true, settings: <div>Example Settings</div>, category: 'UI Enhancements', rating: 4, reviews: ['Great plugin!', 'Very useful.'] },
  ]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleInstall = () => {
    // Implement plugin installation logic
    const newPlugin: Plugin = { name: 'New Plugin', enabled: false, settings: <div>New Plugin Settings</div>, category: 'Tools', rating: 0, reviews: [] };
    setPlugins([...plugins, newPlugin]);
  };

  const handleToggle = (index: number) => {
    const updatedPlugins = plugins.map((plugin, i) =>
      i === index ? { ...plugin, enabled: !plugin.enabled } : plugin
    );
    setPlugins(updatedPlugins);
  };

  const handleConfigure = (index: number) => {
    // Implement plugin configuration logic
    console.log(`Configuring plugin: ${plugins[index].name}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPlugins = plugins.filter(plugin => 
    plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || plugin.category === selectedCategory)
  );

  return (
    <div>
      <h2>Plugin Manager</h2>
      <button onClick={handleInstall}>Install Plugin</button>
      <div>
        <input
          type="text"
          placeholder="Search plugins..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="UI Enhancements">UI Enhancements</option>
          <option value="Tools">Tools</option>
          <option value="Integrations">Integrations</option>
        </select>
      </div>
      <ul>
        {filteredPlugins.map((plugin, index) => (
          <li key={index}>
            <span>{plugin.name}</span>
            <button onClick={() => handleToggle(index)}>
              {plugin.enabled ? 'Disable' : 'Enable'}
            </button>
            <button onClick={() => handleConfigure(index)}>Configure</button>
            <div>Category: {plugin.category}</div>
            <div>Rating: {plugin.rating} ⭐</div>
            <div>Reviews: {plugin.reviews.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PluginManager;
