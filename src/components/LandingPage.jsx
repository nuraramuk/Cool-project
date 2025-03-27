import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, Snackbar, Alert, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const imageList = [
  { 
    id: 1,
    src: 'images/1.webp', 
    name: 'Automatic Sausage Filling Machine',
    description: 'High-speed automatic sausage filling machine with precision controls.',
    details: 'High-speed automatic sausage filling machine with precision controls. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 2,
    src: 'images/2.webp', 
    name: 'Rotary Rack Oven 32 Trays Diesel / Gas',
    description: 'Professional rotary rack oven with 32 trays capacity.',
    details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  // Add similar details for all other products
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
  const navigate = useNavigate();
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

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setCart([...cart, product]);
    setUndoItem(product);
    setOpenUndoSnackbar(true);
  };

  const handleBuyNow = (product, e) => {
    e.stopPropagation();
    setCart([...cart, product]);
    navigate('/checkout');
  };

  const handleUndo = () => {
    if (undoItem) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== undoItem.id));
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
            {filteredItems.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  onClick={() => handleProductClick(product)}
                  sx={{ 
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <CardMedia 
                    component="img" 
                    image={product.src} 
                    alt={product.name} 
                    sx={{ height: 200, objectFit: 'contain' }} 
                  />
                  <Box sx={{ padding: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily:'Roboto', fontWeight: 'bold' }}>
                      {product.name}
                    </Typography>
                    {/* <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 'bold', marginY: 1 }}>
                      ${product.price}
                    </Typography> */}
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        onClick={(e) => handleBuyNow(product, e)}
                      >
                        Buy Now
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        size="small"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={openUndoSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenUndoSnackbar(false)}
      >
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small" onClick={handleUndo}>
              UNDO
            </Button>
          }
        >
          Item added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default LandingPage;