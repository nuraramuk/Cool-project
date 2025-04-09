import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid,Card,CardContent,CardMedia,Typography,IconButton,Skeleton,Button,Box,Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../asserts/Commercial Machines/chapati.jpg'
import img2 from '../../asserts/Commercial Machines/chicken cutting.avif'
import img3 from '../../asserts/Commercial Machines/dosatawa.jpg'
import img4 from '../../asserts/Commercial Machines/doughsheeter.jpg'
import img5 from '../../asserts/Commercial Machines/filling.jpg'
import img6 from '../../asserts/Commercial Machines/flourmill.webp'
import img7 from '../../asserts/Commercial Machines/kheema.png'
import img8 from '../../asserts/Commercial Machines/tandoorranger.webp'
import img9 from '../../asserts/Commercial Machines/waffe.webp'
import img10 from '../../asserts/Commercial Machines/waffe1.webp'
import img11 from '../../asserts/Commercial Machines/milk1.webp'
import img12 from '../../asserts/Commercial Machines/slush.png'
import img13 from '../../asserts/Commercial Machines/ice.webp'
import img14 from '../../asserts/Commercial Machines/ice1.webp'
import img15 from '../../asserts/Commercial Machines/mango.png'
import img16 from '../../asserts/Commercial Machines/orange.webp'


import imgDiscount from '../../asserts/Kitchen/Electric/discount.webp';

