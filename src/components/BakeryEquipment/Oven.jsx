import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Bakery/Oven/convection.webp'
import img2 from '../../asserts/Bakery/Oven/industrial.webp'
import img3 from '../../asserts/Bakery/Oven/microwave.avif'
import img4 from '../../asserts/Bakery/Oven/otg.webp'
import img5 from '../../asserts/Bakery/Oven/pizza.jpg'
import img6 from '../../asserts/Bakery/Oven/rotary.webp'
import img7 from '../../asserts/Bakery/Oven/steam.jpg'


import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Convection Oven",
    imageUrl: img1,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 2200 Watts, Dimensions: 24\" x 18\" x 20\", Voltage: 220V, Capacity: 30L",
    description: "The Convection Oven features a high-performance fan for even heat distribution, ensuring consistent cooking. With a 30L capacity and 2200 watts of power, it’s perfect for baking, roasting, and cooking in both commercial and home kitchens."
  },
  {
    name: "Industrial Oven",
    imageUrl: img2,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 5000 Watts, Dimensions: 40\" x 30\" x 60\", Voltage: 220V, Capacity: 150L",
    description: "The Industrial Oven is designed for high-volume cooking in large commercial kitchens. With a massive 150L capacity and 5000 watts of power, it can handle large batches of food, making it ideal for bakeries, restaurants, and industrial kitchens."
  },
  {
    name: "Microwave Oven",
    imageUrl: img3,
    tag: "Compact",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 20\" x 16\" x 12\", Voltage: 220V, Capacity: 25L",
    description: "The Microwave Oven is designed for fast heating and cooking with a 25L capacity and 1000 watts of power. It’s compact and ideal for smaller spaces like homes or offices, offering quick, convenient meals with minimal effort."
  },
  {
    name: "OTG",
    imageUrl: img4,
    tag: "Compact",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 18\" x 16\" x 12\", Voltage: 220V, Capacity: 20L",
    description: "The OTG (Oven, Toaster, Griller) combines three appliances in one. With a 20L capacity and 1500 watts of power, it’s perfect for baking, toasting, and grilling in small to medium-sized kitchens, providing versatile cooking options."
  },
  {
    name: "Pizza Oven",
    imageUrl: img5,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 3000 Watts, Dimensions: 32\" x 28\" x 20\", Voltage: 220V, Capacity: 2 pizzas (12\")",
    description: "The Pizza Oven is specifically designed for baking perfect pizzas in a commercial setting. With a 3000-watt power capacity and the ability to cook two 12-inch pizzas simultaneously, it’s perfect for pizzerias, restaurants, and fast food outlets."
  },
  {
    name: "Rotary Oven",
    imageUrl: img6,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 4000 Watts, Dimensions: 36\" x 30\" x 55\", Voltage: 220V, Capacity: 80L",
    description: "The Rotary Oven is designed for high-volume, even cooking, ideal for bakeries and commercial kitchens. With its rotating tray and 4000 watts of power, it ensures uniform heat distribution, making it perfect for baking bread, cakes, and other goods."
  },
  {
    name: "Steam Oven",
    imageUrl: img7,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 2200 Watts, Dimensions: 24\" x 20\" x 18\", Voltage: 220V, Capacity: 40L",
    description: "The Steam Oven uses steam to cook food, preserving its nutrients and natural flavors. With a 40L capacity and 2200 watts of power, it’s perfect for cooking vegetables, fish, and poultry while retaining moisture and enhancing flavors."
  }
];

function Oven() {
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
        Bakery Equipment - Oven
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

export default Oven;
