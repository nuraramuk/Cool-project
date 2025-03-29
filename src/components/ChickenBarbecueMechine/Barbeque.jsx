import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import img1 from '../../asserts/Chicken Machine/BBQ/66271084a1b2c5477a165c66-vertical-electric-rotisserie-oven.jpg';
import img2 from '../../asserts/Chicken Machine/BBQ/Foldable-Briefcase-Type-Barbeque-Grill-Set-2_720x.webp';
import img3 from '../../asserts/Chicken Machine/BBQ/Title-Image_c68cea22-57cc-487c-91ed-7c21f1cef1c9.webp';
import img4 from '../../asserts/Chicken Machine/BBQ/bbq-griller-machine-250x250.webp';
import img5 from '../../asserts/Chicken Machine/BBQ/download.jpeg';
import img6 from '../../asserts/Chicken Machine/BBQ/images (2).jpeg';

// Sample product data for Barbeque
const products =[
  {
    name: "Electric Barbeque",
    imageUrl: img1,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 20\" x 18\" x 10\", Voltage: 220V, Capacity: 6 servings",
    description: "The Electric Barbeque is designed for quick and efficient grilling. With 1500 watts of power, it heats up quickly and allows for easy cooking of up to 6 servings. The stainless steel construction ensures durability, while the compact design makes it perfect for both indoor and outdoor use."
  },
  {
    name: "Stainless Steel Barbeque",
    imageUrl: img2,
    tag: "Top Rated",
    specification: "Material: Stainless Steel, Power: 2000 Watts, Dimensions: 24\" x 20\" x 15\", Voltage: 220V, Capacity: 8 servings",
    description: "The Stainless Steel Barbeque offers excellent durability and performance. With 2000 watts of power and a capacity of 8 servings, it ensures quick and even cooking for all your grilling needs. Ideal for both home use and outdoor grilling, its stainless steel body makes it easy to clean and maintain."
  },
  {
    name: "Stainless Steel Barbeque with Roller",
    imageUrl: img3,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 2500 Watts, Dimensions: 30\" x 24\" x 18\", Voltage: 220V, Capacity: 10 servings",
    description: "This Stainless Steel Barbeque with Roller is designed for professional use, offering excellent performance and ease of cooking. Equipped with a roller for rotating meat, it provides even cooking and deliciously tender results. Its durable stainless steel build ensures longevity, making it perfect for commercial kitchens or large gatherings."
  },
  {
    name: "Barbeque Closer Type",
    imageUrl: img4,
    tag: "Compact",
    specification: "Material: Steel, Power: 1800 Watts, Dimensions: 20\" x 15\" x 10\", Voltage: 220V, Capacity: 6 servings",
    description: "The Barbeque Closer Type is a compact and efficient grilling machine, perfect for smaller spaces. It features 1800 watts of power and is designed to cook up to 6 servings. Its space-saving design makes it ideal for home use or small outdoor events, while its steel body ensures durability and ease of cleaning."
  },
  {
    name: "Smokeless Barbecue Oven Small Electric",
    imageUrl: img5,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1200 Watts, Dimensions: 18\" x 14\" x 8\", Voltage: 110V, Capacity: 4 servings",
    description: "The Smokeless Barbecue Oven Small Electric is a unique cooking appliance designed for smokeless grilling. With 1200 watts of power, it provides efficient cooking for up to 4 servings. Perfect for indoor use, it ensures a smoke-free environment while delivering tasty grilled food."
  },
  {
    name: "Smokeless Barbecue Oven Big Gas",
    imageUrl: img6,
    tag: "Modern",
    specification: "Material: Stainless Steel, Power: 3000 Watts, Dimensions: 30\" x 25\" x 18\", Voltage: Gas, Capacity: 12 servings",
    description: "The Smokeless Barbecue Oven Big Gas offers the perfect grilling solution for larger gatherings. With 3000 watts of power and a 12-serving capacity, it ensures fast and efficient cooking without the smoke. Its stainless steel construction guarantees durability, making it ideal for both home and commercial use."
  }
]


function Barbeque() {
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
        Barbeque Products
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

export default Barbeque;
