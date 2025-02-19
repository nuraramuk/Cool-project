import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../../asserts/Bakery/Deep Fryer/633ad2f364c21f45d211ce14-topkitch-electric-deep-fryer-stainless.jpg';
import img2 from '../../asserts/Bakery/Deep Fryer/images.jpeg';
import img3 from '../../asserts/Bakery/Deep Fryer/images (1).jpeg';
import img4 from '../../asserts/Bakery/Deep Fryer/en-01.webp';
import img5 from '../../asserts/Bakery/Deep Fryer/Vn8lCadIlVE7FvT3AFMPo8Kd1lpsOmSxzIbYvSWp.webp';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// Sample product data for Deepfry
const products = [
  {
    name: "Deep Fry",
    imageUrl: img1,
    description: "",
    price: "Rs:2500"
  },
  {
    name: "Electric Deep Fry",
    imageUrl: img2,
    description: "",
    price: "Rs:3000"
  },
  {
    name: "Mini Electric Deep Fry",
    imageUrl: img3,
    description: "",
    price: "Rs:2000"
  },
  {
    name: "Deep Fryer 4ltr Electric Single Tank Indulge",
    imageUrl: img4,
    description: "",
    price: "Rs:2000"
  },
  {
    name: "Deep Fryer 20Ltr Gas Dean",
    imageUrl: img5,
    description: "",
    price: "Rs:2000"
  },
];

function DeepFry() {
  const [loading, setLoading] = useState(true);

  // Simulate loading state for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
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

export default DeepFry;
