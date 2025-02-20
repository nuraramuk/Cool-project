import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, Snackbar, Alert, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const imageList = [
  { src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
  { src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
  { src: 'images/3.webp', name: 'Electric Proofer 16 trays' },
  { src: 'images/4.webp', name: 'Grill Chicken Machine 9 Birds' },
  { src: 'images/5.webp', name: 'Bread Slicer 12mm' },
  { src: 'images/6.webp', name: 'Popcorn Machine Gas 250g' },
  { src: 'images/juice.webp', name: 'Juice Dispenser 2 Tank' },
  { src: 'images/Machine.webp', name: 'Coffee Grinding Machine 10Kgs' },
  { src: 'images/pizza.webp', name: 'Single Deck Gas Pizza Oven - 2 Trays' },
  { src: 'images/pizza_oven.webp', name: 'Pizza Oven' },
  { src: 'images/commercial_microwave_oven_25_litres-300x300.webp', name: 'Commercial Microwave Oven 25 litres' },
  { src: 'images/Tandoori.webp', name: 'Tandoori Oven SS' },
];

const carouselItems = [
  {
    image: 'images/electric-proofer.png',
    title: 'Electric Proofer',
    description: 'Achieve perfect proofing results every time.',
    buttonText: 'Learn More',
  },
  {
    image: 'images/automatic-sausage.png',
    title: 'Automatic Sausage Filling Machine',
    description: 'Boost your production efficiency with our cutting-edge, high-speed filling machine.',
    buttonText: 'Order Now',
  },
  {
    image: 'images/rotary-rack-oven.png',
    title: 'Rotary Rack Oven',
    description: 'Bake efficiently with our high-quality rotary rack oven.',
    buttonText: 'Shop Now',
  },
  
];

const LandingPage = ({ searchTerm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [undoItem, setUndoItem] = useState(null);
  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const filteredItems = imageList.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const handleUndo = () => {
    if (undoItem) {
      setCart((prevCart) => prevCart.filter((item) => item !== undoItem));
      setOpenUndoSnackbar(false);
      setUndoItem(null);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', width: '100%', height: '35vh', overflow: 'hidden' }}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: index === currentIndex ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {/* Dark Overlay */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            {/* Text Content */}
            <Container sx={{ position: 'relative', textAlign: 'left', color: '#fff', maxWidth: '1200px' }}>
              <Typography variant="h3" sx={{fontFamily:'Roboto', fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
                {item.title}
              </Typography>
              <Typography variant="h6" sx={{fontFamily:'Roboto', marginTop: 2, maxWidth: '600px', opacity: 0.9 }}>
                {item.description}
              </Typography>
            </Container>
          </Box>
        ))}
        <IconButton 
  onClick={prevSlide} 
  sx={{ 
    position: 'absolute', 
    left: 20, 
    top: '50%', 
    transform: 'translateY(-50%)', 
    color: '#fff', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } 
  }}
>
  <ArrowBackIosNew />
</IconButton>

<IconButton 
  onClick={nextSlide} 
  sx={{ 
    position: 'absolute', 
    right: 20, 
    top: '50%', 
    transform: 'translateY(-50%)', 
    color: '#fff', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } 
  }}
>
  <ArrowForwardIos />
</IconButton>
      </Box>

      {/* Image Gallery Section */}
      <Box sx={{ backgroundColor: '#fff', padding: '40px 20px' }}>
        <Container>
          <Typography variant="h4" sx={{fontFamily:'Roboto', textAlign: 'center', fontWeight: 'bold', color: '#333', marginBottom: 3 }}>
            Product Gallery
          </Typography>
          <Grid container spacing={3}>
            {filteredItems.map((image, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardMedia component="img" image={image.src} alt={image.name} sx={{ height: 200, objectFit: 'contain' }} />
                  <Typography variant="body1" sx={{ fontSize:'14px', fontFamily:'Roboto', textAlign: 'center', padding: 1, fontWeight: 'bold' }}>
                    {image.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;