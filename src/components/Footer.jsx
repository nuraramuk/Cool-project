import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com package
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Divider,
  TextField,
  Button
} from '@mui/material';
import {
  Instagram,
  Facebook,
  Phone,
  LocationOn,
  Email,
  Send
} from '@mui/icons-material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_EMAILJS_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your template ID
        {
          to_email: 'info@krishnaindustries.online', // Your recipient email
          from_email: email,
          message: 'New subscription from website'
        },
        'YOUR_EMAILJS_USER_ID' // Replace with your user ID
      );

      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'rgba(255, 255, 255, 0.8)',
        padding: { xs: '30px 0', md: '50px 0 20px' },
        marginTop: '100px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'Roboto',
                color: 'white',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#FF6B00',
                  marginTop: '8px'
                }
              }}
            >
              Krishna Industries
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <Phone sx={{ color: '#FF6B00', mr: 1.5, fontSize: '20px' }} />
              <Link
                href="tel:+918608333373"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  fontFamily: 'Roboto',
                  '&:hover': { color: '#FF6B00' }
                }}
              >
                +91 86083 33373
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <Phone sx={{ color: '#FF6B00', mr: 1.5, fontSize: '20px' }} />
              <Link
                href="tel:+918270333363"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  fontFamily: 'Roboto',
                  '&:hover': { color: '#FF6B00' }
                }}
              >
                +91 82703 33363
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
              <LocationOn sx={{ color: '#FF6B00', mr: 1.5, mt: 0.5, fontSize: '20px', mb: 1.5 }} />
              <Typography variant="body2" sx={{ fontFamily: 'Roboto' }}>
                338/D2C, Sri Venkateshwara Industrial Estate<br />
                Balaguru Garden West, Peelamedu,<br />
                Coimbatore - 641 004
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ color: '#FF6B00', mr: 1.5, fontSize: '20px' }} />
              <Link
                href="mailto:info@krishnaindustries.online"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  fontFamily: 'Roboto',
                  '&:hover': { color: '#FF6B00' }
                }}
              >
                info@krishnaindustries.online
              </Link>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'Roboto',
                color: 'white',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#FF6B00',
                  marginTop: '8px'
                }
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="inherit" sx={{ textDecoration: 'none', fontFamily: 'Roboto', '&:hover': { color: '#FF6B00' } }}>
                About Us
              </Link>
              {/* <Link href="/products" color="inherit" sx={{ textDecoration: 'none', fontFamily: 'Roboto', '&:hover': { color: '#FF6B00' } }}>
                Our Products
              </Link> */}
              {/* <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', fontFamily: 'Roboto', '&:hover': { color: '#FF6B00' } }}>
                Contact Us
              </Link> */}
              {/* <Link href="/privacy" color="inherit" sx={{ textDecoration: 'none', fontFamily: 'Roboto', '&:hover': { color: '#FF6B00' } }}>
                Privacy Policy
              </Link> */}
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'Roboto',
                color: 'white',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#FF6B00',
                  marginTop: '8px'
                }
              }}
            >
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Roboto' }}>
              Stay connected with us on social media for updates and promotions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="https://www.instagram.com/krishna_kitchen_equipments/reels/"
                target="_blank"
                sx={{
                  color: 'inherit',
                  '&:hover': {
                    color: '#e4405f',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Instagram sx={{ fontSize: '32px' }} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100054503813149&sk=photos"
                target="_blank"
                sx={{
                  color: 'inherit',
                  '&:hover': {
                    color: '#1877f2',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Facebook sx={{ fontSize: '32px' }} />
              </Link>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'Roboto',
                color: 'white',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#FF6B00',
                  marginTop: '8px'
                }
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Roboto' }}>
              Subscribe to our newsletter for the latest updates and offers.
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <TextField
                variant="outlined"
                placeholder="Your email address"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FF6B00',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FF6B00',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    padding: '10px 14px',
                  },
                }}
              />
              <Button
                variant="contained"
                endIcon={<Send />}
                sx={{
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#E05D00',
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', mb: 0 }}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              fontFamily: 'Roboto',
              fontSize: '0.8rem'
            }}
          >
            &copy; {new Date().getFullYear()} Krishna Industries. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;