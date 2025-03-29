import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton,Button,Box,Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import img1 from '../../asserts/Food/Machine/Atta.webp';
import img2 from '../../asserts/Food/Machine/coconut.webp';
import img3 from '../../asserts/Food/Machine/holwa.jpg';
import img4 from '../../asserts/Food/Machine/Idiyappam.avif';
import img5 from '../../asserts/Food/Machine/noodles.jpg';
import img6 from '../../asserts/Food/Machine/peeler.webp';
import img7 from '../../asserts/Food/Machine/sanwich.jpg';
import img8 from '../../asserts/Food/Machine/uruli.webp';
import img9 from '../../asserts/Food/Machine/vegcutter.jpg';
import img10 from '../../asserts/Food/Machine/waffle.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Sample product data for Shawarma
const products = [
  {
    name: "Atta Kneader",
    imageUrl: img1,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Capacity: 5 liters, Power: 500 Watts, Dimensions: 12\" x 12\" x 15\"",
    description: "The Atta Kneader is a high-performance appliance designed for easy and efficient kneading of dough. It can handle up to 5 liters of dough, making it perfect for both small and large batches. Its stainless steel construction ensures durability, while the powerful motor guarantees smooth and consistent kneading."
  },
  {
    name: "Coconut Scrapper",
    imageUrl: img2,
    tag: "Compact",
    specification: "Material: Stainless Steel, Power: Manual, Dimensions: 10\" x 8\" x 5\"",
    description: "The Coconut Scrapper is a compact and efficient tool designed for easily scraping coconut. Its stainless steel blades ensure a clean and quick scraping process, while its small size makes it perfect for tight kitchen spaces. A must-have for those who enjoy cooking with fresh coconut."
  },
  {
    name: "Holwa Maker",
    imageUrl: img3,
    tag: "Popular",
    specification: "Material: Stainless Steel, Capacity: 2 liters, Power: 300 Watts, Dimensions: 14\" x 10\" x 8\"",
    description: "The Holwa Maker is an innovative kitchen tool for making traditional Holwa quickly and efficiently. With a 2-liter capacity and a powerful 300-watt motor, it provides fast results. Ideal for home kitchens and small commercial setups, it ensures a smooth cooking experience."
  },
  {
    name: "Idiyappam Maker",
    imageUrl: img4,
    tag: "Top Rated",
    specification: "Material: Stainless Steel, Capacity: 1.5 liters, Power: 400 Watts, Dimensions: 12\" x 12\" x 10\"",
    description: "The Idiyappam Maker helps prepare soft and delicate rice noodles for your favorite South Indian dishes. Its stainless steel body ensures durability, while its powerful motor delivers consistent results. Ideal for small batches, it's perfect for home kitchens."
  },
  {
    name: "Noodles Maker",
    imageUrl: img5,
    tag: "Modern",
    specification: "Material: Stainless Steel, Capacity: 1.5 kg of dough, Power: 600 Watts, Dimensions: 14\" x 14\" x 10\"",
    description: "The Noodles Maker is a modern kitchen appliance that simplifies noodle-making. With a capacity of 1.5 kg of dough and 600 watts of power, it provides quick and efficient results. Its stainless steel construction ensures reliability and ease of cleaning, making it perfect for home kitchens or small restaurants."
  },
  {
    name: "Peeler",
    imageUrl: img6,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: Manual, Dimensions: 7\" x 2\" x 1\"",
    description: "The Peeler is a professional-grade tool designed for quick and effortless peeling of fruits and vegetables. Its stainless steel blades are sharp and durable, ensuring a smooth peeling experience every time. Compact and easy to handle, it's a must-have for any chef or home cook."
  },
  {
    name: "Sandwich Maker",
    imageUrl: img7,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 750 Watts, Dimensions: 10\" x 8\" x 5\"",
    description: "The Sandwich Maker is designed for quick and easy sandwich preparation. With a 750-watt power rating, it delivers efficient cooking results in no time. The non-stick surface ensures easy cleanup, while the stainless steel body adds durability and style."
  },
  {
    name: "Uruli Roaster",
    imageUrl: img8,
    tag: "Professional",
    specification: "Material: Cast Iron, Capacity: 3 liters, Dimensions: 14\" x 14\" x 7\"",
    description: "The Uruli Roaster is a traditional cooking vessel designed for slow roasting and frying. Made from durable cast iron, it retains heat well and ensures even cooking. Perfect for professional kitchens, this roaster is ideal for preparing dishes that require even heat distribution and slow cooking."
  },
  {
    name: "Vegetable Cutter",
    imageUrl: img9,
    tag: "Compact",
    specification: "Material: Stainless Steel, Power: Manual, Dimensions: 8\" x 6\" x 4\"",
    description: "The Vegetable Cutter is a compact and efficient tool for cutting vegetables quickly and uniformly. Its stainless steel blades ensure sharpness and durability, making it easy to prepare vegetables for any dish. Ideal for small kitchens, it saves time and effort during meal preparation."
  },
  {
    name: "Waffle Maker",
    imageUrl: img10,
    tag: "Modern",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 10\" x 8\" x 5\"",
    description: "The Waffle Maker is a modern kitchen appliance designed to make delicious waffles in minutes. With a 1000-watt power rating and a non-stick cooking surface, it ensures even cooking and easy cleanup. Its sleek stainless steel design adds a contemporary touch to any kitchen."
  }
]


function PreparationMachines() {
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
        Food Preparation Machines
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

export default PreparationMachines;
