import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import img1 from '../../asserts/Food/Machine/Atta.webp';
import img2 from '../../asserts/Food/Machine/coconut.webp';
import img3 from '../../asserts/Food/Machine/holwa.jpg';
import img4 from '../../asserts/Food/Machine/Idiyappam.avif';
import img5 from '../../asserts/Food/Machine/noodles.jpg';
import img6 from '../../asserts/Food/Machine/peeler.webp';
import img7 from '../../asserts/Food/Machine/sanwich.jpg';
import img8 from '../../asserts/Food/Machine/uruli.webp';
import img9 from '../../asserts/Food/Machine/vegcutter.jpg';
import img10 from '../../asserts/Food/Machine/waffle.png';

// Sample product data for Shawarma
const products = [
  {
    name: "Atta Kneader",
    imageUrl: img1,
     
  },
  {
    name: "Coconut Scrapper",
    imageUrl: img2,
    
  },
  {
    name: "Holwa Maker",
    imageUrl: img3,
    
  },
  {
    name: "Idiyappam Maker",
    imageUrl: img4,
     
  },
  {
    name: "Noodles Maker",
    imageUrl: img5,
    
  },
  {
    name: "Peeler",
    imageUrl: img6,
   
  },
  {
    name: "Sanwich Maker",
    imageUrl: img7,
     
  },
  {
    name: "Uruli Roaster",
    imageUrl: img8,
     
  },
  {
    name: " Vegetable Cutter",
    imageUrl: img9,
   
  },
  {
    name: "Waffle Maker",
    imageUrl: img10,
    
  },

];

function PreparationMachines() {
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

export default PreparationMachines;
