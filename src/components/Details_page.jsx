import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, CardMedia, Grid } from '@mui/material';

const ProductDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4">Product not found</Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Container>
    );
  }

  // Helper function to handle image paths
  const getImagePath = (imgPath) => {
    // If the path already starts with http, return as is
    if (imgPath.startsWith('http')) return imgPath;
    
    // Otherwise, prepend the correct path
    return process.env.PUBLIC_URL + '/' + imgPath;
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    navigate('/cart');
  };

  const handleBuyNow = () => {
    // Buy now logic here
    navigate('/checkout');
  };

  return (
    <Container sx={{ py: 4 }}>
      <Button onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back to Products
      </Button>
      
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardMedia
            component="img"
            image={getImagePath(product.src)}
            alt={product.name}
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              maxHeight: '400px',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg'; // Fallback image
            }}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          {/* <Typography variant="h4" color="primary" gutterBottom>
            ${product.price}
          </Typography> */}
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body2" paragraph>
            {product.details}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;




// application
// product
// details
// liters categories
// dosa 