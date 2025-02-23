import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import SubmitProject from './pages/SubmitProject';
import Contact from './pages/Contact';
import Services from './pages/Services';

// Création du thème personnalisé
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B5A642', // Couleur dorée du logo
      light: '#C6B755',
      dark: '#A49530',
    },
    secondary: {
      main: '#B5A642', // Même couleur dorée pour la cohérence
      light: '#C6B755',
      dark: '#A49530',
    },
    background: {
      default: '#121212', // Fond noir profond
      paper: '#1E1E1E', // Fond noir légèrement plus clair pour les cartes
    },
    text: {
      primary: '#B5A642', // Texte principal en doré
      secondary: '#8A8A8A', // Texte secondaire en gris
    },
  },
  typography: {
    fontFamily: 'Anton, sans-serif',
    h1: {
      color: '#B5A642',
    },
    h2: {
      color: '#B5A642',
    },
    h3: {
      color: '#B5A642',
    },
    h4: {
      color: '#B5A642',
    },
    h5: {
      color: '#B5A642',
    },
    h6: {
      color: '#B5A642',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Boutons carrés pour un look plus professionnel
        },
        contained: {
          backgroundColor: '#B5A642',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#C6B755',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          borderRadius: 0,
          border: '1px solid #B5A642',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/submit-project" element={<SubmitProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
