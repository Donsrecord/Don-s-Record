import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const SubmitProject = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const artistName = form['Nom d\'artiste'].value;
    const email = form['Email'].value;
    const streamingPlatform = form['Plateforme de streaming'].value;
    const socialMedia = form['Réseaux sociaux'].value;
    const projectLink = form['Lien vers votre maquette à nous présenter'].value;
    const projectDescription = form['Présente nous ton projet'].value;

    // Log the values to check if they are populated correctly
    console.log({ artistName, email, streamingPlatform, socialMedia, projectLink, projectDescription });

    // Check if all fields are filled
    if (!artistName || !email || !streamingPlatform || !socialMedia || !projectLink || !projectDescription) {
      alert('Veuillez remplir tous les champs avant d\'envoyer.');
      return;
    }

    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, 'template_ta5j2uq', { artistName, email, streamingPlatform, socialMedia, projectLink, projectDescription }, EMAILJS_CONFIG.PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setConfirmationMessage('Votre projet a été soumis avec succès !');
        setOpenSnackbar(true);
      }, (error) => {
        console.log(error.text);
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.');
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4, backgroundColor: 'transparent', mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Nous Proposer Votre Projet
        </Typography>
        <Typography paragraph>
          Remplissez le formulaire ci-dessous pour nous envoyer vos maquettes audio, vos projet et vos ambitions.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nom d'artiste"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            aria-label="Nom d'artiste"
            name="Nom d'artiste"
          />
          <TextField
            label="Email"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            aria-label="Email"
            name="Email"
          />
          <TextField
            label="Plateforme de streaming"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            aria-label="Plateforme de streaming"
            name="Plateforme de streaming"
          />
          <TextField
            label="Réseaux sociaux"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            aria-label="Réseaux sociaux"
            name="Réseaux sociaux"
          />
          <TextField
            label="Lien vers votre maquette à nous présenter"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            sx={{ mt: 2 }}
            aria-label="Lien vers votre maquette à nous présenter"
            name="Lien vers votre maquette à nous présenter"
          />
          <TextField
            label="Présente nous ton projet"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            multiline
            rows={4}
            aria-label="Présente nous ton projet"
            name="Présente nous ton projet"
          />
          <Button variant="contained" color="primary" type="submit">
            Envoyer
          </Button>
        </form>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', textAlign: 'center', fontSize: '1.5rem' }}>
          {confirmationMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SubmitProject;
