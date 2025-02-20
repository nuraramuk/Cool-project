import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, IconButton, Snackbar, Alert } from '@mui/material';
import { Carousel } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { List, ListItem, ListItemButton, ListItemDecorator, ListItemContent } from '@mui/joy';

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
  // {
  //   image: 'images/Carousel.jpg',
  //   title: 'Automatic Sausage Filling Machine',
  //   description: 'Boost your production efficiency with our cutting-edge, high-speed filling machine.',
  //   buttonText: 'Order Now',
  // },
];

const LandingPage = ({ searchTerm }) => {
  const [cart, setCart] = useState([]);
  const [undoItem, setUndoItem] = useState(null);  // State to hold the item to undo
  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false); // Snackbar visibility

  const filteredItems = imageList.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);
      if (existingItemIndex !== -1) {
        // Item already in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Item not in cart, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setUndoItem(item);  // Save the added item for undo
    setOpenUndoSnackbar(true);  // Show undo snackbar

    // Auto-remove undo option after 3 seconds
    setTimeout(() => {
      setOpenUndoSnackbar(false);
      setUndoItem(null);
    }, 3000);
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== item.name));
  };

  const handleIncreaseQuantity = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name);
      if (itemIndex !== -1) {
        updatedCart[itemIndex].quantity += 1;
      }
      return updatedCart;
    });
  };

  const handleDecreaseQuantity = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name);
      if (itemIndex !== -1 && updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      }
      return updatedCart;
    });
  };

  const handleUndo = () => {
    if (undoItem) {
      setCart((prevCart) => prevCart.filter((item) => item !== undoItem));  // Remove the last added item
      setOpenUndoSnackbar(false);
      setUndoItem(null);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Carousel fade controls={false} indicators={false} interval={4000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Box
              sx={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url(${item.image}) center/cover no-repeat`,
                position: 'relative',
                padding: '60px 20px',
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
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 2, maxWidth: '600px', opacity: 0.9 }}>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 3,
                    padding: '12px 24px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    backgroundColor: '#004e92',
                    '&:hover': { backgroundColor: '#003366' },
                  }}
                >
                  {item.buttonText}
                </Button>
              </Container>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>

     

      {/* Image Gallery Section */}
      <Box sx={{ backgroundColor: '#fff', padding: '40px 20px' }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', marginBottom: 3 }}>
          
          </Typography>
          <Grid container spacing={3}>
            {filteredItems.map((image, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 8px rgba(251, 174, 7, 0.2)',
                    transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
                    border: '2px solid #ccc',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      borderColor: '#007BFF',
                    },
                  }}
                >
                  {/* Image */}
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.name}
                    sx={{
                      height: 200,
                      margin:'5px'
                    }}
                  />

                  {/* Product Name */}
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      padding: 1,
                      color: '#555',
                      fontWeight: 'bold',
                    }}
                  >
                    {image.name}
                  </Typography>

                  {/* Add to Cart Button */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Undo Snackbar */}
      <Snackbar
        open={openUndoSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenUndoSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenUndoSnackbar(false)}
          severity="info"
          action={
            <Button color="secondary" size="small" onClick={handleUndo}>
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
