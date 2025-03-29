import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';




function CommercialProducts() {
  useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  const { state } = useLocation();
  const { product, category } = state || {};
  const navigate = useNavigate();

  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5">Product not found</Typography>
        <Button 
          variant="contained" 
          sx={{ mt: 2 }} 
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    );
  }
  const specifications = product.specification 
    ? product.specification.split(', ').map(item => item.trim())
    : [];
  
  return (
    <Box sx={{ 
      padding: { xs: '15px', sm: '20px', md: '30px' },
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <Button 
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
          mb: 2,
          backgroundColor: 'transparent',  // Set the background color to orange
          color: '#E05D00',              // Set the text color to white (optional)
          '&:hover': {
            backgroundColor: 'transparent', // A darker shade of orange for hover effect (optional)
          },
        }}
      >
        Back to {category} Products
      </Button>

      <Grid container spacing={4}>
        {/* Product Image Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image={product.imageUrl}
              alt={product.name}
              sx={{
                width: '100%',
                objectFit: 'contain',
                height: { xs: '200px', md: '300px' },
                p: 2,
                backgroundColor: 'white'
              }}
            />
          </Card>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 3 }}>
            {product.tag && (
              <Chip
                label={product.tag}
                size="small"
                sx={{
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 1
                }}
              />
            )}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {product.name}
            </Typography>
            {/* Product Description */}
            {product.description && (
              <Typography variant="body1" sx={{ mb: 3, whiteSpace: 'pre-line' }}>
                {product.description}
              </Typography>
            )}
            
            {/* <Typography variant="body1" sx={{ mb: 3 }}>
              {product.description}
            </Typography> */}
            
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  fontWeight: 'bold',
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#E05D00'
                  }
                }}
              >
                Add to Cart
              </Button>
              <IconButton sx={{ border: '1px solid #FF6B00', color: '#FF6B00' }}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Specifications */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Specifications
            </Typography>
            <List dense>
                {specifications.map((spec, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText primary={spec} />
                  </ListItem>
                ))}
              </List>
          </Box>
        </Grid>

        {/* Related Products */}
        {/* <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Related Products
          </Typography>
          <Grid container spacing={3}>
            {relatedProducts.map((related, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card sx={{ borderRadius: '12px', cursor: 'pointer' }} onClick={() => navigate('/commercial-products', { state: { product: related, category } })}>
                  <CardMedia
                    component="img"
                    image={related.imageUrl}
                    alt={related.name}
                    sx={{
                      height: '150px',
                      objectFit: 'contain',
                      p: 2
                    }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                      {related.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default CommercialProducts;