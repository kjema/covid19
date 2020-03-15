import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Toggle } from './Toggle';

interface Props {}

export const DarkModeToggle: React.FC<Props> = () => {
  const darkMode = useDarkMode(false);

  return <Toggle checked={darkMode.value} onChange={darkMode.toggle} />;
};
