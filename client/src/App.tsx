import './App.css'
import {Box} from "@mui/material"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { themeSettings } from './theme';import navbar from '@/scenes/navbar'
import Navbar from '@/scenes/navbar';

function App() {
  const theme = useMemo(()=>createTheme(themeSettings),[])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box width="100%" height="100%" padding="!rem 2rem 4rem 2rem">
            <Navbar/>
            <Routes>
              <Route path="/" element={<div>dashboard page</div>}/>
              <Route path="/predictions" element={<div>Prediction page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