const products = [
  {
    name: "Chapati Maker",
    imageUrl: img1,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 12\" x 10\" x 8\", Voltage: 220V, Capacity: Makes up to 20 chapatis at once",
    description: "The Chapati Maker is designed for quick and consistent chapati-making. With 1500 watts of power, it helps you make up to 20 chapatis at once, making it ideal for restaurants, catering services, and home kitchens."
  },
  {
    name: "Chicken Cutter",
    imageUrl: img2,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 200 Watts, Dimensions: 15\" x 10\" x 12\", Voltage: 220V, Capacity: Cuts up to 100 chickens per hour",
    description: "The Chicken Cutter is a professional-grade machine used for quickly cutting chicken into parts. With 200 watts of power, it can cut up to 100 chickens per hour, making it ideal for large-scale food preparation in restaurants, butcher shops, and meat processing units."
  },
  {
    name: "Dosa Tawa",
    imageUrl: img3,
    tag: "Compact",
    specification: "Material: Cast Iron, Power: 2000 Watts, Dimensions: 18\" x 18\" x 3\", Voltage: 220V, Capacity: 15\" cooking surface",
    description: "The Dosa Tawa is perfect for making crispy dosas, with a 15\" cooking surface and 2000 watts of power. It’s compact and designed for home kitchens, small eateries, and restaurants to serve delicious South Indian dishes."
  },
  {
    name: "Dough Sheeter",
    imageUrl: img4,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 500 Watts, Dimensions: 24\" x 20\" x 18\", Voltage: 220V, Capacity: Up to 40 kg of dough per hour",
    description: "The Dough Sheeter is designed to roll out dough consistently for various baked goods. With 500 watts of power, it can process up to 40 kg of dough per hour, making it perfect for bakeries and commercial kitchens."
  },
  {
    name: "Filling Machine",
    imageUrl: img5,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 100 Watts, Dimensions: 20\" x 18\" x 25\", Voltage: 220V, Capacity: 10L",
    description: "The Filling Machine is ideal for filling a variety of products like pastries, snacks, and sauces. It operates with 100 watts of power and can handle up to 10L of filling, making it highly efficient for small to medium-scale production."
  },
  {
    name: "Flour Mill Machine",
    imageUrl: img6,
    tag: "Efficient",
    specification: "Material: Stainless Steel, Power: 1500 Watts, Dimensions: 16\" x 12\" x 24\", Voltage: 220V, Capacity: 10 kg of flour per hour",
    description: "The Flour Mill Machine is designed for grinding grains into fine flour. With 1500 watts of power, it can process up to 10 kg of flour per hour, making it ideal for home use or small commercial operations."
  },
  {
    name: "Kheema Machine",
    imageUrl: img7,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 750 Watts, Dimensions: 18\" x 10\" x 14\", Voltage: 220V, Capacity: Grinds up to 50 kg of meat per hour",
    description: "The Kheema Machine is a heavy-duty appliance used for grinding meat into minced meat (kheema). With 750 watts of power, it can process up to 50 kg of meat per hour, making it ideal for butcher shops, restaurants, and catering services."
  },
  {
    name: "Tandoor Range",
    imageUrl: img8,
    tag: "Professional",
    specification: "Material: Stainless Steel, Power: 5000 Watts, Dimensions: 30\" x 24\" x 48\", Voltage: 220V, Capacity: Cooks up to 12 skewers at once",
    description: "The Tandoor Range is perfect for cooking traditional tandoori dishes such as kebabs, naan, and tandoori chicken. With 5000 watts of power and the ability to cook up to 12 skewers at once, it is ideal for commercial kitchens, restaurants, and catering services."
  },
  {
    name: "Bubble Waffle Maker Machine Single Head",
    imageUrl: img9,
    tag: "Specialty",
    specification: "Power: 1.5 kW, Voltage: 220V/50Hz, Temperature: 50-250°C, Dimensions: 480 x 310 x 325 mm, Warranty: 1.5 Years",
    description: "The Bubble Waffle Maker Machine Single Head features two hinged cooking plates with a honeycomb-like pattern of round indents. When the batter is poured onto the lower plate and the lid is closed, the batter spreads into the indentations, creating the characteristic 'bubbles.' The result is a waffle with a crisp exterior and a soft, airy interior, perfect for creating unique bubble waffles. With a temperature range of 50-250°C and a power rating of 1.5 kW, this waffle maker offers precise control and quick, delicious results. Ideal for cafes and food trucks, it comes with a 1.5-year warranty for added peace of mind."
  },
  {
    name: "Hot Dog Corn Stick Waffle Maker Machine",
    imageUrl: img10,
    tag: "Versatile & Efficient",
    specification: "Power: 1.5 kW, Voltage: 220V/50Hz, Temperature: 50-250°C, Dimensions: 480 x 310 x 325 mm, Warranty: 1.5 Years",
    description: "The Hot Dog Corn Stick Waffle Maker Machine is a versatile and efficient appliance that turns regular hot dogs into a fun and tasty snack. By encasing hot dogs in waffle or cornbread batter, it creates a crispy, handheld treat, perfect for various settings—from commercial food stalls to home kitchens. With easy operation, quick cooking times, and the ability to produce multiple sticks at once, it's an ideal addition for anyone looking to offer something unique and delicious. Its adjustable temperature range of 50-250°C and 1.5 kW power ensure fast and consistent results. Backed by a 1.5-year warranty, this machine is a reliable choice for creating innovative snacks."
  },
  {
    name: "Milk Shake Machine Double",
    imageUrl: img11,
    tag: "Versatile & Durable",
    specification: "Size: 340 x 270 x 510 mm, Voltage: 220-240V, Power: 0.6 kW, Net Weight: 6 kg, Warranty: 1 Year for Manufacturing Defects",
    description: "The Milk Shake Machine Double is an essential tool for businesses looking to offer creamy and flavorful milkshakes to their customers. With powerful mixing capabilities, it ensures smooth and consistent milkshakes every time. Its versatility, durability, and user-friendly operation streamline the milkshake-making process, allowing for endless customization to satisfy a wide range of tastes and preferences. The machine's compact design fits seamlessly into any commercial kitchen, and it comes with a 1-year warranty for manufacturing defects, making it a reliable choice for your business."
  },
  {
    name: "Electric Slush Dispenser 1 Tank 15 Liter",
    imageUrl: img12,
    tag: "Efficient & User-Friendly",
    specification: "Capacity: 15 Liter, Size: 350 x 620 x 840 mm, Weight: 40 kg, Body: Stainless Steel / ABS Plastic Jar, Voltage: 220V/50Hz, Power: 350 W, Compressor: Wanhob Hitachi",
    description: "The Electric Slush Dispenser 1 Tank 15 Liter is an essential piece of equipment for businesses looking to offer refreshing, visually appealing slush drinks to their customers. With an efficient cooling system and adjustable temperature control, it ensures consistent, high-quality slush every time. The durable construction, made of stainless steel and ABS plastic, ensures longevity, while its user-friendly operation makes it perfect for commercial establishments. This slush dispenser is a great way to enhance your beverage menu and attract customers with delicious and enticing slush drink offerings."
  },
  {
    name: "Portable Ice Cube Machine",
    imageUrl: img13,
    tag: "Compact & Efficient",
    specification: "Batch: 24 Cubes, Batch Timing: 10-15 Min, Capacity: 24 kg / 24 Hrs, Dimensions: 39D x 30W x 37H cm, Wattage: 110 Watts, Voltage: 220 Volts, Refrigerant: R600a, Material: ABS Plastic",
    description: "The Portable Ice Cube Machine is a compact, easy-to-use appliance designed to produce ice cubes quickly and efficiently, making it perfect for homes, offices, parties, or small-scale catering. With a batch capacity of 24 cubes and a fast cycle time of 10-15 minutes, it ensures fresh ice on demand. The machine can produce up to 24 kg of ice per day and features a lightweight design, making it easy to transport and store. The ABS plastic body ensures durability while the R600a refrigerant offers efficient cooling. With minimal setup required, this ice machine is ideal for any setting that needs a quick ice supply."
  },
  {
    name: "Softy Ice Cream Machine",
    imageUrl: img14,
    tag: "Premium & Efficient",
    specification: "No. of Flavors: 2+1, Electric: 4 units in 10 hrs, Output Capacity: 200 Cones per Hour, Body Material: SS Body, Hooper Capacity: 9 L (4.5L + 4.5L), Pump: Air Pump, Air Tube, Precooling: Double Compressor with Hopper Cooling, Voltage: 220 V, Frequency: 50 Hz, Works Capacity: 1L = 20 cones, Dimensions: 715 x 560 x 1380 mm, Weight: 180 kg, Compressor Brand: Wanhob Hitachi or Embraco",
    description: "The Softy Ice Cream Machine is a premium appliance designed for effortless soft serve ice cream production, making it perfect for cafes, restaurants, and dessert parlors. Featuring advanced cooling technology, this machine delivers consistent texture and flavor, ensuring high-quality soft serve every time. With a 2+1 flavor capacity, it can produce up to 200 cones per hour. The double compressor with hopper cooling ensures that the ice cream stays at the optimal temperature, and the SS body construction guarantees durability. With a large hopper capacity of 9L and a powerful pump, this machine is capable of high output, making it ideal for commercial use."
  },
  {
    name: "Mango Juice Pulping Machine Small",
    imageUrl: img15,
    tag: "Compact & Efficient",
    specification: "Capacity: 50-100 kg, Material: SS with Die Cast Roller, Motor: 1 HP, Phase: Single, Dimensions: 35 x 20 x 34 inches, Weight: 70 kg, Warranty: 1 Year",
    description: "The Mango Juice Pulping Machine Small is a compact and efficient appliance designed for extracting fresh mango pulp quickly and easily. Ideal for small-scale juice production or home use, this machine efficiently separates the pulp from the skin and seeds, ensuring maximum yield with minimal effort. With a 1 HP motor and durable SS construction, it guarantees high performance and longevity. Its user-friendly design makes it a perfect solution for making fresh mango juice, smoothies, or purees, offering convenience and consistency in every batch. Backed by a 1-year warranty, this machine is a reliable choice for mango processing."
  },  
  {
    name: "Automatic Orange and Pomegranate Juice Machine",
    imageUrl: img16,
    tag: "Efficient & Hygienic",
    specification: "Capacity: 7 Glass/Min, Fruits Holding Capacity: 20-30 Oranges, Automatic Grade: Sensor, Power: 110-220 V, Source: Electric, Watts: 220 W, Body: SS with Polycarbonate Food Grade, Size: 17 x 14 x 31 inches",
    description: "The Automatic Orange and Pomegranate Juice Machine is a specialized appliance designed to extract fresh, pulp-free juice efficiently and hygienically. Ideal for commercial establishments such as juice bars, restaurants, cafes, and food courts, this machine ensures quick service and high-quality output. With a capacity of 7 glasses per minute and an automatic sensor grade, it can hold 20-30 oranges at a time. The durable SS body with polycarbonate food-grade material ensures both reliability and hygiene, making it a perfect addition to any high-demand environment."
  }
  
  

];

function CommercialMachines() {
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
        Commercial Machines
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

export default CommercialMachines;
