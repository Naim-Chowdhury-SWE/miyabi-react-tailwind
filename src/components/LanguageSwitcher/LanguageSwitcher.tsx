// LanguageSwitcher.tsx
import React from 'react';
import flag from "../../assets/flags/SWE-UK.webp"
import { toggleLanguage } from '../../data/Meny/LanguageDecider';

const LanguageSwitcher: React.FC<{ onLanguageChange: () => void }> = ({ onLanguageChange }) => {
  const handleLanguageChange = () => {
    toggleLanguage();
    onLanguageChange();
  };
  return (
    <aside className="fixed z-50 bottom-1 right-1 h-8 w-24 bg-red-800 flex items-center justify-center rounded">
  <img
    src={flag}
    alt="Swedish & UK Flag"
    className="cursor-pointer h-11/12 w-11/12"
    onClick={handleLanguageChange}
  />
</aside>
    );
  };

export default LanguageSwitcher;