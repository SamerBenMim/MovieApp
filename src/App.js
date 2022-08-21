import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Description from './components/Description';
import Main from './components/Main';
import { useState } from 'react';



function App() {
  const [mode, setMode] =useState("dark")
  const theme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider  theme={theme}>
      <Navbar setMode={setMode}  mode={mode}/>
      <Description/>
      <Main/>
    </ThemeProvider>

  );
}

export default App;
