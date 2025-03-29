import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Commercial Machines/chapati.jpg'
import img2 from '../../asserts/Commercial Machines/chicken cutting.avif'
import img3 from '../../asserts/Commercial Machines/dosatawa.jpg'
import img4 from '../../asserts/Commercial Machines/doughsheeter.jpg'
import img5 from '../../asserts/Commercial Machines/filling.jpg'
import img6 from '../../asserts/Commercial Machines/flourmill.webp'
import img7 from '../../asserts/Commercial Machines/kheema.png'
import img8 from '../../asserts/Commercial Machines/tandoorranger.webp'


import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Chapati Maker",
    imageUrl: img1,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 12\" x 10\" x 8\", Voltage: 220V, Capacity: Makes up to 20 chapatis at once",
    description: "The Chapati Maker is designed for quick and consistent chapati-making. With 1500 watts of power, it helps you make up to 20 chapatis at once, making it ideal for restaurants, catering services, and home kitchens."
  },
  {
    name: "Chicken Cutter",
    imageUrl: img2,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 200 Watts, Dimensions: 15\" x 10\" x 12\", Voltage: 220V, Capacity: Cuts up to 100 chickens per hour",
    description: "The Chicken Cutter is a professional-grade machine used for quickly cutting chicken into parts. With 200 watts of power, it can cut up to 100 chickens per hour, making it ideal for large-scale food preparation in restaurants, butcher shops, and meat processing units."
  },
  {
    name: "Dosa Tawa",
    imageUrl: img3,
    tag: "Compact",
    specification: "Material: Cast Iron, Power: 2000 Watts, Dimensions: 18\" x 18\" x 3\", Voltage: 220V, Capacity: 15\" cooking surface",
    description: "The Dosa Tawa is perfect for making crispy dosas, with a 15\" cooking surface and 2000 watts of power. It’s compact and designed for home kitchens, small eateries, and restaurants to serve delicious South Indian dishes."
  },
  {
    name: "Dough Sheeter",
    imageUrl: img4,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 500 Watts, Dimensions: 24\" x 20\" x 18\", Voltage: 220V, Capacity: Up to 40 kg of dough per hour",
    description: "The Dough Sheeter is designed to roll out dough consistently for various baked goods. With 500 watts of power, it can process up to 40 kg of dough per hour, making it perfect for bakeries and commercial kitchens."
  },
  {
    name: "Filling Machine",
    imageUrl: img5,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 100 Watts, Dimensions: 20\" x 18\" x 25\", Voltage: 220V, Capacity: 10L",
    description: "The Filling Machine is ideal for filling a variety of products like pastries, snacks, and sauces. It operates with 100 watts of power and can handle up to 10L of filling, making it highly efficient for small to medium-scale production."
  },
  {
    name: "Flour Mill Machine",
    imageUrl: img6,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 16\" x 12\" x 24\", Voltage: 220V, Capacity: 10 kg of flour per hour",
    description: "The Flour Mill Machine is designed for grinding grains into fine flour. With 1500 watts of power, it can process up to 10 kg of flour per hour, making it ideal for home use or small commercial operations."
  },
  {
    name: "Kheema Machine",
    imageUrl: img7,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 750 Watts, Dimensions: 18\" x 10\" x 14\", Voltage: 220V, Capacity: Grinds up to 50 kg of meat per hour",
    description: "The Kheema Machine is a heavy-duty appliance used for grinding meat into minced meat (kheema). With 750 watts of power, it can process up to 50 kg of meat per hour, making it ideal for butcher shops, restaurants, and catering services."
  },
  {
    name: "Tandoor Range",
    imageUrl: img8,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 5000 Watts, Dimensions: 30\" x 24\" x 48\", Voltage: 220V, Capacity: Cooks up to 12 skewers at once",
    description: "The Tandoor Range is perfect for cooking traditional tandoori dishes such as kebabs, naan, and tandoori chicken. With 5000 watts of power and the ability to cook up to 12 skewers at once, it is ideal for commercial kitchens, restaurants, and catering services."
  }
];

function CommercialMachines() {
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
        Commercial Machines
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

export default CommercialMachines;
