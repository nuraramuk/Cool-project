import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Food/6378bde51d506205f979fe14-vbenlem-commercial-electric-food-warmer.jpg';
import img2 from '../../asserts/Food/5Rack_Idli.jpg';
import img3 from '../../asserts/Food/commercial-food-warmer-1641379471-6144719.jpeg';
import img4 from '../../asserts/Food/download.jpeg';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import img5 from '../../asserts/Food/Idli6tray.jpeg';
import img6 from '../../asserts/Food/Idli2.jpeg';

// Sample product data for FoodPreparation
const products = [
  {
    name: "Commercial Electrical Food Warmer",
    imageUrl: img1,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 24\" x 18\" x 12\", Voltage: 220V, Capacity: 50 liters",
    description: "The Commercial Electrical Food Warmer is designed for professional kitchens and catering services. With 1000 watts of power, it keeps large quantities of food warm for extended periods. Made of durable stainless steel, it offers a high-capacity design, ideal for restaurants, hotels, and catering businesses."
  },
  {
    name: "Idle Steamer 5 Tray",
    imageUrl: img2,
    tag: "Compact",
    specification: "Material: Stainless Steel, Tray Count: 5, Dimensions: 12\" x 12\" x 15\", Power: 800 Watts, Capacity: 15 liters",
    description: "The Idle Steamer 5 Tray offers a compact solution for steaming food. With five trays and 800 watts of power, it can handle a variety of ingredients. The stainless steel body ensures durability and long-lasting performance, making it perfect for small to medium-sized kitchens."
  },
  {
    name: "Food Warmer",
    imageUrl: img3,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 600 Watts, Dimensions: 16\" x 12\" x 10\", Voltage: 110V, Capacity: 25 liters",
    description: "This Food Warmer is an efficient appliance designed to keep your food at the perfect temperature for serving. With a power rating of 600 watts, it ensures consistent warming without overcooking. Its stainless steel construction adds durability and ease of cleaning, perfect for both home and commercial use."
  },
  {
    name: "Commercial Aluminium Idli Steamer, comes with 12 Trays",
    imageUrl: img4,
    tag: "Top Rated",
    specification: "Material: Aluminium, Tray Count: 12, Dimensions: 20\" x 16\" x 18\", Capacity: 50 idlis, Power: Manual",
    description: "The Commercial Aluminium Idli Steamer is perfect for preparing large batches of idlis quickly and efficiently. It comes with 12 trays, allowing you to steam up to 50 idlis at once. Made from durable aluminium, it ensures even heat distribution for soft and fluffy idlis, making it ideal for restaurants, hotels, and catering services."
  },
  {
    name: 'Idly Steamer 6 Tray Gas',
    imageUrl: img5,
    tag: 'Gas-Powered Steamer',
    specification: 'Power Source: Gas (LPG), Material: Stainless Steel & Aluminum Tray, Number of Trays: 6, Tray Capacity: 12 Pcs, Tray Dimensions: 14 x 18 x 1.25 Inches, Machine Dimensions (L x D x H): 24″ x 25″ x 35″ Inches, Machine Weight: 35 kg',
    description: 'The Idly Steamer 6 Tray Gas is a high-capacity, gas-powered kitchen appliance designed for efficient steaming of large batches of food. Ideal for restaurants, catering services, and food businesses, it can accommodate up to 6 trays, allowing you to prepare idlis, dhoklas, momos, and other steamed delicacies. The trays have a capacity of 12 pieces each, and the gas operation ensures consistent and even steaming. Constructed with a stainless steel body and aluminum trays, this steamer is built for durability and easy maintenance. Its compact size and excellent energy efficiency make it the perfect choice for commercial kitchens looking for reliable and fast steaming solutions.'
  },
  {
    name: 'Idly Steamer 8 Tray Gas',
    imageUrl: img6,
    tag: 'Gas-Powered Steamer',
    specification: 'Power Source: Gas (LPG), Material: Stainless Steel & Aluminum Tray, Number of Trays: 8, Tray Capacity: 12 Pcs, Tray Dimensions: 14 x 18 x 1.25 Inches, Machine Dimensions (L x D x H): 24″ x 25″ x 39″ Inches, Machine Weight: 40 kg',
    description: 'The Idly Steamer 8 Tray Gas is a high-capacity, gas-powered kitchen appliance designed for efficient steaming of large batches of food. Perfect for restaurants, catering services, and food businesses, it accommodates up to 8 trays, allowing you to prepare 12 pieces of idlis, dhoklas, momos, and other steamed delicacies per tray. The gas-powered operation ensures consistent and even steaming, making it an energy-efficient option for high-demand cooking environments. Built with a durable stainless steel body and aluminum trays, it is easy to operate and maintain. With its robust design and excellent performance, this steamer is a reliable choice for commercial kitchens seeking efficient steaming solutions.'
  },
  {
    name: 'Idly Steamer 12 Tray Gas',
    imageUrl: img5,
    tag: 'Gas-Powered Steamer',
    specification: 'Power Source: Gas (LPG), Material: Stainless Steel & Aluminum Tray, Number of Trays: 12, Tray Capacity: 12 Pcs, Tray Dimensions: 14 x 18 x 1.25 Inches, Machine Dimensions (L x D x H): 23.5″ x 24.5″ x 48″ Inches, Machine Weight: 51 kg',
    description: 'The Idly Steamer 12 Tray Gas is a high-capacity, gas-powered kitchen appliance designed for efficient steaming of large batches of food. Ideal for restaurants, catering services, and food businesses, it accommodates up to 12 trays, allowing you to prepare 12 pieces of idlis, dhoklas, momos, and other steamed delicacies per tray. The gas-powered operation ensures consistent and even steaming, making it an energy-efficient choice for high-demand cooking environments. The stainless steel body and aluminum trays provide durability, and the machine’s easy operation and maintenance make it an excellent option for commercial kitchens. With its robust performance, this steamer is a reliable choice for large-scale food preparation.'
  }
  
  
  
]


function IdlySteamer() {
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
        Idly Steamer Products
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

export default IdlySteamer;
