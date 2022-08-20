import './App.css';
import Navbar from './components/navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode:"dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>

  );
}

export default App;
