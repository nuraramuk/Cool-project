// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   IconButton,
//   Typography,
//   Box,
//   Divider,
//   Slide,
//   Fade
// } from '@mui/material';
// import { Close, Phone, Person } from '@mui/icons-material';
// import { keyframes } from '@mui/system';

// // Animation for background overlay
// const fadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1; }
// `;

// // Animation for dialog entrance
// const slideUp = keyframes`
//   from { transform: translateY(20px); opacity: 0; }
//   to { transform: translateY(0); opacity: 1; }
// `;

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const ContactPopup = () => {
//   const [open, setOpen] = useState(true);
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');

//   const handleClose = () => {
//     setOpen(false);
//     window.history.back();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Name:', name, 'Mobile:', mobile);
//     handleClose();
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       maxWidth="sm"
//       fullWidth
//       TransitionComponent={Transition}
//       PaperProps={{
//         sx: {
//           borderRadius: '12px',
//           boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//           animation: `${slideUp} 0.3s ease-out`,
//           overflow: 'hidden'
//         }
//       }}
//       sx={{
//         '& .MuiBackdrop-root': {
//           animation: `${fadeIn} 0.3s ease-out`,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)'
//         }
//       }}
//     >
//       <Fade in={open}>
//         <Box>
//           <DialogTitle sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: '#FF6B00',
//             color: 'white',
//             padding: '16px 24px',
//             transition: 'all 0.3s ease'
//           }}>
//             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//               Contact Krishna Industries
//             </Typography>
//             <IconButton 
//               onClick={handleClose} 
//               sx={{ 
//                 color: 'white',
//                 transition: 'transform 0.2s ease',
//                 '&:hover': {
//                   transform: 'rotate(90deg)'
//                 }
//               }}
//             >
//               <Close />
//             </IconButton>
//           </DialogTitle>
          
//           <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          
//           <DialogContent sx={{ 
//             padding: '24px',
//             transition: 'all 0.3s ease'
//           }}>
//             <form onSubmit={handleSubmit}>
//               <Box sx={{ mb: 3 }}>
//                 <Fade in={open} timeout={500}>
//                   <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
//                     Please share your details and we'll contact you shortly
//                   </Typography>
//                 </Fade>
                
//                 <Box sx={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mb: 1,
//                   transition: 'all 0.3s ease'
//                 }}>
//                   <Person color="primary" sx={{ mr: 1 }} />
//                   <Typography variant="subtitle2">Your Name</Typography>
//                 </Box>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   margin="normal"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       borderRadius: '8px',
//                       transition: 'all 0.3s ease',
//                       '& fieldset': {
//                         borderColor: '#ddd',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#FF6B00',
//                       },
//                     }
//                   }}
//                 />
                
//                 <Box sx={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mb: 1, 
//                   mt: 2,
//                   transition: 'all 0.3s ease'
//                 }}>
//                   <Phone color="primary" sx={{ mr: 1 }} />
//                   <Typography variant="subtitle2">Mobile Number</Typography>
//                 </Box>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   margin="normal"
//                   placeholder="Enter your mobile number"
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                   required
//                   type="tel"
//                   InputProps={{
//                     startAdornment: (
//                       <Box sx={{ 
//                         mr: 1, 
//                         color: 'text.primary',
//                         fontWeight: 500
//                       }}>
//                         +91
//                       </Box>
//                     )
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       borderRadius: '8px',
//                       transition: 'all 0.3s ease',
//                       '& fieldset': {
//                         borderColor: '#ddd',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#FF6B00',
//                       },
//                     }
//                   }}
//                 />
//               </Box>
              
//               <DialogActions sx={{ padding: 0 }}>
//                 <Button 
//                   type="submit" 
//                   variant="contained" 
//                   fullWidth
//                   size="large"
//                   sx={{
//                     backgroundColor: '#FF6B00',
//                     color: 'white',
//                     fontWeight: 600,
//                     borderRadius: '8px',
//                     py: 1.5,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       backgroundColor: '#E05D00',
//                       transform: 'translateY(-2px)'
//                     }
//                   }}
//                 >
//                   Submit Requirements
//                 </Button>
//               </DialogActions>
//             </form>
//           </DialogContent>
          
//           <Divider />
          
//           <Box sx={{ 
//             padding: '16px 24px',
//             backgroundColor: '#f9f9f9',
//             borderBottomLeftRadius: '12px',
//             borderBottomRightRadius: '12px',
//             transition: 'all 0.3s ease'
//           }}>
//             <Fade in={open} timeout={700}>
//               <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
//                 We'll contact you within 24 hours
//               </Typography>
//             </Fade>
//           </Box>
//         </Box>
//       </Fade>
//     </Dialog>
//   );
// };

// export default ContactPopup;