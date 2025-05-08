import React, { useState, useEffect } from 'react';

const Settings: React.FC = () => {
  const [versions, setVersions] = useState<string[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  useEffect(() => {
    // Fetch available p5.js versions
    const fetchVersions = async () => {
      // Replace with actual version fetching logic
      const fetchedVersions = ['1.4.0', '1.3.1', '1.2.0'];
      setVersions(fetchedVersions);
    };

    fetchVersions();
  }, []);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
  };

  const handleDownload = async () => {
    // Implement version download and cache logic
    console.log(`Downloading and caching p5.js version: ${selectedVersion}`);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label htmlFor="version-select">Select p5.js Version:</label>
        <select id="version-select" value={selectedVersion} onChange={handleVersionChange}>
          <option value="">--Select Version--</option>
          {versions.map((version, index) => (
            <option key={index} value={version}>
              {version}
            </option>
          ))}
        </select>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Settings;
