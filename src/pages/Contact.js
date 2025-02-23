import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const form = useRef();

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, form.current)
      .then((result) => {
        setSnackbar({ open: true, message: 'Message envoyé!', severity: 'success' });
      }, (error) => {
        setSnackbar({ open: true, message: 'Erreur lors de l’envoi.', severity: 'error' });
      });
    setFormData({ nom: '', prenom: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
            Contactez-nous
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Envoyez-nous un message
                </Typography>
                <form ref={form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Prénom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        size="large"
                      >
                        Envoyer
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Informations de Contact
                </Typography>
                <Box sx={{ my: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOnIcon sx={{ mr: 2, color: 'secondary.main' }} />
                    <Box>
                      <Typography>Soumoulou</Typography>
                      <Typography variant="body2" color="text.secondary">
                        À 15 minutes de Pau & Tarbes
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'secondary.main' }} />
                    <Typography>07 71 58 08 22</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ mr: 2, color: 'secondary.main' }} />
                    <Typography>donsrecord64@gmail.com</Typography>
                  </Box>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                  Suivez-nous sur Instagram
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <IconButton 
                    color="primary" 
                    aria-label="Instagram"
                    component="a" 
                    href="https://www.instagram.com/dons_record/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
           {snackbar.message}
         </Alert>
       </Snackbar>
    </Box>
  );
};

export default Contact;
