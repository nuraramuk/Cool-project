import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Beverage/crusher.webp'
import img2 from '../../asserts/Beverage/dispenser.jpg'
import img3 from '../../asserts/Beverage/juicecounter.webp'
import img4 from '../../asserts/Beverage/smoothie.jpg'
import img5 from '../../asserts/Beverage/sugercane.webp'
import img6 from '../../asserts/Beverage/Beverage.jpg'
import img7 from '../../asserts/Beverage/juice1.jpg'

import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
    {
      name: "Ice Crusher",
      imageUrl: img1,
      tag: "Efficient",
      specification: "Material: Stainless Steel, Power: 200 Watts, Dimensions: 12\" x 12\" x 18\", Voltage: 220V, Capacity: 30L",
      description: "The Ice Crusher is designed to crush ice quickly and efficiently. With a 30L capacity and 200 watts of power, it’s perfect for bars, restaurants, and beverage stations, providing finely crushed ice for cocktails, smoothies, and other cold beverages."
    },
    {
      name: "Juice Dispenser",
      imageUrl: img2,
      tag: "Professional",
      specification: "Material: Stainless Steel, Power: 100 Watts, Dimensions: 15\" x 15\" x 25\", Voltage: 220V, Capacity: 10L",
      description: "The Juice Dispenser is a commercial-grade machine designed for high-traffic areas such as cafes, restaurants, and hotels. With a 10L capacity, it provides a convenient way to dispense juice quickly and efficiently, making it ideal for serving large groups of people."
    },
    {
      name: "Juice Counter",
      imageUrl: img3,
      tag: "Compact",
      specification: "Material: Stainless Steel, Power: 150 Watts, Dimensions: 18\" x 18\" x 20\", Voltage: 220V, Capacity: 5L",
      description: "The Juice Counter is perfect for small businesses or home use, offering a compact solution for dispensing fresh juice. With a 5L capacity and 150 watts of power, it is ideal for cafes and juice bars looking to serve fresh juice quickly and efficiently."
    },
    {
      name: "Smoothie Maker",
      imageUrl: img4,
      tag: "Efficient",
      specification: "Material: Stainless Steel, Power: 300 Watts, Dimensions: 10\" x 10\" x 15\", Voltage: 220V, Capacity: 1L",
      description: "The Smoothie Maker is designed for creating smooth and creamy smoothies with ease. Featuring 300 watts of power and a 1L capacity, it can blend fruits, vegetables, and ice into delicious beverages, making it perfect for home kitchens, cafes, and smoothie bars."
    },
    {
      name: "Sugar Cane Maker",
      imageUrl: img5,
      tag: "Professional",
      specification: "Material: Stainless Steel, Power: 500 Watts, Dimensions: 18\" x 12\" x 24\", Voltage: 220V, Capacity: 15L",
      description: "The Sugar Cane Maker is a commercial-grade appliance used to extract fresh sugarcane juice. With 500 watts of power and a 15L capacity, it’s perfect for juice bars, restaurants, or street vendors, offering a quick and efficient way to serve fresh sugarcane juice."
    },
    {
      name: "Commercial Beverage Refrigerator",
      imageUrl: img6,  // Replace with actual image URL
      tag: "Reliable & Efficient",
      specification: "Capacity: Varies (e.g., 500 liters), Power: 220V, Temperature Range: 0°C to 10°C, Body Material: Stainless Steel, Cooling Type: Forced Air, Dimensions: Customizable Sizes, Energy Efficiency: A++ (Varies by model), Door Type: Glass or Solid, Compressor: High-Efficiency Compressor, Warranty: 1-2 Years",
      description: "The Commercial Beverage Refrigerator is designed to store and display a wide range of beverages at the ideal temperature. Whether it’s cold sodas, chilled juices, or bottles of wine, this unit ensures that all beverages are served at the perfect temperature for optimal taste and freshness. With a sleek stainless steel design, a forced-air cooling system, and adjustable shelving, it provides efficient storage while keeping beverages easily accessible. The energy-efficient compressor ensures low running costs while maintaining consistent temperature control, making it perfect for bars, restaurants, cafes, and convenience stores. With its customizable size and glass or solid door options, this beverage refrigerator is a reliable addition to any commercial setting."
    },
    {
      name: "Commercial Beverage Dispenser",
      imageUrl: img7,  // Replace with actual image URL
      tag: "Efficient & Versatile",
      specification: "Material: Stainless Steel + PC, Colour: Silver, Brand: VEVOR, Capacity: 12 Litres per Tank, Item Weight: 29.9 kg, Cooling Temperature: 45°F-54°F, Power: 370W, Dimensions: Customizable, Suitable for: Cold Drinks, Juice, Iced Tea, Ideal for: Restaurants, Bars, and Parties",
      description: "The Commercial Beverage Dispenser by VEVOR is a high-quality, durable appliance designed to serve cold beverages with ease. Featuring three 12-litre tanks, this dispenser is perfect for storing and dispensing cold drinks like juice, iced tea, and other refreshing beverages at parties, restaurants, or bars. With a cooling range of 45°F-54°F, it maintains drinks at the perfect temperature to ensure optimal taste. The sleek silver stainless steel and PC construction make it both sturdy and stylish, while its 370W power ensures fast cooling. Easy to use and clean, this beverage dispenser is a must-have for any commercial establishment looking to efficiently serve cold drinks to large groups of people."
    },    

    
  ];  

function Beverage() {
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
        Beverage Machines
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

export default Beverage;


