import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Icon, Button } from '@mui/material';
import { motion } from 'framer-motion';
import MicIcon from '@mui/icons-material/Mic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VideocamIcon from '@mui/icons-material/Videocam';

const services = [
  {
    title: 'Enregistrement',
    description: 'Session studio avec équipement professionnel de haute qualité pour capturer le meilleur de votre son',
    icon: MicIcon,
  },
  {
    title: 'Mixage',
    description: 'Équilibrage et optimisation du son pour une clarté et une cohérence parfaites',
    icon: QueueMusicIcon,
  },
  {
    title: 'Mastering',
    description: 'Finition haute qualité pour une diffusion professionnelle sur toutes les plateformes',
    icon: GraphicEqIcon,
  },
  {
    title: 'Instrumental',
    description: 'Création de beats et compositions originales adaptés à votre style',
    icon: MusicNoteIcon,
  },
  {
    title: 'Clip Vidéo',
    description: 'Production de clips vidéo professionnels avec équipement 4K, drone, et effets spéciaux',
    icon: VideocamIcon,
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component={motion.h2}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          variant="h2"
          align="center"
          sx={{ mb: 8 }}
        >
          Nos Services
        </Typography>

        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={service.title}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <service.icon
                    sx={{
                      fontSize: 40,
                      color: 'secondary.main',
                      mb: 1,
                    }}
                  />
                  <CardContent sx={{ p: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="https://docs.google.com/forms/d/1S5ht5518oDEDUzqUgIMgI1YZGPgKkmNKAGCj1NSAZjo/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 4,
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    Réserver
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
