import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Skeleton,Button,Box,Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';
import img1 from '../../asserts/Food/Machine/Atta.webp';
import img2 from '../../asserts/Food/Machine/coconut.webp';
import img3 from '../../asserts/Food/Machine/holwa.jpg';
import img4 from '../../asserts/Food/Machine/Idiyappam.avif';
import img5 from '../../asserts/Food/Machine/noodle.avif';
import img6 from '../../asserts/Food/Machine/peeler.webp';
import img7 from '../../asserts/Food/Machine/sanwich.jpg';
import img8 from '../../asserts/Food/Machine/uruli.webp';
import img9 from '../../asserts/Food/Machine/vegcutter.jpg';
import img10 from '../../asserts/Food/Machine/waffle.png';
import img11 from '../../asserts/Food/Machine/Flour-Mixing-Machine.png.webp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Sample product data for Shawarma
const products = [
  {
    name: "Atta Kneader / Dough Kneader (10 Kg) SS Premium",
    imageUrl: img1,
    tag: "Commercial Grade",
    specification: "Material: Stainless Steel 304, Capacity: 10 kg, Power: 1 HP Copper Motor, Voltage: 220-240 V, Frequency: 50 Hz, Atta Making Speed: 5 mins, Dimensions: 34\" x 34\" x 19\", Weight: 70 kg, Warranty: 1 Year for Motor",
    description: "The Atta Kneader / Dough Kneader (10 Kg) SS Premium is a commercial-grade kitchen appliance designed for efficiently kneading dough for bread, pizza, pastries, and other baked goods. Featuring a robust 1 HP copper motor, this kneader can process up to 10 kg of dough in just 5 minutes. Its stainless steel 304 bowl ensures durability and hygiene, making it an ideal choice for bakeries and large-scale kitchens. With a weight of 70 kg, it offers stability during operation and comes with a 1-year motor warranty."
  },  
  {
    name: "Coconut Scrapper",
    imageUrl: img2,
    tag: "Compact & Efficient",
    specification: "Motor HP: 1/4, Voltage: 230 V AC 50 Hz, Wattage: 180 W, Speed: 1440 RPM, Amps: 0.6 A, Power: Manual, Dimensions: 10\" x 8\" x 5\"",
    description: "The Coconut Scrapper is a compact and efficient tool designed for easily scraping coconut. Featuring high-quality stainless steel blades, it ensures a clean and quick scraping process, perfect for fresh coconut preparation. The small size of the scrapper makes it ideal for tight kitchen spaces. The tool comes with a heavy-duty motor designed for long-lasting use, and while a burning smell may appear during first-time use (due to the motor varnish heating up), this is normal. Aesthetically designed to enhance the look of your kitchen, this coconut scrapper combines functionality with style."
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
    specification: "Material: Stainless Steel, Capacity: 2 kg, Power: 400 Watts, Voltage: 220 V/440 V, Production Capacity: 400 plates per hour, Dimensions: 12\" x 12\" x 10\"",
    description: "The Idiyappam Maker is designed for preparing soft and delicate rice noodles, perfect for your favorite South Indian dishes. Made with durable stainless steel, this automatic tabletop machine boasts a 2 kg capacity and a powerful motor that ensures consistent results. With a production capacity of 400 plates per hour, it's ideal for both home kitchens and small-scale food establishments."
  },  
  {
    name: "Noodles Maker",
    imageUrl: img5,
    tag: "Modern",
    specification: "Material: Stainless Steel, Capacity: 1.5 kg of dough, Power: 600 Watts, Dimensions: 14\" x 14\" x 10\", Assembled Product Weight: 13.26 kg, Manufacturer: YINZINR, Color: Red",
    description: "The Noodles Maker is a modern kitchen appliance designed to simplify noodle-making. With a capacity of 1.5 kg of dough and 600 watts of power, it ensures quick and efficient results. Its stainless steel construction is durable and easy to clean, making it an ideal choice for home kitchens or small restaurants. The machine's compact design and stylish red color add a touch of modernity to any kitchen."
  },  
  {
    name: "Peeler",
    imageUrl: img6,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: Manual, Capacity: 10-30 kg/hr, Brand: MS, Body Material: Stainless Steel, Motor Power: 1 HP, Dimensions: 7\" x 2\" x 1\"",
    description: "The Peeler is a professional-grade tool designed for quick and effortless peeling of fruits and vegetables. Its stainless steel blades are sharp and durable, ensuring a smooth peeling experience every time. With a capacity of 10-30 kg/hr and a 1 HP motor, this peeler offers high efficiency for both small and medium-scale peeling tasks. Compact, easy to handle, and built to last, it's a must-have for chefs or home cooks who demand professional quality."
  },  
  {
    name: "Sandwich Maker",
    imageUrl: img7,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Non-Stick Coated Aluminum, Bakelite, Power: 2000 Watts, Dimensions: 18D x 22W x 9H cm, Voltage: 230 Volts, Item Weight: 2.6 kg, Included Components: 1 No. Sandwich Grill, 1 No. Instruction Manual, Style: 4 Slice",
    description: "The Sandwich Maker is designed for quick and easy sandwich preparation. With a high 2000-watt power rating, it delivers fast and efficient cooking results. The non-stick coating ensures easy cleanup, while the durable stainless steel and Bakelite construction provide both strength and style. This 4-slice sandwich maker is perfect for families and anyone looking to make multiple sandwiches at once. Its sleek design and compact size make it a great addition to any kitchen."
  },  
  {
    name: "Uruli Roaster",
    imageUrl: img8,
    tag: "Professional",
    specification: "Material: MS or SS, Capacity: 10-60 kg per batch, Power: 1-3 HP, Fuel: LPG, Dimensions: Custom Sizes, Roasting and Drying: Food, Spices, and Ayurvedic Industry",
    description: "The Uruli Roaster is a traditional yet highly efficient tool designed for roasting powders, spices, pulses, grains, and more. In this equipment, the Uruli (rotating vessel) ensures direct heating of the raw material, while the stationary stirrers keep it evenly mixed. With a capacity of 10-60 kg per batch and a power rating of 1-3 HP, this roaster is fueled by LPG, making it ideal for professional kitchens in the food, spices, and ayurvedic industries. Available in MS or SS, the roaster offers excellent heat retention for consistent and uniform roasting and drying results."
  },  
  {
    name: "Vegetable Cutter",
    imageUrl: img9,
    tag: "Compact",
    specification: "Material: Stainless Steel, Power: Manual, Dimensions: 25L x 25W x 25H cm, Color: Red, Special Feature: Multipurpose, Operation Mode: Manual",
    description: "The Vegetable Cutter is a compact and efficient tool designed to quickly and uniformly cut vegetables. Its stainless steel blades ensure sharpness and durability, making vegetable preparation easy for any dish. The red color adds a vibrant touch to your kitchen, while the multipurpose feature allows it to handle a variety of vegetables. Perfect for small kitchens, it saves time and effort during meal preparation."
  },  
  {
    name: "Waffle Maker",
    imageUrl: img10,
    tag: "Modern",
    specification: "Material: Stainless Steel, Power: 1000 Watts, Dimensions: 10\" x 8\" x 5\", Color: Silver, Power Source: Corded Electric, Style: Classic",
    description: "The Waffle Maker is a modern kitchen appliance designed to make delicious waffles in minutes. With a 1000-watt power rating and a non-stick cooking surface, it ensures even cooking and easy cleanup. Its sleek stainless steel design adds a contemporary touch to any kitchen, while its corded electric operation provides convenience and reliability. Perfect for anyone craving freshly made waffles with minimal effort."
  },  
  {
    name: "Flour Kneader (Atta Kneader) 7 Kg",
    imageUrl: img11,
    tag: "Commercial Grade",
    specification: "Material: Stainless Steel, Capacity: 7 kg, Power: 0.75 HP, Phase: Single, Speed: 100 RPM, Voltage: 220-240 V, Frequency: 50 Hz, Body Sheet: SS Body, Atta Making Speed: 3-5 mins, Drum Size: 14\" x 11\" x 12\", Dimensions: 26\" x 14\" x 12\", Weight: 40 kg, Warranty: 1 Year for Motor",
    description: "The Flour Kneader (Atta Kneader) 7 Kg is a commercial-grade kitchen appliance built for efficient dough kneading. It can handle up to 7 kg of dough, making it suitable for Roti, Maida, bread, pizza, pastries, and other baked goods. The 0.75 HP motor offers efficient performance, and the 100 RPM speed ensures consistent and smooth kneading. Its stainless steel construction guarantees durability, and the kneader completes the process in just 3-5 minutes. With a 1-year motor warranty, this kneader is a reliable choice for small to medium-scale kitchens."
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
