import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Movies from './components/Pages/Movies';
import TVShow from './components/Pages/TVShow';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Tv from './components/Pages/Tv';
function App() {
  const [mode, setMode] = useState("dark")
  const theme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route exact path="/TvShows" element={<Tv />} />
          <Route exact path="/Movies" element={<Movies />} />
          <Route exact path="/tvshow" element={<TVShow />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
