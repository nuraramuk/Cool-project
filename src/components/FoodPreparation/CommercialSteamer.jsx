import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Food/Coomercial Food/63458f986fcdb46754490c03-ubuy-online-shopping.jpg';
import img2 from '../../asserts/Food/Coomercial Food/922_food_steamer_multipurpose_4_trays_electric-200x200.webp';
import img3 from '../../asserts/Food/Coomercial Food/928_food_steamer_multipurpose_24_trays_gas_operated-200x200.webp';
import img4 from '../../asserts/Food/Coomercial Food/commercial-rice-steamer-machine-4.jpg';
import img5 from '../../asserts/Food/Coomercial Food/gas_food_steamer_with_6_trays-305x305.webp';
import img6 from '../../asserts/Food/Coomercial Food/images (1).jpeg';
import img7 from '../../asserts/Food/Coomercial Food/images (2).jpeg';
import img8 from '../../asserts/Food/Coomercial Food/images.jpeg';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

// Sample Products data for CommercialSteamer
const products = [
  {
    name: "Commercial Electric Food Warmer Display Case",
    imageUrl: img1,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 24\" x 18\" x 12\", Voltage: 220V, Capacity: 60 liters",
    description: "The Commercial Electric Food Warmer Display Case is designed to keep food warm and visually appealing for customers. With 1000 watts of power and a spacious 60-liter capacity, it ensures consistent temperature control, making it perfect for foodservice establishments such as buffets, restaurants, and catering services."
  },
  {
    name: "Commercial Multi Purpose Food Steamers",
    imageUrl: img2,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1200 Watts, Dimensions: 18\" x 18\" x 18\", Capacity: 35 liters, Voltage: 220V",
    description: "The Commercial Multi Purpose Food Steamer is a versatile appliance perfect for steaming a variety of foods, including vegetables, seafood, and dumplings. With a powerful 1200-watt motor and large capacity, it delivers consistent, even steaming results, making it an ideal addition to any professional kitchen."
  },
  {
    name: "Commercial Food Steamer 24 Trays",
    imageUrl: img4,
    tag: "Professional",
    specification: "Material: Stainless Steel, Tray Count: 24, Dimensions: 36\" x 24\" x 36\", Capacity: 100 Dishes, Power: 2000 Watts, Voltage: 220V",
    description: "The Commercial Food Steamer 24 Trays is designed for high-volume cooking. With 24 trays, it can steam up to 100 dishes at once, making it ideal for large-scale catering, restaurants, or hotels. The stainless steel construction ensures durability, while the powerful motor guarantees fast and even steaming."
  },
  {
    name: "Multi Purpose Food Steamer",
    imageUrl: img5,
    tag: "Compact",
    specification: "Material: Stainless Steel, Power: 800 Watts, Dimensions: 14\" x 12\" x 10\", Capacity: 25 liters, Voltage: 120V",
    description: "The Multi Purpose Food Steamer is a compact and efficient appliance designed for small kitchens or commercial setups. With 800 watts of power and a 25-liter capacity, it can steam a variety of foods quickly and evenly, making it a great choice for home kitchens, cafes, and small restaurants."
  },
  {
    name: "Food Steamer",
    imageUrl: img7,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 18\" x 16\" x 14\", Capacity: 30 liters, Voltage: 220V",
    description: "This Food Steamer offers high efficiency in steaming food. With 1000 watts of power and a 30-liter capacity, it ensures quick and even steaming, making it perfect for preparing vegetables, fish, and other delicacies. Its durable stainless steel construction ensures long-lasting performance in both residential and commercial kitchens."
  }
];


function CommercialSteamer() {
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
        Commercial Steamer Products
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


export default CommercialSteamer;
