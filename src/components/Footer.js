import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Don's Record
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Transformez votre son en œuvre d'art
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Navigation
            </Typography>
            <Link component={RouterLink} to="/" color="text.secondary" display="block">
              Accueil
            </Link>
            <Link component={RouterLink} to="/services" color="text.secondary" display="block">
              Services
            </Link>
            <Link component={RouterLink} to="/about" color="text.secondary" display="block">
              À propos
            </Link>
            <Link component={RouterLink} to="/pricing" color="text.secondary" display="block">
              Tarifs
            </Link>
            <Link component={RouterLink} to="/contact" color="text.secondary" display="block">
              Contact
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Suivez-nous
            </Typography>
            <Box>
              <IconButton 
                color="primary" 
                component="a" 
                href="https://www.instagram.com/dons_record/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {new Date().getFullYear()} Don's Record. Tous droits réservés.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
