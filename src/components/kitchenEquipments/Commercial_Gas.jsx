import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Kitchen/3084_commercial_gas_range_single_burner_ss_304-305x305.webp';
import img2 from '../../asserts/Kitchen/3097_chinese_cooking_range-305x305.webp';
import img3 from '../../asserts/Kitchen/437_double_burner_range_stainless_steel-305x305.webp';
import img4 from '../../asserts/Kitchen/502_single_burner_square_18x18-500x500.webp';
import img5 from '../../asserts/Kitchen/572_table_top_single_burner_12-305x305.webp';
import img6 from '../../asserts/Kitchen/H0f98ff0fd4b14713bd869ac7a2079d1bU.jpg_720x720q50.avif';
import img7 from '../../asserts/Kitchen/Stock_Pot_Ranges.webp';
import img8 from '../../asserts/Kitchen/images.jpeg';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Gas Range Single Burner Stainless Steel",
    imageUrl: img1,
    tag: "Best Seller",
    specification: "Material: High-Quality Stainless Steel 304, Burner Type: High-Efficiency, Burner Power: 12,000 BTU, Dimensions: 18\" x 18\" x 12\", Gas Type: Compatible with Natural Gas and LPG",
    description: "A Gas Range Single Burner Stainless Steel is a compact and efficient cooking appliance designed for homes, restaurants, or outdoor kitchens. It typically features a single burner powered by natural gas or propane, and its stainless steel construction provides durability, a modern look, and ease of cleaning."
  },
  {
    name: "Chinese Cooking Range",
    imageUrl: img2,
    tag: "Popular",
    specification: "Material: Stainless Steel, Dimensions: 36\" x 24\" x 30\", Power Source: Natural Gas, Burner Count: 4, Features: High-efficiency burners, Easy-to-clean surface, Adjustable flame control, Weight: 120 lbs, Warranty: 1 year",
    description: "The Chinese Cooking Range is a high-quality kitchen appliance designed specifically for preparing authentic Chinese dishes. With four powerful burners, adjustable flame control, and a durable stainless steel construction, it ensures quick, efficient cooking. Ideal for both home kitchens and commercial settings, this range is known for its high heat output and easy-to-clean surface, making it a popular choice for chefs."
  },
  {
    name: "Gas Range Double Burner Stainless Steel",
    imageUrl: img3,
    tag: "Top Rated",
    specification: "Material: High-Quality Stainless Steel 304, Burner Type: Dual High-Efficiency, Burner Power: 24,000 BTU (12,000 BTU per burner), Dimensions: 24\" x 18\" x 12\", Gas Type: Compatible with Natural Gas and LPG",
    description: "The Gas Range Double Burner Stainless Steel is an efficient and durable cooking appliance ideal for both home and commercial kitchens. Featuring two high-efficiency burners with a total power of 24,000 BTU, it provides fast, even heating for cooking multiple dishes simultaneously. Its stainless steel construction ensures longevity, ease of cleaning, and a modern aesthetic."
  }
  ,
  {
    name: "Commercial Gas Range Square 18x18",
    imageUrl: img4,
    tag: "Professional",
    specification: "Material: Heavy-Duty Stainless Steel, Burner Type: High-Efficiency, Burner Power: 20,000 BTU, Dimensions: 18\" x 18\" x 12\", Gas Type: Compatible with Natural Gas and LPG",
    description: "The Commercial Gas Range Square 18x18 is designed for high-performance cooking in commercial kitchens. With a powerful 20,000 BTU burner, it delivers consistent heat for fast cooking. The heavy-duty stainless steel construction ensures durability and ease of cleaning, making it the ideal choice for chefs who require reliability and efficiency in a compact design."
  },
  {
    name: "Gas Range Tabletop Single",
    imageUrl: img5,
    tag: "Compact",
    specification: "Material: Stainless Steel, Burner Type: High-Efficiency, Burner Power: 10,000 BTU, Dimensions: 15\" x 15\" x 10\", Gas Type: Compatible with Natural Gas and LPG",
    description: "The Gas Range Tabletop Single is a compact and portable cooking solution, perfect for small kitchens, outdoor cooking, or catering. Featuring a high-efficiency 10,000 BTU burner, it ensures quick and consistent cooking. Its durable stainless steel design offers easy maintenance and a sleek, modern appearance, making it an excellent choice for tight spaces."
  },
  {
    name: "Infrared Cooktop",
    imageUrl: img6,
    tag: "Modern",
    specification: "Material: Ceramic Glass, Burner Type: Infrared, Power: 1800 Watts, Dimensions: 12\" x 15\" x 3\", Voltage: 120V, Features: Easy-to-clean surface, Adjustable temperature control, Overheat protection",
    description: "The Infrared Cooktop offers efficient, fast heating with its advanced infrared technology. Designed with a sleek ceramic glass surface, it heats up quickly and provides consistent heat across the cooking surface. Ideal for home kitchens, it features adjustable temperature control, an easy-to-clean surface, and overheat protection, ensuring a safe and modern cooking experience."
  },
  {
    name: "Electric Range",
    imageUrl: img7,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Burner Type: Electric Coil, Power: 2500 Watts, Dimensions: 30\" x 28\" x 36\", Voltage: 240V, Features: Multiple heat settings, Easy-to-clean surface, Oven with adjustable temperature control, Timer function",
    description: "The Electric Range combines modern efficiency with a sleek design. Featuring electric coil burners with 2500 watts of power, it provides consistent heat for all your cooking needs. The oven offers adjustable temperature control and a timer function, while the easy-to-clean surface ensures a hassle-free maintenance experience. Perfect for home kitchens and professional cooking environments."
  }
  ,
  {
    name: "Gas Range Two Burner",
    imageUrl: img8,
    tag: "Dual Burner",
    specification: "Material: Stainless Steel, Burner Type: Dual High-Efficiency, Burner Power: 12,000 BTU (6,000 BTU per burner), Dimensions: 24\" x 18\" x 12\", Gas Type: Compatible with Natural Gas and LPG",
    description: "The Gas Range Two Burner is a versatile cooking appliance designed for both home and commercial kitchens. With two high-efficiency burners, it offers 12,000 BTU of cooking power, perfect for preparing multiple dishes at once. The stainless steel construction ensures durability, easy maintenance, and a modern aesthetic, making it an ideal choice for any kitchen."
  },
];

function Commercial_Gas() {
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
        Commercial Gas Ranges
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

export default Commercial_Gas;