import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#222',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Krishna Industries
            </Typography>
            <Typography variant="body2">
              <Link href="tel:+919171585789" color="inherit" sx={{ textDecoration: 'none' }}>
                📞+91 91715 85789
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              📍338/D2C, Sri Venkateshwara Industrial Estate
              Balaguru Garden West, Peelamedu,
              Coimbatore - 641 004
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.instagram.com/krishna_kitchen_equipments/reels/" target="_blank" color="inherit">
                <Instagram sx={{ fontSize: '28px', '&:hover': { color: '#e4405f' } }} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100054503813149&sk=photos" target="_blank" color="inherit">
                <Facebook sx={{ fontSize: '28px', '&:hover': { color: '#1877f2' } }} />
              </Link>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Subscribe to our newsletter to stay updated with our latest products.
            </Typography>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '8px 10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '10px',
                fontSize: '14px',
              }}
            />
            <button
              style={{
                backgroundColor: '#004e92',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '14px',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#003e76'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#004e92'}
            >
              Subscribe
            </button>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', marginTop: 2, marginBottom: 0 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Krishna Industries. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
