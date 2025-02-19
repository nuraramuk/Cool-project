// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import img1 from '../../asserts/Kitchen/3084_commercial_gas_range_single_burner_ss_304-305x305.webp';
// import img2 from '../../asserts/Kitchen/3097_chinese_cooking_range-305x305.webp';
// import img3 from '../../asserts/Kitchen/437_double_burner_range_stainless_steel-305x305.webp';
// import img4 from '../../asserts/Kitchen/502_single_burner_square_18x18-500x500.webp';
// import img5 from '../../asserts/Kitchen/572_table_top_single_burner_12-305x305.webp';
// import img6 from '../../asserts/Kitchen/H0f98ff0fd4b14713bd869ac7a2079d1bU.jpg_720x720q50.avif';
// import img7 from '../../asserts/Kitchen/Stock_Pot_Ranges.webp';
// import img8 from '../../asserts/Kitchen/images.jpeg';
// import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// const products = [
//   { name: "Commercial Gas Range", imageUrl: img1, description: "High-performance commercial gas range for professional kitchens.", price: "$899.99" },
//   { name: "Commercial Electric Range", imageUrl: img2, description: "Efficient electric range suitable for fast-paced kitchens.", price: "$799.99" },
//   { name: "Commercial Induction ", imageUrl: img3, description: "State-of-the-art induction cooktop for precise temperature control.", price: "$1,199.99" },
//   { name: "Infrared Cooktop", imageUrl: img4, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
//   { name: "Infrared Cooktop", imageUrl: img5, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
//   { name: "Infrared Cooktop", imageUrl: img6, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
//   { name: "Infrared Cooktop", imageUrl: img7, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
//   { name: "Infrared Cooktop", imageUrl: img8, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
// ];

// function Commercial_Gas() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="kitchen-container" style={{ padding: '20px' }}>


//       <Grid container spacing={3}>
//         {/* Cards on the left side */}
//         <Grid container item xs={12} sm={8} md={9} spacing={3} justifyContent="center">
//           {products.map((product, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   height: 370,
//                   width: 240,
//                   marginLeft: 3,
//                   marginRight: 5,
//                   borderRadius: '15px',
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                   transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
//                   border: '2px solid #eee',
//                   position: 'relative',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     borderColor: 'orange',
//                     '& .cart-icon': {
//                       opacity: 1,
//                       visibility: 'visible',

//                     },
//                   },
//                 }}
//               >
//                 {loading ? (
//                   <Skeleton variant="rectangular" width="100%" height={180} sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
//                 ) : (
//                   <CardMedia
//                     component="img"
//                     height="170"
//                     image={product.imageUrl}
//                     alt={product.name}
//                     sx={{ objectFit: 'contain', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
//                   />
//                 )}
//                 <CardContent sx={{ padding: '16px' }}>
//                   {loading ? (
//                     <>
//                       <Skeleton variant="text" width="80%" />
//                       <Skeleton variant="text" width="60%" />
//                       <Skeleton variant="text" width="40%" />
//                     </>
//                   ) : (
//                     <>
//                       <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ textAlign: 'center', paddingBottom: 1, color: 'orangered', fontWeight: 'bold', margin: '0px' }}
//                       >
//                         {product.name}
//                       </Typography>
//                       <Typography variant="body2" color="" paragraph>
//                         {product.description}
//                       </Typography>
//                       <Typography variant="h6" color="blue">
//                         {product.price}
//                       </Typography>
//                     </>
//                   )}
//                   {/* Cart Icon (Initially hidden) */}
//                   <IconButton
//                     aria-label="cart"
//                     className="cart-icon" // Added class for targeting in hover
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       backgroundColor: '#fff',
//                       boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                       opacity: 0, // Initially hidden
//                       visibility: 'hidden', // Initially hidden
//                       transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth transition
//                       '&:hover': {
//                         backgroundColor: 'orangered'
//                       }
//                     }}
//                   >
//                     <ShoppingCartIcon />
//                   </IconButton>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Discount Image on the right side */}

//         <Grid item xs={12} sm={4} md={3} sx={{ position: 'sticky', top: 100, height: 'calc(100vh - 100%)', zIndex: 1 }}>
//           {loading ? (
//             <>
//               <Skeleton variant='text' width='80%' />
//               <Skeleton variant='text' width='60%' />
//               <Skeleton variant='text' width='40%' />
//             </>
//           ) : (
//             <CardMedia
//               component="img"
//               image={imgDiscount}
//               alt="Discount"
//               sx={{
//                 width: '100%',
//                 // height: '80%',
//                 borderRadius: '15px',
//               }}
//             />

//           )}
//         </Grid>

//       </Grid>
//     </div>
//   );
// }

// export default Commercial_Gas;

import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../../asserts/Kitchen/3084_commercial_gas_range_single_burner_ss_304-305x305.webp';
import img2 from '../../asserts/Kitchen/3097_chinese_cooking_range-305x305.webp';
import img3 from '../../asserts/Kitchen/437_double_burner_range_stainless_steel-305x305.webp';
import img4 from '../../asserts/Kitchen/502_single_burner_square_18x18-500x500.webp';
import img5 from '../../asserts/Kitchen/572_table_top_single_burner_12-305x305.webp';
import img6 from '../../asserts/Kitchen/H0f98ff0fd4b14713bd869ac7a2079d1bU.jpg_720x720q50.avif';
import img7 from '../../asserts/Kitchen/Stock_Pot_Ranges.webp';
import img8 from '../../asserts/Kitchen/images.jpeg';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  { name: "Commercial Gas Range", imageUrl: img1, description: "High-performance commercial gas range for professional kitchens.", price: "$899.99" },
  { name: "Commercial Electric Range", imageUrl: img2, description: "Efficient electric range suitable for fast-paced kitchens.", price: "$799.99" },
  { name: "Commercial Induction ", imageUrl: img3, description: "State-of-the-art induction cooktop for precise temperature control.", price: "$1,199.99" },
  { name: "Infrared Cooktop", imageUrl: img4, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
  { name: "Infrared Cooktop", imageUrl: img5, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
  { name: "Infrared Cooktop", imageUrl: img6, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
  { name: "Infrared Cooktop", imageUrl: img7, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
  { name: "Infrared Cooktop", imageUrl: img8, description: "Fast and efficient infrared cooktop for any kitchen.", price: "$999.99" },
];

function Commercial_Gas() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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

export default Commercial_Gas;