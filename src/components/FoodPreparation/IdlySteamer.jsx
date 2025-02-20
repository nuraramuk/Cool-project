import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../../asserts/Food/6378bde51d506205f979fe14-vbenlem-commercial-electric-food-warmer.jpg';
import img2 from '../../asserts/Food/5Rack_Idli.jpg';
import img3 from '../../asserts/Food/commercial-food-warmer-1641379471-6144719.jpeg';
import img4 from '../../asserts/Food/download.jpeg';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// Sample product data for FoodPreparation
const products = [
  {
    name: "Idle Steamer 6 Tray",
    imageUrl: img1,
    
  },
  {
    name: "Idle Steamer 8 Tray",
    imageUrl: img2,
    
  },
  {
    name: "Idle Steamer 10 Tray",
    imageUrl: img3,
   
  },
  {
    name: "Idle Steamer 12 Tray",
    imageUrl: img4,
    
  },
];

function IdlySteamer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading delay
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={3} justifyContent="center">
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    border: '2px solid #eee',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      borderColor: 'orange',
                    },
                  }}
                >
                  {loading ? (
                    <Skeleton variant="rectangular" width="100%" height={180} />
                  ) : (
                    <CardMedia
                      component="img"
                      height="180"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{ objectFit: 'contain', borderRadius: '15px 15px 0 0' }}
                    />
                  )}
                  <CardContent>
                    {loading ? (
                      <>
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="60%" />
                      </>
                    ) : (
                      <>
                        <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', color: 'orangered' }}>
                          {product.name}
                        </Typography>
                        <Typography variant="h6" align="center" color="primary">
                          {product.price}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={300} />
          ) : (
            <CardMedia
              component="img"
              image={imgDiscount}
              alt="Discount"
              sx={{ width: '100%', height: 'auto', borderRadius: '15px' }}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default IdlySteamer;
