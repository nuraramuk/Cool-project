import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, IconButton, Button, Box, Chip } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';


import img1 from '../../asserts/Kitchen/Grinder/Grinder3.jpg'
import img2 from '../../asserts/Kitchen/Grinder/Grinder4.jpg'
import img3 from '../../asserts/Kitchen/Grinder/GravyMachine.webp'
import img4 from '../../asserts/Kitchen/Grinder/Gravy1.png'
import img5 from '../../asserts/Kitchen/Grinder/GravyMachine.webp'
import img6 from '../../asserts/Kitchen/Grinder/images.jpeg'
import img7 from '../../asserts/Kitchen/Grinder/grind1.webp'


const products = [
  {
    name: "Instant Wet Grinder",
    imageUrl: img1,
    tag: "Popular",
    specification: "Material: Stainless Steel, Capacity: 1.5 liters, Dimensions: 18\" x 15\" x 15\", Power: 1000 Watts",
    description: "The Instant Wet Grinder is a high-speed grinding solution ideal for quickly preparing batter for dosas, idlis, and other Indian dishes. With a 1.5-liter capacity and 1000 Watts of power, it ensures fast and efficient grinding while maintaining the traditional texture of the batter. Its compact design makes it suitable for home kitchens and small commercial setups."
  },
  {
    name: "Table Tap Wet Grinder",
    imageUrl: img2,
    tag: "Professional",
    specification: "Material: Stainless Steel, Capacity: 3 liters, Dimensions: 20\" x 18\" x 15\", Power: 750 Watts",
    description: "The Table Tap Wet Grinder offers a convenient and efficient solution for wet grinding. With a 3-liter capacity, it is perfect for grinding large batches of ingredients. Its stainless steel body ensures durability, while the powerful motor guarantees smooth and fast grinding. Ideal for both residential and small commercial kitchens."
  },
  {
    name: 'Commercial Gravy Machine 5" 1 HP SS',
    imageUrl: img3,
    tag: 'Top Seller',
    specification: 'Product Type: Gravy Machine, Motor: 1 HP, Phase: Single, Speed: 2880 rpm, Material: Stainless Steel Body, Chamber: 5×3, Cutter: Stainless Steel Cutter, Consumption (Unit/hour): 1, Blade Stander: 4 Blade Stainless Steel Bitter, Jalli: 5, Production: Overload Production Electronic Control, Dimensions (L x W x H): 19 x 14 x 21 inches, Capacity: 10-25 kg/hr, Weight: 40 kg, Warranty: 1 Year for Motor, Availability: 1 in stock',
    description: 'The Commercial Gravy Machine 5" 1 HP SS is a powerful and efficient appliance designed for large-scale food preparation in commercial kitchens. Whether you’re making gravies, sauces, pastes, or chutneys, this machine can process both dry and wet ingredients with ease. Powered by a 1 HP motor and running at 2880 rpm, it ensures smooth and quick results. Built with a stainless steel body and cutter, it is durable and easy to clean. The 5×3 chamber size and 4-blade stainless steel bitter are designed to handle large quantities (10-25 kg/hr) of ingredients, while the overload production electronic control ensures safe and consistent operation. This is the ideal choice for high-demand food processing in restaurants, catering services, and food factories.'
  },
  {
    name: 'Commercial Gravy Machine 5" 1 HP SS',
    imageUrl: img4,
    tag: 'Efficiency Kitchen Equipment',
    specification: 'Product Type: Gravy Machine, Motor: 1 HP, Phase: Single, Speed: 2880 rpm, Material: Stainless Steel Body, Chamber: 5×3, Cutter: Stainless Steel Cutter, Consumption (Unit/hour): 1, Blade Stander: 4 Blade Stainless Steel Bitter, Jalli: 5, Production: Overload Production Electronic Control, Dimensions (L x W x H): 19 x 14 x 21 inches, Capacity: 10-25 kg/hr, Weight: 40 kg, Warranty: 1 Year for Motor, Availability: 1 in stock',
    description: 'The Commercial Gravy Machine 5" 1 HP SS is a powerful and efficient appliance designed for large-scale food preparation in commercial kitchens. Whether you’re making gravies, sauces, pastes, or chutneys, this machine can process both dry and wet ingredients with ease. Powered by a 1 HP motor and running at 2880 rpm, it ensures smooth and quick results. Built with a stainless steel body and cutter, it is durable and easy to clean. The 5×3 chamber size and 4-blade stainless steel bitter are designed to handle large quantities (10-25 kg/hr) of ingredients, while the overload production electronic control ensures safe and consistent operation. This is the ideal choice for high-demand food processing in restaurants, catering services, and food factories.'
  },  
  {
    name: 'Dry and Wet Masala Gravy Grinder',
    imageUrl: img5,
    tag: 'Versatile Grinder',
    specification: 'Capacity: 35 – 40 Kg, Material: Stainless Steel (SS), Chamber Size: 8 x 4, Motor: 2 HP, Phase: Single, Dimensions: 21 x 17 x 31 inches, Warranty: 1 Year',
    description: 'The Chefglobe 2 in 1 Dry and Wet Masala Gravy Grinder is a powerful and versatile kitchen appliance designed to handle both dry spice grinding and wet gravy preparation. Ideal for grinding fresh masalas, chutneys, and pastes, as well as making smooth gravies and sauces, it ensures efficient and consistent results for both dry and wet ingredients. Powered by a 2 HP motor and built with durable stainless steel construction, this grinder is built to withstand the demands of commercial kitchens. With a capacity of 35 – 40 kg and an 8 x 4 chamber size, it’s perfect for high-volume food preparation. This is a must-have tool for restaurants, catering services, and food processing units.'
  },
  {
    name: 'Commercial Tilting Wet Grinder',
    imageUrl: img6,
    tag: 'Commercial Wet Grinder',
    specification: 'Capacity: 10 Ltr, Motor: 1.5 HP, Gear Box: Yes, Coconut Scraper: Attached, Phase: Single, Material: Stainless Steel, Tilting Mechanism: Yes, Dimensions: 22 x 22 x 38 inches, Weight: 45 kg, Warranty: 1 Year',
    description: 'The Lakshmi 10 Ltr Commercial Tilting Wet Grinder is an efficient and high-performance appliance designed for heavy-duty wet grinding in commercial kitchens. Powered by a 1.5 HP motor, it ensures fast and smooth grinding for ingredients like rice, dal, and coconut. The tilting mechanism allows for easy removal of ground materials, while the attached coconut scraper adds versatility, enabling you to grind and scrape coconut effortlessly. With a robust stainless steel construction and gear box, this wet grinder is built for long-lasting durability and smooth operation. Ideal for restaurants, hotels, and catering services, it is a reliable choice for high-volume food preparation.'
  },
  {
    name: 'Commercial Coffee Grinder 10 Kg Table Top With Adjustable Grinding',
    imageUrl: img7,
    tag: 'Adjustable Coffee Grinder',
    specification: 'Capacity: 5 – 10 Kg/Hr, Hopper Capacity: 3.5 Kg, Motor: 1 HP/220 V, Phase: Single Phase, RPM: 960 RPM, Unit: 1 Unit/Hr, Body Material: SS Body 202, Grinding Type: 6 Inch Stone, Weight: 26 kg (Packing 30 kg), Warranty: 1 Year',
    description: 'The Commercial Coffee Grinder 10 Kg Table Top with Adjustable Grinding is a versatile and high-performance appliance designed for commercial use in cafes, restaurants, and coffee shops. With a capacity of 5 – 10 Kg per hour and a 3.5 kg hopper capacity, this grinder is built to handle high-demand environments. The 1 HP motor and 960 RPM ensure quick and efficient grinding, while the 6-inch stone grinding mechanism provides consistency and precision. The adjustable grinding settings cater to various brewing methods, including espresso, drip coffee, French press, pour-over, and cold brew, giving baristas or coffee enthusiasts full control over their coffee grind. Built with durable SS Body 202 material, this coffee grinder is ideal for professionals seeking quality and performance.'
  }
  
  
  
  
];

function Grinder() {
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
        Commercial Ranges
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
export default Grinder;
