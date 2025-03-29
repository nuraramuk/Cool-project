import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/BusinessType/Cart/bicycle.jpg'
import img2 from '../../asserts/BusinessType/Cart/container.jpg'
import img3 from '../../asserts/BusinessType/Cart/food.webp'
import img4 from '../../asserts/BusinessType/Cart/kiosk.png'
import img5 from '../../asserts/BusinessType/Cart/push.jpg'
import img6 from '../../asserts/BusinessType/Cart/truck.jpg'


import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Bicycle Cart",
    imageUrl: img1,
    tag: "Compact",
    specification: "Material: Steel Frame, Dimensions: 60\" x 30\" x 40\", Weight Capacity: 200 kg, Wheels: 2, Suitable for: Street vendors, Small businesses",
    description: "The Bicycle Cart is a compact and portable solution for mobile vendors. Designed with a steel frame and capable of carrying up to 200 kg, it is ideal for street food vendors, small businesses, and outdoor events. Its easy-to-use design ensures mobility and convenience for on-the-go sales."
  },
  {
    name: "Container Cart",
    imageUrl: img2,
    tag: "Efficient",
    specification: "Material: Heavy Duty Steel, Dimensions: 80\" x 40\" x 50\", Weight Capacity: 500 kg, Suitable for: Cargo transport, Storage",
    description: "The Container Cart is designed for efficient transport of large loads. With a weight capacity of 500 kg and made from heavy-duty steel, it is perfect for cargo transport, storage solutions, and various commercial uses. Its sturdy construction ensures durability, even in demanding environments."
  },
  {
    name: "Food Cart",
    imageUrl: img3,
    tag: "Popular",
    specification: "Material: Stainless Steel, Dimensions: 72\" x 30\" x 40\", Weight Capacity: 300 kg, Wheels: 4, Suitable for: Street food vendors, Small restaurants",
    description: "The Food Cart is a popular choice for street food vendors, offering a durable stainless steel body and a large working surface. With a weight capacity of 300 kg, it is designed to carry all the necessary equipment and ingredients for mobile food service. The four-wheel design ensures easy mobility and stability."
  },
  {
    name: "Kiosk Cart",
    imageUrl: img4,
    tag: "Modern",
    specification: "Material: Aluminum and Steel, Dimensions: 60\" x 30\" x 45\", Weight Capacity: 350 kg, Wheels: 4, Suitable for: Pop-up shops, Retail stalls",
    description: "The Kiosk Cart is a modern solution for pop-up shops and retail stalls. With a sturdy aluminum and steel frame, it offers a weight capacity of 350 kg and is ideal for small retail businesses or food service. The sleek design ensures both style and functionality, making it perfect for outdoor markets and events."
  },
  {
    name: "Push Cart",
    imageUrl: img5,
    tag: "Compact",
    specification: "Material: Steel Frame, Dimensions: 50\" x 25\" x 35\", Weight Capacity: 150 kg, Wheels: 2, Suitable for: Small-scale vendors, Event sales",
    description: "The Push Cart is a compact and easy-to-maneuver solution for small-scale vendors and event sales. Made from a durable steel frame, it can carry up to 150 kg and features two large wheels for easy movement. Its versatile design makes it perfect for a variety of outdoor markets and festivals."
  },
  {
    name: "Food Truck",
    imageUrl: img6,
    tag: "Professional",
    specification: "Material: Stainless Steel, Dimensions: 200\" x 80\" x 90\", Weight Capacity: 1500 kg, Wheels: 6, Suitable for: Mobile food service, Catering, Large events",
    description: "The Food Truck is a professional-grade mobile kitchen designed for large-scale food service. With a capacity of 1500 kg, it features a fully equipped kitchen and a stainless steel construction that ensures durability and easy cleaning. Perfect for catering, large events, or as a mobile restaurant, this food truck offers convenience and efficiency."
  },
];

function Cart() {
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
        Cart Showcase
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


export default Cart;
