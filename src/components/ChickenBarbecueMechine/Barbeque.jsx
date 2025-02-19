import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import img1 from '../../asserts/Chicken Machine/BBQ/66271084a1b2c5477a165c66-vertical-electric-rotisserie-oven.jpg';
import img2 from '../../asserts/Chicken Machine/BBQ/Foldable-Briefcase-Type-Barbeque-Grill-Set-2_720x.webp';
import img3 from '../../asserts/Chicken Machine/BBQ/Title-Image_c68cea22-57cc-487c-91ed-7c21f1cef1c9.webp';
import img4 from '../../asserts/Chicken Machine/BBQ/bbq-griller-machine-250x250.webp';
import img5 from '../../asserts/Chicken Machine/BBQ/download.jpeg';
import img6 from '../../asserts/Chicken Machine/BBQ/images (2).jpeg';

// Sample product data for Barbeque
const products = [
  {
    name: "Electric barbeque",
    imageUrl: img1,
    description: "",
    price: "Rs:2500"
  },
  {
    name: "Stainless steel barbeque",
    imageUrl: img2,
    description: "",
    price: "Rs:2500"
  },
  {
    name: "Stainless steel barbeque with roller",
    imageUrl: img3,
    description: "",
    price: "Rs:2500"
  },
  {
    name: "Barbeque Closer Type",
    imageUrl: img4,
    description: "",
    price: "Rs:2500"
  },
  {
    name: "Smokeless Barbecue Oven Small Electric",
    imageUrl: img5,
    description: "",
    price: "Rs:2500"
  },
  {
    name: "Smokeless Barbecue Oven Big Gas",
    imageUrl: img6,
    description: "",
    price: "Rs:2500"
  },
];

function Barbeque() {
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 1000); // 2 seconds delay

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

export default Barbeque;
