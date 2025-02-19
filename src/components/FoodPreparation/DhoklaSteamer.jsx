import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../../asserts/Food/Dokla/JSRT20211545-watmrkA.webp';
import img2 from '../../asserts/Food/Dokla/Shriram_Associate_Dhokla_Maker_Manufacturer_1.jpg';
import img3 from '../../asserts/Food/Dokla/images.jpeg';
import img4 from '../../asserts/Food/Dokla/large-commercial-Aluminum-Idli-Steamer-for-restaurant-nishi_826x700.webp';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// Sample Products data for Dhokla Steamer
const products = [
  {
    name: 'Dhokla Steamer 1',
    imageUrl: img1,
    description: 'Efficient Dhokla Steamer for perfect cooking every time.',
    price: '$1000',
  },
  {
    name: 'Dhokla Steamer 2',
    imageUrl: img2,
    description: 'Commercial-grade Dhokla Steamer with multi-tier trays.',
    price: '$1500',
  },
  {
    name: 'Dhokla Steamer 3',
    imageUrl: img3,
    description: 'Durable steamer for restaurant-grade Dhokla preparation.',
    price: '$1200',
  },
  {
    name: 'Dhokla Steamer 4',
    imageUrl: img4,
    description: 'Large aluminum steamer for bulk cooking.',
    price: '$1800',
  },
];

function DhoklaSteamer() {
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

export default DhoklaSteamer;
