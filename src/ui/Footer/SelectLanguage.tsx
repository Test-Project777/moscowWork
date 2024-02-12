import React, { useState } from 'react';
import './stile.css';

export default function SelectLanguage(): JSX.Element {
  const [language, setLanguage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(event.target.value);
  };

  return (
    <div className="custom-select">
      <select value={language} onChange={handleChange}>
        <option className="custom-select select" value="russian">
          Русский
        </option>
        <option className="custom-select select" value="english">
          English
        </option>
      </select>
    </div>
  );
}
