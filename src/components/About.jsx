import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Avatar,
  Button,  // Add this import
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Kitchen, 
  Engineering, 
  LocalShipping, 
  SupportAgent,
  VerifiedUser, 
  
} from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <Kitchen sx={{ fontSize: 50, color: "green", }} />,
      title: "Premium Equipment",
      description: "Commercial-grade kitchen machines built to last"
    },
    {
      icon: <Engineering sx={{ fontSize: 50, color: "green" }} />,
      title: "Expert Engineering",
      description: "Innovative designs with robust performance"
    },
    {
      icon: <LocalShipping sx={{ fontSize: 50, color: "green"  }} />,
      title: "Pan-India Delivery",
      description: "Reliable shipping across India"
    },
    {
      icon: <SupportAgent sx={{ fontSize: 50, color: "green"  }} />,
      title: "After-Sales Support",
      description: "Dedicated customer service team"
    }
  ];

  const products = [
    "Tilting Wet Grinder",
    "Vegetable Cutting Machine",
    "Chicken Cutting Machine",
    "Oil Dryer Machine",
    "Idli Steamer",
    "Food Push Carts",
    "Feather Cleaning Machine",
    "Dough Kneader",
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      pt: 8,
      pb: 8
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center',
          mb: 8,
          animation: `${fadeIn} 1s ease-out`
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              color: "green ",
              mb: 2,
              fontSize: isMobile ? '2rem' : '3rem'
            }}
          >
            About Krishna Industries
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "green",
              maxWidth: 800,
              mx: 'auto',
              fontSize: isMobile ? '1rem' : '1.25rem'
            }}
          >
            Leading manufacturer of commercial kitchen equipment in Coimbatore since 2005
          </Typography>
        </Box>

        {/* Company Overview */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            mb: 6,
            borderRadius: 4,
            backgroundColor: 'white',
            animation: `${fadeIn} 1s ease-out 0.2s`,
            animationFillMode: 'both'

          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  color: "green",
                }}
              >
                Our Story
              </Typography>
              <Typography paragraph sx={{ mb: 2 }}>
                Founded in 1998, <strong>Krishna Industries</strong> has grown from a small workshop to a leading manufacturer of commercial kitchen equipment in South India.
              </Typography>
              <Typography paragraph sx={{ mb: 2 }}>
                We specialize in designing and manufacturing durable, high-performance machines for commercial kitchens, restaurants, and food processing units.
              </Typography>
              <Typography paragraph>
                Our commitment to quality and innovation has made us the preferred choice for chefs and business owners across India.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                height: '100%',
                backgroundImage: 'url(/images/Krishna_About.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 3,
                minHeight: 300
              }} />
            </Grid>
          </Grid>
        </Paper>

        {/* Product Highlights */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              mb: 4,
              textAlign: 'center',
              color: "green "
            }}
          >
            Our Product Range
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {products.map((product, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Paper 
                  sx={{ 
                    p: 2,
                    textAlign: 'center',
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                      backgroundColor: "green",
                      color: 'white'
                    }
                  }}
                >
                  <Typography variant="subtitle1">{product}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              color: "green"
            }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 3,
                    animation: `${fadeIn} 1s ease-out ${index * 0.2}s`,
                    animationFillMode: 'both',
                    color: "green",
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 1,
                     
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2">
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box sx={{ 
          textAlign: 'center',
          p: 4,
          borderRadius: 4,
          backgroundColor: "green",
          color: 'white'
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              mb: 2
            }}
          >
            Ready to Upgrade Your Kitchen?
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mb: 3,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Contact us today to discuss your requirements and get expert recommendations.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;