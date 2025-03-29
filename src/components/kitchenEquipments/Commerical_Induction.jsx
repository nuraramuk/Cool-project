import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton, Button, Box, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import img1 from '../../asserts/Kitchen/Inducation/1730980691039-watmrkA.webp'
import img2 from '../../asserts/Kitchen/Inducation/2394_Induction_Hot_plate_5000w-228x228.jpg'
// import img3 from '../../asserts/Kitchen/Inducation/drop-in_induction_wok_3500_w-268x299.webp'
// import img4 from '../../asserts/Kitchen/Inducation/froth-flavor-froth-flavor-commercial-induction-cooktop-852369-original-imafjpbgnvgbjyn2.webp'
// import img5 from '../../asserts/Kitchen/Inducation/induction_wok_sirman_ih-35-wok-268x299.webp'
import img6 from '../../asserts/Kitchen/Inducation/table_top_induction_hob_3500_w-268x299.webp'
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

import img10 from '../../asserts/Kitchen/Infrared Induction/download (2).jpeg';
import img12 from '../../asserts/Kitchen/Infrared Induction/images (1).jpeg';
// import img13 from '../../asserts/Kitchen/Infrared Induction/images (2).jpeg';
import img14 from '../../asserts/Kitchen/Infrared Induction/images (3).jpeg';
import img15 from '../../asserts/Kitchen/Infrared Induction/images.jpeg';
import { useNavigate } from 'react-router-dom';

const products = [

  {
    name: "Commercial Induction Induction",
    imageUrl: img6,
    tag: "Best Seller",
    specification: "Material: Stainless Steel 304, Burner Type: High Efficiency, Dimensions: 18\" x 18\" x 12\"",
    description: "The Commercial Induction Induction is designed for professional kitchens. Made of high-quality Stainless Steel 304, it features two high-power induction burners for fast and efficient cooking. The compact design and durable construction make it ideal for use in restaurants, hotels, and catering services. It is a reliable option for chefs who require consistent and quick heating."
  },
  {
    name: "Silver Cooktop",
    imageUrl: img2,
    tag: "Popular",
    specification: "Material: Stainless Steel, Burner Type: Induction, Dimensions: 18\" x 15\" x 4\", Power: 1800 Watts",
    description: "The Silver Cooktop offers a sleek and modern solution for efficient cooking with its induction technology. With a powerful 1800-watt burner and a durable stainless steel body, it heats quickly and evenly. This cooktop is perfect for both residential and commercial kitchens, providing energy-efficient cooking with easy cleanup."
  },
  {
    name: "Electric Wudnik Infrared Induction Cooktop",
    imageUrl: img10,
    tag: "Best Seller",
    specification: "Material: Ceramic Glass, Burner Type: Infrared Induction, Power: 2000 Watts, Dimensions: 12\" x 14\" x 3\"",
    description: "The Electric Wudnik Infrared Induction Cooktop provides high-efficiency cooking with infrared induction technology. It features a sleek ceramic glass surface that is easy to clean and provides quick, even heat distribution. Ideal for residential kitchens or small spaces, this cooktop is perfect for fast cooking with energy savings."
  },
  {
    name: "Commercial Induction Cooktop",
    imageUrl: img12,
    tag: "Popular",
    specification: "Material: Stainless Steel 304, Burner Type: Induction, Power: 3500 Watts, Dimensions: 18\" x 18\" x 12\"",
    description: "The Commercial Induction Cooktop offers high-powered, efficient cooking in a durable stainless steel frame. With 3500 watts of power, this cooktop is ideal for busy professional kitchens, providing quick heat and precise temperature control. It is designed to handle the high demands of commercial cooking environments."
  },
  {
    name: "Black Induction Cooktop",
    imageUrl: img14,
    tag: "Popular",
    specification: "Material: Ceramic Glass, Burner Type: Induction, Power: 1800 Watts, Dimensions: 12\" x 15\" x 4\"",
    description: "The Black Induction Cooktop is a stylish and efficient cooking solution. Featuring induction technology, it heats food quickly and evenly while using less energy. Its black ceramic glass surface adds a sleek touch to any kitchen, making it perfect for residential use or small commercial kitchens."
  },
  {
    name: "Double Induction Cooktop",
    imageUrl: img15,
    tag: "Professional",
    specification: "Material: Ceramic Glass, Burner Type: Dual Induction, Power: 1800 Watts per burner, Dimensions: 24\" x 18\" x 4\"",
    description: "The Double Induction Cooktop offers the versatility of two powerful induction burners in one unit. Each burner provides 1800 watts of cooking power, making it ideal for preparing multiple dishes simultaneously. The ceramic glass surface is easy to clean and provides an energy-efficient cooking experience."
  },
];

function Commerical_induction() {
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleViewDetails = (product) => {
    navigate('/Commerical_pro', { state: { product, category: 'Electic' } });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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
        Infrared CookTop
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

export default Commerical_induction;
