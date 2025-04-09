import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Skeleton,
  Button,
  Box,
  Chip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import Elec1 from '../../asserts/Kitchen/Electric/download (1).jpeg';
import Elec2 from '../../asserts/Kitchen/Electric/download.jpeg';
import Elec3 from '../../asserts/Kitchen/Electric/images (1).jpeg';
import Elec4 from '../../asserts/Kitchen/Electric/images.jpeg';
import Elec5 from '../../asserts/Kitchen/Electric/Electric.jpg.webp';
import Elec6 from '../../asserts/Kitchen/Electric/Eletric1.jpeg'
import Elec7 from '../../asserts/Kitchen/Electric/Elect.jpg';
import Elec8 from '../../asserts/Kitchen/Electric/electic_pasta.webp';
import Elec9 from '../../asserts/Kitchen/Electric/Bain_Marie.jpg';
import Elec10 from '../../asserts/Kitchen/Electric/chocolate_melter.jpg';
import Elec11 from '../../asserts/Kitchen/Electric/Table-Top-Food-Warmer.jpg.webp';
import Elec12 from '../../asserts/Kitchen/Electric/bain_2_tank.jpg';
import Elec13 from '../../asserts/Kitchen/Electric/kadai.webp';





const products = [
  {
    name: "Electric Commercial Cooking Range 4 Hot Plate",
    imageUrl: Elec1,
    tag: "Best Seller",
    specification: "Material: Stainless Steel 304, Burner Type: High Efficiency, Dimensions: 18\" x 18\" x 12\", Burner Power: 12,000 BTU per burner",
    description: "The Electric Commercial Cooking Range 4 Hot Plate is a high-performance cooking appliance designed for commercial kitchens. Featuring four high-efficiency burners and made from durable Stainless Steel 304, it provides fast, even heating for all your cooking needs. With its compact design and powerful burners, it's perfect for busy kitchens and professional chefs. Ideal for restaurants, hotels, and catering services."
  },
  {
    name: "Electric Commercial Cooking Range 6 Burner Hot Plate",
    imageUrl: Elec2,
    tag: "Best Seller",
    specification: "Material: Stainless Steel 304, Burner Type: High Efficiency, Dimensions: 36\" x 24\" x 15\", Burner Power: 12,000 BTU per burner, Voltage: 240V",
    description: "The Electric Commercial Cooking Range 6 Burner Hot Plate offers a powerful solution for high-volume kitchens. With six high-efficiency burners, it provides ample space for cooking multiple dishes at once. Constructed from Stainless Steel 304 for durability, this range is built for heavy use, ensuring fast and consistent cooking. Perfect for large kitchens and commercial food services."
  },
  {
    name: "Commercial Electric Stove",
    imageUrl: Elec4,
    tag: "Best Seller",
    specification: "Material: Stainless Steel, Burner Type: Electric Coil, Dimensions: 30\" x 28\" x 36\", Burner Power: 2,500 Watts per burner, Voltage: 240V",
    description: "The Commercial Electric Stove is designed for high-demand cooking environments. Featuring electric coil burners with 2,500 watts of power each, it offers quick heating and precise temperature control. The sturdy stainless steel construction ensures durability and ease of maintenance. This stove is ideal for professional kitchens, hotels, and catering services looking for reliable and efficient cooking equipment."
  },
  {
    name: 'Commercial Electric Griddle Plate Plain Top 3Kw',
    imageUrl: Elec5,
    tag: 'Top Rated',
    specification: 'Material: Stainless Steel (SS Body), Plate: Cast Iron, Dimensions: 550mm x 430mm x 240mm, Power: 3KW, Voltage: 220V-240V/50-60HZ, Weight: 25 KG, Warranty: 1.5 Years for Manufacturing Defects',
    description: 'The Electric Griddle Plate Plain Top 3Kw is designed for versatile cooking, making it perfect for a wide range of foods, including pancakes, eggs, bacon, burgers, sandwiches, vegetables, and more. This griddle can be used for frying, grilling, sautéing, searing, and toasting, offering precise temperature control for each cooking task. The stainless steel body ensures durability, while the cast iron plate delivers excellent heat retention. Ideal for professional kitchens, hotels, and catering services, this griddle plate provides efficient and reliable cooking performance.'
  },
  {
    name: '6-Burner Electric Range',
    imageUrl: Elec6,
    tag: 'Heavy Duty',
    specification: 'Material: Stainless Steel, Burner Type: Electric Coil, Dimensions: 36" x 30" x 36", Burner Power: 2,500 Watts per burner, Voltage: 240V, Total Power: 15,000 Watts, Weight: 80 KG, Warranty: 2 Years for Manufacturing Defects',
    description: 'The 6-Burner Electric Range is a heavy-duty cooking appliance designed to meet the demands of busy commercial kitchens. With six powerful electric coil burners, each offering 2,500 watts of cooking power, this range provides quick and efficient heating. The stainless steel construction ensures durability and easy cleaning, while the large cooking surface offers plenty of space for multiple pots and pans. Ideal for restaurants, hotels, and catering services, the 6-Burner Electric Range is built to withstand heavy use and provide reliable performance day after day.'
  },
  {
    name: 'Electric Griddle Plate Plain Top With 6 Litre Deep Fryer',
    imageUrl: Elec7,
    tag: 'Versatile Kitchen Equipment',
    specification: 'Material: Stainless Steel (SS Body), Plate: Cast Iron, Dimensions: 730mm x 550mm x 370mm, Plate Size: 2 Ft, Fryer Size: 6 Liters, Power: 4.4 KW, Voltage: 220V-240V/50-60HZ, Weight: 28 KG, Warranty: 1 Year for Manufacturing Defects',
    description: 'The Electric Griddle Plate Plain Top with 6 Litre Deep Fryer offers ultimate versatility in the kitchen. Ideal for cooking a wide variety of foods, including pancakes, eggs, bacon, burgers, sandwiches, vegetables, and more, this unit can be used for frying, grilling, sautéing, searing, and toasting. Featuring a 2-foot cast iron plate for even heat distribution and a 6-liter fryer for efficient frying, this unit is designed for high-performance in commercial kitchens, catering services, and restaurants. The stainless steel body ensures durability, while the powerful 4.4 KW output delivers fast heating for busy kitchen environments.'
  },
  {
    name: 'Electric Pasta Noodle Boiler Machine with 4 In 1 Compartments and Taps',
    imageUrl: Elec8,
    tag: 'Efficient Kitchen Solution',
    specification: 'Capacity: 4 Compartments, Temperature Range: 30 – 110°C, Voltage: 220V/50Hz, Power: 2+2KW, Dimensions: 46cm x 45cm x 24cm, Basket Size: 12cm H x 14cm Dia, Waterproof: Yes (IPX3), Material: Stainless Steel (SS), Weight: 16 KG, Warranty: 1 Year for Coil',
    description: 'The Electric Pasta Noodle Boiler Machine with 4 In 1 Compartments and Taps is designed for efficiency and versatility in busy commercial kitchens. Its four independent compartments allow for the simultaneous preparation of various types of pasta or multiple batches, making it perfect for high-demand environments. The adjustable temperature range (30 – 110°C) ensures precise cooking, while the waterproof design (IPX3) adds to its durability and safety. Built with stainless steel for easy maintenance and long-lasting performance, this pasta boiler is ideal for restaurants, catering services, and fast-paced kitchens.'
  },
  {
    name: 'Akasa Bain Marie 9 LTR x 2 Pans',
    imageUrl: Elec9,
    tag: 'Keep Food Warm Efficiently',
    specification: 'Capacity: 18 LTR (9×2), Temperature Range: 50 – 250°C, Power: 600W, With Lid: Yes, Dimensions: 61cm x 36cm x 25cm, Weight: 10 KG, Warranty: 1 Year for Coil, Note: Use Only R.O or Purified Water for Better Life',
    description: 'The Akasa Bain Marie 9 LTR x 2 Pans is designed to keep prepared dishes warm over extended periods without overcooking. Featuring a water bath system, it gently heats food pans, ensuring your dishes maintain a consistent temperature without losing flavor or texture. Ideal for buffets, restaurants, and catering services, this Bain Marie is perfect for maintaining the quality of food for hours. With a temperature range of 50 – 250°C, this unit is versatile and reliable. The stainless steel body ensures durability, and it includes a lid for added convenience and safety.'
  },
  {
    name: 'Chocolate Melter 3 Kg Tribble Container',
    imageUrl: Elec10,
    tag: 'Precision Chocolate Melting',
    specification: 'Capacity: 3 Kg (1+1+1), Temperature Range: 50 – 100°C, Power: 1500W, With Lid: Yes, Weight: 5 KG, Warranty: 1.5 Years for Coil, Note: Use Only R.O or Purified Water for Better Life',
    description: 'The Chocolate Melter 3 Kg Tribble Container is a specialized appliance designed for melting chocolate with precision. It features three separate containers, each capable of holding 1 Kg of chocolate, providing flexibility for different types of chocolate or different batches. With a temperature range of 50 – 100°C, it ensures gentle and controlled heating, preventing chocolate from scorching or burning. This makes it ideal for applications such as dipping, coating, drizzling, and molding. Perfect for bakeries, pastry shops, restaurants, and home kitchens, this melter is built for efficiency and ease of use. The included lid helps maintain the chocolate’s consistency and temperature, while the unit’s stainless steel construction ensures long-lasting durability.'
  },
  {
    name: 'Electric Bain Marie Counter Table Top 4 Tank',
    imageUrl: Elec11,
    tag: 'Compact Food Warmer',
    specification: 'Capacity: 8.5Ltr x 4 Tanks, Pan Size: 1/2 – 150mm, Type: 4 Compartments, Power: 2000W, Phase: Single 220V, Warranty: 1.5 Years',
    description: 'The Electric Bain Marie Counter Table Top 4 Tank is a compact and efficient food warming appliance, perfect for keeping your dishes warm and ready to serve in smaller kitchens or portable setups. Designed with four 8.5Ltr tanks, this unit is ideal for restaurants, buffets, catering, and canteens. It maintains the optimal temperature for a variety of dishes, preventing overcooking or drying out. The tabletop design saves space, making it a great solution for businesses with limited counter space. With a power output of 2000W and a single-phase 220V power supply, it provides reliable and consistent heating for all your food service needs.'
  },
  {
    name: 'Electric Bain Marie Counter Table Top 2 Tank',
    imageUrl: Elec12,
    tag: 'Efficient Food Warmer',
    specification: 'Capacity: 8.5Ltr x 2 Tanks, Pan Size: 1/2 – 150mm, Type: 2 Compartments, Power: 2000W, Phase: Single 220V, Warranty: 1.5 Years',
    description: 'The Electric Bain Marie Counter Table Top 2 Tank is a compact and efficient solution for keeping your food warm and ready to serve. Designed with two 8.5Ltr tanks, this unit is perfect for restaurants, buffets, catering, and canteens, ensuring that your dishes are held at the optimal serving temperature without overcooking or drying out. Its tabletop design makes it ideal for smaller kitchens or portable operations where space is limited. The 2000W power output and single-phase 220V supply ensure reliable and consistent heating, while the 1.5-year warranty provides peace of mind.'
  },
  {
    name: 'Commercial Electric Kadai',
    imageUrl: Elec13,
    tag: 'Heavy Cooking Equipment',
    specification: 'Voltage: 220V, Thermostat: Yes, Temperature Range: 50 – 300°C, Phase: Single, Capacity: 6L, Kadai Size: 16 Inch, Coil Type: Single Coil, Body Material: Stainless Steel, Dimensions: 19cm x 19cm x 32cm, Oil Outlet: Yes, Weight: 29 KG (Approx), Warranty: 2 Years for Coil',
    description: 'The Commercial Electric Kadai is designed for high-volume cooking in commercial kitchens, catering businesses, and canteens. With a 6L capacity and 16-inch kadai size, it’s perfect for preparing a variety of dishes in bulk. The single coil heating system ensures even heating and precise temperature control (50 – 300°C), while the thermostat allows for consistent cooking. Made of durable stainless steel, this kadai is built to withstand the demands of busy kitchens. An oil outlet adds convenience for draining excess oil. With a 2-year warranty for the coil, this electric kadai offers reliability and efficiency for heavy-duty use.'
  }
  ];

function Commercial_Electric() {
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
          width: '60px',
          height: '4px',
          backgroundColor: '#FF6B00',
          margin: '10px auto 0'
        }
      }}>
        Commercial Electric Ranges
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
export default Commercial_Electric;
