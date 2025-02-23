import React from 'react';
import { Container, Typography, Box, img } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        },
        body: {
          cursor: 'url(https://example.com/your-custom-cursor.png), auto',
        },
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/PF7FFMhRGUk?autoplay=1&mute=1&loop=1&playlist=PF7FFMhRGUk"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, filter: 'blur(5px)' }}
      ></iframe>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <img src='https://i.postimg.cc/w7yMZy2S/Logo-Dons-Record-Transparent.png' alt='Logo Dons Record' style={{ maxWidth: '100%', height: 'auto', filter: 'invert(1)' }} />
            </Box>
            <Typography variant="h4" color="white" gutterBottom sx={{ textAlign: 'center', margin: '0 auto', fontSize: '3rem' }}>
              Don's Record 
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
               Label & Studio
            </Typography>
            <CustomButton onClick={() => navigate('/services')}>Réservez une session</CustomButton>
          </motion.div>
        </Box>
      </Container>
      {/* <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          <Typography variant="h6" color="white" gutterBottom>
            Studio & Label
          </Typography>
        </Box>
      </Container> */}
    </Box>
  );
}

export default Home;
