// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, CardMedia, Typography, Button, Skeleton, IconButton, Badge, styled } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import img1 from '../../asserts/Kitchen/Infrared Induction/download (2).jpeg';
// import img2 from '../../asserts/Kitchen/Infrared Induction/images (1).jpeg';
// import img3 from '../../asserts/Kitchen/Infrared Induction/images (2).jpeg';
// import img4 from '../../asserts/Kitchen/Infrared Induction/images (3).jpeg';
// import img5 from '../../asserts/Kitchen/Infrared Induction/images.jpeg';
// import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';



// // Sample product data for Kitchen Equipment
// const products = [
//   {
//     name: "Infrared Induction Cooktop",
//     imageUrl: img1,
    
   
//   },
//   {
//     name: "Commercial Induction Cooktop",
//     imageUrl: img2,
  
//   },
//   {
//     name: "Commercial Induction Cooktop",
//     imageUrl: img3,
    
//   },
//   {
//     name: "Commercial Induction Cooktop",
//     imageUrl: img4,
   
//   },
//   {
//     name: "Commercial Induction Cooktop",
//     imageUrl: img5,
   
//   },
// ];

// function Infrared_CookTop() {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading effect
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000); // Loading for 1.5s
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} sm={8} md={9}>
//           <Grid container spacing={3} justifyContent="center">
//             {products.map((product, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Card
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     height: '100%',
//                     borderRadius: '15px',
//                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                     transition: 'transform 0.3s ease-in-out',
//                     border: '2px solid #eee',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       borderColor: 'orange',
//                     },
//                   }}
//                 >
//                   {loading ? (
//                     <Skeleton variant="rectangular" width="100%" height={180} />
//                   ) : (
//                     <CardMedia
//                       component="img"
//                       height="180"
//                       image={product.imageUrl}
//                       alt={product.name}
//                       sx={{ objectFit: 'contain', borderRadius: '15px 15px 0 0' }}
//                     />
//                   )}
//                   <CardContent>
//                     {loading ? (
//                       <>
//                         <Skeleton variant="text" width="80%" />
//                         <Skeleton variant="text" width="60%" />
//                       </>
//                     ) : (
//                       <>
//                         <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', color: 'orangered' }}>
//                           {product.name}
//                         </Typography>
//                         <Typography variant="h6" align="center" color="primary">
//                           {product.price}
//                         </Typography>
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//         <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
//           {loading ? (
//             <Skeleton variant="rectangular" width="100%" height={300} />
//           ) : (
//             <CardMedia
//               component="img"
//               image={imgDiscount}
//               alt="Discount"
//               sx={{ width: '100%', height: 'auto', borderRadius: '15px' }}
//             />
//           )}
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Infrared_CookTop;
