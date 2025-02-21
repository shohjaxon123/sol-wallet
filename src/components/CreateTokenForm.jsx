import React, { useState } from "react";
import "./CreateTokenForm.css";

const CreateTokenForm = () => {
  const [fileName, setFileName] = useState("No file selected.");
  const [autoBundle, setAutoBundle] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file selected.");
  };

  return (
    <div className="token-form">
      {/* Input Fields */}
      <input type="text" placeholder="Token Name" className="input-field" />
      <input type="text" placeholder="Symbol" className="input-field" />
      <textarea placeholder="Description" className="input-field textarea" />

      {/* File Upload */}
      <div className="file-upload">
        <label className="browse-btn">
          Browse
          <input type="file" onChange={handleFileChange} />
        </label>
        <span className="file-name">{fileName}</span>
      </div>

      {/* Social Links */}
      <input type="text" placeholder="Twitter" className="input-field" />
      <input type="text" placeholder="Website URL" className="input-field" />
      <input type="text" placeholder="Telegram" className="input-field" />

      {/* Numeric Inputs */}
      <input type="number" className="input-field" defaultValue="1.000" />
      
      {/* Checkbox & Bundle Input */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="auto-bundle"
          checked={autoBundle}
          onChange={() => setAutoBundle(!autoBundle)}
        />
        <label htmlFor="auto-bundle">Auto Bundle Buy</label>
        <input type="number" className="bundle-input" defaultValue="10.000" />
      </div>

      <input type="number" className="input-field" defaultValue="0.500" />

      {/* Create & Buy Button */}
      <button className="create-btn">Create & Buy</button>
    </div>
  );
};

export default CreateTokenForm;
