import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/BusinessType/Machines/candy.webp'
import img2 from '../../asserts/BusinessType/Machines/chocolate.jpg'
import img3 from '../../asserts/BusinessType/Machines/egg.jpg'
import img4 from '../../asserts/BusinessType/Machines/icecream.webp'
import img5 from '../../asserts/BusinessType/Machines/onion.jpg'
import img6 from '../../asserts/BusinessType/Machines/planetary.jpg'
import img7 from '../../asserts/BusinessType/Machines/popcorn.webp'
import img8 from '../../asserts/BusinessType/Machines/sweetcorn.webp'


import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Cotton Candy",
    imageUrl: img1,
    tag: "Popular",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 24\" x 24\" x 40\", Voltage: 220V, Capacity: 1 cotton candy per 2 minutes",
    description: "The Cotton Candy Machine offers a fun and efficient way to create delicious cotton candy. With 1000 watts of power, it spins sugar into cotton candy within minutes, making it perfect for parties, fairs, and festivals. Its stainless steel construction ensures durability and easy cleaning."
  },
  {
    name: "Chocolate Fountain",
    imageUrl: img2,
    tag: "Elegant",
    specification: "Material: Stainless Steel, Power: 200 Watts, Dimensions: 18\" x 18\" x 24\", Voltage: 220V, Capacity: 5 lbs of chocolate",
    description: "The Chocolate Fountain is an elegant solution for serving melted chocolate in a cascading display. With a capacity to hold up to 5 lbs of chocolate, it is ideal for parties, weddings, and special events. Made of stainless steel, it is easy to maintain and provides an attractive focal point."
  },
  {
    name: "Quail Egg",
    imageUrl: img3,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 800 Watts, Dimensions: 20\" x 15\" x 12\", Voltage: 220V, Capacity: 500 eggs per hour",
    description: "The Quail Egg Cooker is designed to efficiently cook up to 500 quail eggs per hour. Made from stainless steel, it ensures durability and quick cooking times, making it perfect for commercial kitchens and food vendors specializing in quail eggs."
  },
  {
    name: "Ice Cream Machine",
    imageUrl: img4,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 24\" x 24\" x 48\", Voltage: 220V, Capacity: 5 liters per hour",
    description: "The Ice Cream Machine is a professional-grade appliance designed for high-volume ice cream production. With 1500 watts of power and a capacity of 5 liters per hour, it is perfect for restaurants, ice cream parlors, and catering services."
  },
  {
    name: "Blooming Onion",
    imageUrl: img5,
    tag: "Unique",
    specification: "Material: Stainless Steel, Power: 1200 Watts, Dimensions: 20\" x 20\" x 18\", Voltage: 220V, Capacity: 1 blooming onion per cycle",
    description: "The Blooming Onion machine is a unique and fun way to serve a crowd-pleasing appetizer. With its stainless steel construction and 1200 watts of power, it can prepare a single blooming onion in just minutes, making it ideal for restaurants and food festivals."
  },
  {
    name: "Planetary Mixer",
    imageUrl: img6,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 18\" x 18\" x 30\", Voltage: 220V, Capacity: 10 liters",
    description: "The Planetary Mixer is an efficient and versatile kitchen appliance designed for mixing large batches of dough, batter, and other ingredients. With a 10-liter capacity and powerful motor, it is perfect for bakeries, catering services, and commercial kitchens."
  },
  {
    name: "Popcorn Machines",
    imageUrl: img7,
    tag: "Popular",
    specification: "Material: Stainless Steel, Power: 1200 Watts, Dimensions: 24\" x 20\" x 36\", Voltage: 220V, Capacity: 3.5 oz of popcorn kernels per batch",
    description: "The Popcorn Machine is a popular choice for fairs, cinemas, and home use. With 1200 watts of power, it can pop 3.5 oz of kernels per batch, delivering fresh, delicious popcorn in minutes. The stainless steel design ensures easy maintenance and durability."
  },
  {
    name: "Sweet Corn Machines",
    imageUrl: img8,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 18\" x 18\" x 24\", Voltage: 220V, Capacity: 5 corn cobs per cycle",
    description: "The Sweet Corn Machine is designed to efficiently cook and serve sweet corn on the cob. With a 5-cob capacity per cycle and 1000 watts of power, it is perfect for food vendors, outdoor events, and catering services."
  }
];
function BusinessMachines() {
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleViewDetails = (product) => {
    navigate('/Commerical_pro', { state: { product, category: 'Gas' } });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{
      padding: { xs: '15px', sm: '20px', md: '30px' },
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <Typography variant="h5" sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Roboto',
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '80px',
          height: '4px',
          backgroundColor: '#FF6B00',
          margin: '10px auto 0'
        }
      }}>
        Business Machines Showcase
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    border: '1px solid #eee',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                      borderColor: '#FF6B00'
                    }
                  }}
                >
                  {/* Product Tag */}
                  {!loading && product.tag && (
                    <Chip
                      label={product.tag}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: '#FF6B00',
                        color: 'white',
                        fontWeight: 'bold',
                        zIndex: 1
                      }}
                    />
                  )}

                  {/* Image Section */}
                  <Box sx={{
                    position: 'relative',
                    paddingTop: '75%', // 4:3 aspect ratio
                    backgroundColor: '#fff'
                  }}>
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        sx={{ position: 'absolute', top: 0, left: 0 }}
                      />
                    ) : (
                      <>
                        <CardMedia
                          component="img"
                          image={product.imageUrl}
                          alt={product.name}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            padding: '15px',
                            transition: 'transform 0.3s ease',
                            transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        {/* Quick Actions on Hover */}
                        {hoveredCard === index && (
                          <Box sx={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            display: 'flex',
                            gap: 1,
                            zIndex: 1
                          }}>
                            <IconButton sx={{
                              backgroundColor: 'white',
                              color: '#FF6B00',
                              '&:hover': {
                                backgroundColor: '#FF6B00',
                                color: 'white'
                              }
                            }}>
                              <FavoriteBorderIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={{
                              backgroundColor: 'white',
                              color: '#FF6B00',
                              '&:hover': {
                                backgroundColor: '#FF6B00',
                                color: 'white'
                              }
                            }}>
                              <ShoppingCartIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        )}
                      </>
                    )}
                  </Box>

                  {/* Content Section */}
                  <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: '16px !important'
                  }}>
                    {loading ? (
                      <>
                        <Skeleton variant="text" width="80%" height={24} />
                        <Skeleton variant="text" width="60%" height={20} />
                        <Skeleton variant="rectangular" width="100%" height={36} sx={{ mt: 2 }} />
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 'bold',
                            fontFamily: 'Roboto',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',  // This hides the overflow
                            textOverflow: 'ellipsis',  // This adds the ellipsis (...) when the text overflows
                            whiteSpace: 'nowrap'  // This prevents text wrapping, ensuring it stays in one line
                          }}


                        >
                          {product.name}
                        </Typography>


                        <Box sx={{ mt: 'auto' }}>
                          <Button
                            fullWidth
                            variant="contained"
                            onClick={() => handleViewDetails(product)}
                            sx={{
                              backgroundColor: '#FF6B00',
                              color: 'white',
                              fontWeight: 'bold',
                              py: 1,
                              '&:hover': {
                                backgroundColor: '#E05D00'
                              }
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Discount Banner Sidebar */}
        <Grid item xs={12} md={3}>
          {loading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={400}
              sx={{ borderRadius: '12px' }}
            />
          ) : (
            <Card sx={{
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              position: 'relative'
            }}>
              <CardMedia
                component="img"
                image={imgDiscount}
                alt="Special Discount"
                sx={{
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.03)'
                  }
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(255, 107, 0, 0.9)',
                color: 'white',
                padding: 2,
                textAlign: 'center'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Special Discounts
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Limited time offers on selected items
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: 'white',
                    color: '#FF6B00',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}


export default BusinessMachines;
