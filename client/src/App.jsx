import React from 'react';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import ButtonUsage from './components/button';
import PrimarySearchAppBar from './components/AppBar';


const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar/>
      <ButtonUsage/>
    </ThemeProvider>
  );
}

export default App
