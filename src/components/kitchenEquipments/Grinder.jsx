// // import React, { useState, useEffect } from 'react';
// // import { Grid, Card, CardContent, CardMedia, Typography, Skeleton } from '@mui/material';
// // // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import img1 from '../../asserts/Kitchen/Grinder/Grinder1.webp'
// // import img2 from '../../asserts/Kitchen/Grinder/Grinder2.jpg'
// // import img3 from '../../asserts/Kitchen/Grinder/Grinder3.jpg'
// // import img4 from '../../asserts/Kitchen/Grinder/Grinder4.jpg'

// // import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// // const products = [
// //   {
// //     name: "Conventional Ordinary Wet Grinder",
// //     imageUrl: img1,
  
// //   },
// //   // {
// //   //   name: "Commercial Tilting Wet Grinder",
// //   //   imageUrl: img2,
    
// //   // },
// //   {
// //     name: "Instant Wet Grinder",
// //     imageUrl: img3,
   
// //   },
// //   {
// //     name: "Table Tap Wet Grinder",
// //     imageUrl: img4,
   
// //   },

// // ];

// // function Grinder() {
// //   const [loading, setLoading] = useState(true);

// //   // Simulate loading effect
// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 1000); // Loading for 1.5s
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (

// //     <div style={{ padding: '20px' }}>
// //       <Grid container spacing={3} justifyContent="center">
// //         <Grid item xs={12} sm={8} md={9}>
// //           <Grid container spacing={3} justifyContent="center">
// //             {products.map((product, index) => (
// //               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
// //                 <Card
// //                   sx={{
// //                     display: 'flex',
// //                     flexDirection: 'column',
// //                     justifyContent: 'space-between',
// //                     height: '100%',
// //                     borderRadius: '15px',
// //                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
// //                     transition: 'transform 0.3s ease-in-out',
// //                     border: '2px solid #eee',
// //                     '&:hover': {
// //                       transform: 'scale(1.05)',
// //                       borderColor: 'orange',
// //                     },
// //                   }}
// //                 >
// //                   {loading ? (
// //                     <Skeleton variant="rectangular" width="100%" height={180} />
// //                   ) : (
// //                     <CardMedia
// //                       component="img"
// //                       height="180"
// //                       image={product.imageUrl}
// //                       alt={product.name}
// //                       sx={{ objectFit: 'contain', borderRadius: '15px 15px 0 0' }}
// //                     />
// //                   )}
// //                   <CardContent>
// //                     {loading ? (
// //                       <>
// //                         <Skeleton variant="text" width="80%" />
// //                         <Skeleton variant="text" width="60%" />
// //                       </>
// //                     ) : (
// //                       <>
// //                         <Typography variant="h6" align="center" sx={{fontFamily:'Roboto',fontSize:'16px', fontWeight: 'bold', color: 'orangered' }}>
// //                           {product.name}
// //                         </Typography>
// //                         <Typography variant="h6" align="center" color="primary">
// //                           {product.price}
// //                         </Typography>
// //                       </>
// //                     )}
// //                   </CardContent>
// //                 </Card>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Grid>
// //         <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
// //           {loading ? (
// //             <Skeleton variant="rectangular" width="100%" height={300} />
// //           ) : (
// //             <CardMedia
// //               component="img"
// //               image={imgDiscount}
// //               alt="Discount"
// //               sx={{ width: '100%', height: 'auto', borderRadius: '15px' }}
// //             />
// //           )}
// //         </Grid>
// //       </Grid>
// //     </div>
// //   );
// // }

// // export default Grinder;


// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
// import img1 from '../../asserts/Kitchen/Grinder/Grinder1.webp'
// import img2 from '../../asserts/Kitchen/Grinder/Grinder2.jpg'
// import img3 from '../../asserts/Kitchen/Grinder/Grinder3.jpg'
// import img4 from '../../asserts/Kitchen/Grinder/Grinder4.jpg'

// import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// const products = [
//   {
//     name: "Conventional Ordinary Wet Grinder",
//     imageUrl: img1,
//     price: "$200",
//     constant:''
//   },
//   {
//     name: "Instant Wet Grinder",
//     imageUrl: img3,
//     price: "$350",
//   },
//   {
//     name: "Table Tap Wet Grinder",
//     imageUrl: img4,
//     price: "$450",
//   },
// ];

// function Grinder() {
//   const [loading, setLoading] = useState(true);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Simulate loading effect
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000); // Loading for 1.5s
//     return () => clearTimeout(timer);
//   }, []);

//   const handleCardClick = (product) => {
//     setSelectedProduct(product);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedProduct(null);
//   };

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
//                   onClick={() => handleCardClick(product)}
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
//                         <Typography variant="h6" align="center" sx={{fontFamily:'Roboto',fontSize:'16px', fontWeight: 'bold', color: 'orangered' }}>
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

//       {/* Dialog to show product details */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>{selectedProduct?.name}</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12} sm={6}>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={selectedProduct?.imageUrl}
//                 alt={selectedProduct?.name}
//                 sx={{ objectFit: 'contain' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
//                 {selectedProduct?.name}
//               </Typography>
//               <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
//                 Price: {selectedProduct?.price}
//               </Typography>
//               <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
//                 Price: {selectedProduct?.contant}
//               </Typography>
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default Grinder;


import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import img1 from '../../asserts/Kitchen/Grinder/Grinder1.webp';
import img2 from '../../asserts/Kitchen/Grinder/Grinder2.jpg';
import img3 from '../../asserts/Kitchen/Grinder/Grinder3.jpg';
import img4 from '../../asserts/Kitchen/Grinder/Grinder4.jpg';

import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Conventional Ordinary Wet Grinder",
    imageUrl: img1,
    price: "$200",
    description: "This grinder is perfect for traditional wet grinding, ideal for making dosa, idli batter, and more. It has a high-quality motor, and the body is made of food-grade material for safe use. This is a must-have for any kitchen."
  },
  {
    name: "Instant Wet Grinder",
    imageUrl: img3,
    price: "$350",
    description: "An instant wet grinder that can quickly grind various ingredients. It's compact, easy to use, and very efficient. Suitable for both home kitchens and small commercial setups."
  },
  {
    name: "Table Tap Wet Grinder",
    imageUrl: img4,
    price: "$450",
    description: "This wet grinder features a unique table tap design for ease of use and portability. It delivers smooth grinding results in less time. It's perfect for both small and large quantities of ingredients."
  },
];

function Grinder() {
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Loading for 1.5s
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

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
                  onClick={() => handleCardClick(product)}
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
                        <Typography variant="h6" align="center" sx={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 'bold', color: 'orangered' }}>
                          {product.name}
                        </Typography>
                        <Typography variant="h6" align="center" color="primary">
                          {/* {product.price} */}
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

      {/* Dialog to show product details */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                height="250"
                image={selectedProduct?.imageUrl}
                alt={selectedProduct?.name}
                sx={{ objectFit: 'contain' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                {selectedProduct?.name}
              </Typography>
              <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
                {/* Price: {selectedProduct?.price} */}
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  marginTop: '10px',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 8,
                  height: '160px', // limit height to accommodate 8 lines of text
                  textOverflow: 'ellipsis',
                }}
              >
                {selectedProduct?.description}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Grinder;
