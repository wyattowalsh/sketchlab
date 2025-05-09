import React, { useState, useEffect } from 'react';

const Settings: React.FC = () => {
  const [versions, setVersions] = useState<string[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<string>('');
  const [theme, setTheme] = useState<string>('light');
  const [fontSize, setFontSize] = useState<string>('medium');
  const [imageFormat, setImageFormat] = useState<string>('png');
  const [imageResolution, setImageResolution] = useState<string>('72');

  useEffect(() => {
    // Fetch available p5.js versions
    const fetchVersions = async () => {
      // Replace with actual version fetching logic
      const fetchedVersions = ['1.4.0', '1.3.1', '1.2.0'];
      setVersions(fetchedVersions);
    };

    fetchVersions();

    // Load user preferences from local storage
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedImageFormat = localStorage.getItem('imageFormat');
    const savedImageResolution = localStorage.getItem('imageResolution');
    if (savedTheme) setTheme(savedTheme);
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedImageFormat) setImageFormat(savedImageFormat);
    if (savedImageResolution) setImageResolution(savedImageResolution);
  }, []);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
  };

  const handleDownload = async () => {
    // Implement version download and cache logic
    console.log(`Downloading and caching p5.js version: ${selectedVersion}`);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFontSize = event.target.value;
    setFontSize(newFontSize);
    localStorage.setItem('fontSize', newFontSize);
    document.documentElement.style.fontSize = newFontSize;
  };

  const handleImageFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newImageFormat = event.target.value;
    setImageFormat(newImageFormat);
    localStorage.setItem('imageFormat', newImageFormat);
  };

  const handleImageResolutionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImageResolution = event.target.value;
    setImageResolution(newImageResolution);
    localStorage.setItem('imageResolution', newImageResolution);
  };

  const handleResetPreferences = () => {
    setTheme('light');
    setFontSize('medium');
    setImageFormat('png');
    setImageResolution('72');
    localStorage.removeItem('theme');
    localStorage.removeItem('fontSize');
    localStorage.removeItem('imageFormat');
    localStorage.removeItem('imageResolution');
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.fontSize = 'medium';
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
      <div>
        <label htmlFor="theme-select">Select Theme:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <label htmlFor="font-size-select">Select Font Size:</label>
        <select id="font-size-select" value={fontSize} onChange={handleFontSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="image-format-select">Select Image Format:</label>
        <select id="image-format-select" value={imageFormat} onChange={handleImageFormatChange}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="svg">SVG</option>
        </select>
      </div>
      <div>
        <label htmlFor="image-resolution-input">Set Image Resolution (DPI):</label>
        <input
          id="image-resolution-input"
          type="number"
          value={imageResolution}
          onChange={handleImageResolutionChange}
        />
      </div>
      <button onClick={handleResetPreferences}>Reset Preferences</button>
    </div>
  );
};

export default Settings;
