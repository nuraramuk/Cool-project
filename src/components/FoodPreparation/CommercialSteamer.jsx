import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../../asserts/Food/Coomercial Food/63458f986fcdb46754490c03-ubuy-online-shopping.jpg';
import img2 from '../../asserts/Food/Coomercial Food/922_food_steamer_multipurpose_4_trays_electric-200x200.webp';
import img3 from '../../asserts/Food/Coomercial Food/928_food_steamer_multipurpose_24_trays_gas_operated-200x200.webp';
import img4 from '../../asserts/Food/Coomercial Food/commercial-rice-steamer-machine-4.jpg';
import img5 from '../../asserts/Food/Coomercial Food/gas_food_steamer_with_6_trays-305x305.webp';
import img6 from '../../asserts/Food/Coomercial Food/images (1).jpeg';
import img7 from '../../asserts/Food/Coomercial Food/images (2).jpeg';
import img8 from '../../asserts/Food/Coomercial Food/images.jpeg';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// Sample Products data for CommercialSteamer
const products = [
  {
    name: ' Commercial Electric Food Warmer Display Case',
    imageUrl: img1,
    
  },
  {
    name: ' Commercial Multi Purpose Food Steamers',
    imageUrl: img2,
 
  },
  {
    name: 'Commercial Food Steamer 24 Trays',
    imageUrl: img4,
    
  },
  {
    name: 'Multi purpose Food Steamer',
    imageUrl: img5,
     
  },
  
  {
    name: 'Food Steamer',
    imageUrl: img7,
    
  },
];

function CommercialSteamer() {
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

export default CommercialSteamer;
