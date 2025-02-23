import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    title: 'Session Studio',
    price: '40€/H du lundi au samedi, 50€/H le dimanche & après 22H',
    description: 'Idéal pour les enregistrements simples',
    features: [
      'Ingénieur du son professionnel',
      'Équipement haut de gamme',
      'Acoustique optimale',
      'Exports multipistes',
    ],
  },
  {
    title: 'Mix Gold',
    price: '100€/titre',
    description: 'Mix professionnel',
    features: [
      'Mixage professionnel',
      '3 révisions incluses',
      'Effets et traitements',
      'Exports en haute qualité',
    ],
  },
  {
    title: 'Mix Platinium',
    price: '200€/titre',
    description: 'Mix professionnel avancé',
    features: [
      'Mix des stems inclus',
      'Mixage professionnel',
      '3 révisions incluses',
      'Effets et traitements premium',
      'Exports en haute qualité',
    ],
  },
  {
    title: 'Pack Mastering',
    price: '50€/titre',
    description: 'La touche finale',
    features: [
      'Mastering professionnel',
      'Optimisation sonore',
      'Formats adaptés aux plateformes',
      'Version alternative incluse',
    ],
  },
  {
    title: 'Clip Vidéo',
    price: 'À partir de 250€*',
    description: 'Votre vision en images',
    features: [
      'Tournage en 4K',
      'Vizualiser',
      'Drone et stabilisateur',
      'Effets spéciaux',
      'Montage professionnel',
      'Version pour réseaux sociaux incluse',
      '3D sur devis',
      'Sur devis selon la demande*',
    ],
  },
];

const Pricing = () => {
  return (
    <Box
      sx={{
        py: 12,
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9xWFon5h_-4?mute=1&autoplay=1&loop=1&playlist=9xWFon5h_-4"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, filter: 'blur(5px)', display: 'block', objectFit: 'cover' }}
          ></iframe>
        </Box>
        <Container maxWidth="lg" sx={{ py: 12, position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <img src='https://i.postimg.cc/w7yMZy2S/Logo-Dons-Record-Transparent.png' alt='Logo-Dons-Record-Transparent' style={{ maxWidth: '100%', height: 'auto', filter: 'invert(1)' }} />
            </Box>
            <Typography variant="h2" align="center" gutterBottom>
              Nos Tarifs
            </Typography>

            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Des forfaits adaptés à tous vos projets musicaux
            </Typography>

            <Grid 
              container 
              spacing={2} 
              sx={{ 
                mt: 4,
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'center'
              }}
            >
              {pricingPlans.map((plan, index) => (
                <Grid 
                  item 
                  key={plan.title} 
                  xs={12} 
                  sm={6} 
                  md={2.4}
                  sx={{
                    display: 'flex'
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    style={{ width: '100%' }}
                  >
                    <Card
                      sx={{
                        maxWidth: 345, 
                        mb: 2, 
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                      }}
                    >
                      <CardHeader
                        title={plan.title}
                        subheader={plan.description}
                        titleTypographyProps={{ 
                          align: 'center',
                          height: '64px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        subheaderTypographyProps={{ 
                          align: 'center',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        sx={{
                          backgroundColor: 'background.paper',
                          height: '100%',
                          '.MuiCardHeader-content': {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '100%'
                          }
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                          }}
                        >
                          <Typography 
                            component="h2" 
                            variant="h5" 
                            color="secondary"
                            sx={{
                              fontSize: plan.title === 'Session Studio' ? '1.5rem' : '2rem',
                              whiteSpace: 'pre-line',
                              textAlign: 'center'
                            }}
                          >
                            {plan.price}
                          </Typography>
                        </Box>
                        <List>
                          {plan.features.map((feature) => (
                            <ListItem key={feature}>
                              <ListItemIcon>
                                <CheckIcon color="secondary" />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          sx={{ mt: 3 }}
                        >
                          Réserver
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;
