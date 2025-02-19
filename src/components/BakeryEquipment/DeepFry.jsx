import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography,IconButton, Skeleton } from '@mui/material';
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
      <div className="kitchen-container" style={{ padding: '20px' }}>
     
     
      {/* Product Grid */}
      <Grid container spacing={3}>
        <Grid container itemxs={12} sm={8} md={9} spacing={3} justifyContent="center" > 
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 300,
                width: '100%',
                marginTop:3,
                marginLeft: 3,
                marginRight: 5,
                borderRadius: '15px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
                border: '2px solid #eee',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: 'orange',
                  // '& .cart-icon': {
                  //   opacity: 1,
                  //   visibility: 'visible',
                  // }
                },
              }}
            >
              {/* Image Skeleton Loader */}
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={180} />
              ) : (
                <CardMedia
                  component="img"
                  height="170"
                  image={product.imageUrl}
                  alt={product.name}
                  sx={{ objectFit: 'contain',borderTopLeftRadius: '15px', borderTopRightRadius: '15px', marginTop:1 }}
                />
              )}

              <CardContent sx={{padding:'16px'}}>
                {/* Text Skeleton Loader */}
                {loading ? (
                  <>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        textAlign: 'center',
                        paddingBottom: 1,
                        color: 'orangered',
                        fontWeight: 'bold',
                      }}
                    >
                      {product.name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography> */}
                    <Typography variant="h6" color="primary" align='center'>
                      {product.price}
                    </Typography>
                  </>
                )}

                 {/* Cart Icon (Initially hidden) */}
                 {/* <IconButton
                    aria-label="cart"
                    className="cart-icon" // Added class for targeting in hover
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      opacity: 0, // Initially hidden
                      visibility: 'hidden', // Initially hidden
                      transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth transition
                      '&:hover': {
                        backgroundColor: 'orangered'
                      }
                    }}
                  >
                    <ShoppingCartIcon />
                  </IconButton> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
        {/* Discount Image on the right side */}
                <Grid item xs={12} sm={4} md={3} sx={{ position: 'sticky', top: 100, height: 'calc(100vh - 100%)', zIndex: 1 }}>
                  {loading ?(
                    <>
                    <Skeleton variant='text' width='80%'/>
                    <Skeleton variant='text' width='60%'/>
                    <Skeleton variant='text' width='40%'/>
                    </>
                  ):
                  <CardMedia
                    component="img"
                    image={imgDiscount}
                    alt="Discount"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '15px',
                      marginLeft:'12px',
        
                    }}
                  />}
                </Grid>
      </Grid>
    </div>
    );
}

export default DeepFry;
