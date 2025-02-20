import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import img1 from '../../asserts/Kitchen/Inducation/1730980691039-watmrkA.webp'
import img2 from '../../asserts/Kitchen/Inducation/2394_Induction_Hot_plate_5000w-228x228.jpg'
// import img3 from '../../asserts/Kitchen/Inducation/drop-in_induction_wok_3500_w-268x299.webp'
// import img4 from '../../asserts/Kitchen/Inducation/froth-flavor-froth-flavor-commercial-induction-cooktop-852369-original-imafjpbgnvgbjyn2.webp'
// import img5 from '../../asserts/Kitchen/Inducation/induction_wok_sirman_ih-35-wok-268x299.webp'
import img6 from '../../asserts/Kitchen/Inducation/table_top_induction_hob_3500_w-268x299.webp'
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

import img10 from '../../asserts/Kitchen/Infrared Induction/download (2).jpeg';
import img12 from '../../asserts/Kitchen/Infrared Induction/images (1).jpeg';
// import img13 from '../../asserts/Kitchen/Infrared Induction/images (2).jpeg';
import img14 from '../../asserts/Kitchen/Infrared Induction/images (3).jpeg';
import img15 from '../../asserts/Kitchen/Infrared Induction/images.jpeg';


const products = [
  {
    name: "Commercial Induction Induction",
    imageUrl: img6,
  
  },
  {
    name: "Silver Cooktop",
    imageUrl: img2,
  
  },
   {
      name: "Electric Wudnik Infrared Induction Cooktop",
      imageUrl: img10,
      
     
    },
    {
      name: "Commercial Induction Cooktop",
      imageUrl: img12,
    
    },
  
    {
      name: "Black Induction Cooktop",
      imageUrl: img14,
     
    },
    {
      name: "Double  Induction Cooktop",
      imageUrl: img15,
     
    },

];

function Commerical_induction() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Loading for 1.5s
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

export default Commerical_induction;
