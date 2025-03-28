import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  CardMedia, 
  Grid,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useEffect } from 'react';

// Mock data for related products
const relatedProducts = [
  { id: 1, src: 'images/1.webp', name: 'Juice Dispenser 1 Tank', description: 'High-speed automatic sausage filling machine with precision controls.',},
  { id: 2, src: 'images/2.webp', name: 'Juice Dispenser 24Ltr Ugolini'},
  { id: 3, src: 'images/2.webp', name: 'Juice Dispenser with Cooler'},
  { id: 4, src: 'images/3.webp', name: 'Buttermilk Dispenser'},
  { id: 5, src: 'images/4.webp', name: 'Juice Dispenser 16Ltr' },
];

// Mock data for recently viewed products
const recentlyViewed = [
  { id: 6, src: 'images/Machine.webp', name: 'Juice Dispenser 2 Tank' },
  { id: 7, src: 'images/pizza.webp', name: 'Deep Fryer Electric' },
  { id: 8, src: 'images/fryer.webp', name: 'Single Tank Electric Fryer' },
  { id: 9, src: 'images/fryer.webp', name: 'Commercial Deep Fryer' },
  { id: 10, src: 'images/popcorn.webp', name: 'Popcorn Machine Gas' },
];

const ProductDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // This will scroll to the top when the page is loaded.
      }, [])

    const { state } = useLocation();
    const navigate = useNavigate();
    const product = state?.product;
    const relatedProducts = state?.relatedProducts || []; // Get the related products from state

  const getImagePath = (imgPath) => {
    if (imgPath.startsWith('http')) return imgPath;
    return process.env.PUBLIC_URL + '/' + imgPath;
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  const handleProductClick = (product) => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    //   // Small delay to allow scroll to complete before navigation
    //   setTimeout(() => {
    //     navigate(`/product/${product.id}`, { state: { product } });
    //   }, 300);
    // };
    window.scrollTo(0, 0);
    
    navigate(`/product/${product.id}`, { state: { product, relatedProducts: product.relatedProducts } });
  };

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

  const renderProductSlider = (products, title) => (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ 
        fontWeight: 'bold', 
        mb: 3,
        color: '#333',
        fontSize: '1.5rem'
      }}>
        {title}
      </Typography>
      <Box sx={{ 
        display: 'flex',
        overflowX: 'auto',
        gap: 3,
        py: 2,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        {products.map((item) => (
          <Card 
            key={item.id} 
            sx={{ 
              minWidth: 220,
              flexShrink: 0,
              cursor: 'pointer',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}
            onClick={() => handleProductClick(item)}
          >
            <CardMedia
              component="img"
              height="160"
              image={getImagePath(item.src)}
              alt={item.name}
              sx={{ 
                objectFit: 'contain',
                p: 2,
                backgroundColor: '#f9f9f9'
              }}
              onError={(e) => {
                e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                mb: 1
              }}>
                {item.name}
              </Typography>
              {/* <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: 'primary.main'
              }}>
                ₹{item.price}
              </Typography> */}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );

  return (
    <Container sx={{ py: 4, maxWidth: 'lg' }}>
      <Button 
        onClick={() => navigate(-1)} 
        sx={{ 
          mb: 3,
          color: 'primary.main',
          fontWeight: 'bold'
        }}
        startIcon={<ArrowBackIosNew fontSize="small" />}
      >
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
              borderRadius: '8px',
              maxHeight: '450px',
              objectFit: 'contain',
              backgroundColor: '#f9f9f9',
              p: 2
            }}
            onError={(e) => {
              e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
            }}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: '#333'
          }}>
            {product.name}
          </Typography>
          
          {product.price && (
            <Typography variant="h4" gutterBottom sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3
            }}>
              ₹{product.price}
            </Typography>
          )}
          
          <Typography variant="body1" paragraph sx={{ 
            color: '#555',
            fontSize: '1.1rem',
            mb: 2
          }}>
            {product.description}
          </Typography>
          
          <Typography variant="body2" paragraph sx={{ 
            color: '#666',
            mb: 4
          }}>
            {product.details}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            mt: 4,
            flexWrap: 'wrap'
          }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleBuyNow}
              sx={{ 
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1rem',
                minWidth: '180px'
              }}
            >
              Buy Now
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              onClick={handleAddToCart}
              sx={{ 
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1rem',
                minWidth: '180px'
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Related Products Section */}
      {renderProductSlider(relatedProducts, "You May Like")}
      
      {/* Recently Viewed Section */}
      {renderProductSlider(recentlyViewed, "Recently Viewed")}
    </Container>
  );
};

export default ProductDetailPage;