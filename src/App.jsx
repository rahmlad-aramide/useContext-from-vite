import * as React from 'react';
import { ThemeContext, themes } from '../context/theme';
// create context

// Set up context provider
export default function App() {
  return (
    <ThemeContext.Provider value={themes}>
      {/* all our component */}
      <Content />
      <NewComponent />
    </ThemeContext.Provider>
  );
}

function NewComponent() {
  const theme = React.useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <h1>I am a new component</h1>
    </div>
  );
}

function Content({ toggle, mode }) {
  const theme = React.useContext(ThemeContext);
  // console.log(theme);
  const [darkMode, setDarkMode] = React.useState(false);
  const value = darkMode ? themes.dark : themes.light;
  // console.log(value);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  // console.log(theme);
  return (
    <div
      onClick={toggleTheme}
      style={{ background: value.background, color: value.foreground }}
    >
      I am a content component
    </div>
  );
}
// consume context in a lower level component
