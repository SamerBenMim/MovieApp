import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Description from './components/Description';
import Main from './components/Main';

const theme = createTheme({
  palette: {
    mode:"dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Description/>
      <Main/>
    </ThemeProvider>

  );
}

export default App;
