import React from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            À Propos de Don's Record
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Notre Histoire
                </Typography>
                <Typography paragraph>
                  Passionnés par la musique et le son, ce studio a était créer avec l'ambition 
                  de fournir aux artistes un espace créatif où leur talent peut s'épanouir pleinement.
                </Typography>
                <Typography paragraph>
                  Équipé des dernières technologies audio, 
                  notre studio offre un environnement optimal pour vos projets musicaux.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Notre Expertise
                </Typography>
                <Typography paragraph>
                  Notre équipe de professionnels cumule plus de 10 ans d'expérience dans l'industrie musicale.
                  Nous avons travaillé avec des artistes de tous horizons, et obtenu plusieurs certifications.
                </Typography>
                <Typography paragraph>
                  Nous mettons notre savoir-faire au service de votre créativité pour donner vie 
                  à vos projets musicaux avec le meilleur son possible.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Paper
              sx={{
                p: 2,
                height: 'auto',
                backgroundColor: 'background.paper',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Notre Label
              </Typography>
              <Typography paragraph>
                Nous sommes constamment à la recherche d'artistes à développer. Notre label offre un soutien complet, de la production à la promotion, pour vous aider à réaliser votre vision musicale. Envoyez nous vos projets dans la catégorie "Soumettre un projet"
              </Typography>
            </Paper>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
