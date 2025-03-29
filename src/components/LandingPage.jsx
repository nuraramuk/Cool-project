import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, Snackbar, Alert, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const imageList = [
  {
    id: 1,
  src: 'images/cotton-candy-machine.jpg',
  name: 'Cotton Candy Machine',
  tag: 'Best Seller',
  description: 'The Cotton Candy Machine is a fun and efficient solution for creating delicious cotton candy at events, fairs, and parties. Built with durable materials and designed for ease of use, this machine quickly spins sugar into fluffy, sweet cotton candy in just minutes. Its compact design allows for easy setup and storage, making it perfect for both personal and commercial use. Whether you’re looking to serve kids at a birthday party or attract crowds at a food festival, this cotton candy machine is a must-have for any occasion.',
  specification: {
    material: 'Stainless Steel, Aluminum',
    dimensions: '20" x 20" x 15"',
    weight: '10 kg',
    power: 'Electric, 110V',
    output: 'Produces up to 2 cotton candies per minute',
    suitable_for: 'Fairs, Parties, Festivals, Concessions, Catering',
    additional_features: 'Easy to clean, Fast operation, Lightweight and portable, Safe and user-friendly'
  },
    // relatedProducts: [
    //   { 
    //     id: 2, 
    //     src: 'images/2.webp', 
    //     name: 'Rotary Rack Oven 32 Trays Diesel / Gas',
    //     description: 'A high-capacity rotary rack oven designed for both diesel and gas operation, perfect for large-scale baking needs.',
    //     specification: {
    //       material: 'Stainless Steel',
    //       capacity: '32 trays',
    //       fuel: 'Diesel / Gas',
    //       power: '220V electric backup',
    //       weight: '250 kg',
    //       dimensions: '200cm x 80cm x 150cm',
    //       warranty: '3 years'
    //     }
    //   },
    //   { 
    //     id: 3, 
    //     src: 'images/3.webp', 
    //     name: 'Juice Dispenser 16Ltr',
    //     description: 'A 16-liter juice dispenser perfect for high-volume service, ensuring fresh juice delivery at the right temperature.',
    //     specification: {
    //       material: 'Food-grade plastic and stainless steel',
    //       capacity: '16 liters',
    //       power: 'Electric 220V',
    //       weight: '10 kg',
    //       dimensions: '30cm x 30cm x 60cm',
    //       warranty: '1 year'
    //     }
    //   }
    // ]
  },
  {
    id: 2,
    src: "images/food.webp",
    name: "Food Cart",
    tag: "Popular",
    description: "The Food Cart is an essential mobile solution for street food vendors and small restaurants. Made from high-quality stainless steel, it offers a robust and durable structure, ensuring reliability in all conditions. With ample space and a 300 kg weight capacity, it is designed to carry all the necessary cooking equipment, ingredients, and supplies. The four-wheel design guarantees effortless mobility, making it easy to transport and set up wherever needed. Whether you're operating in a bustling street market or at a local event, this food cart provides a practical and efficient solution for food service.",
    specification: {
      material: 'Stainless Steel',
      dimensions: '72" x 30" x 40"',
      weight_capacity: '300 kg',
      wheels: '4',
      suitable_for: 'Street food vendors, Small restaurants',
      additional_features: 'Durable and easy to clean, Mobile and stable, Ample workspace for food preparation, Ideal for outdoor use'
    },
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 4, src: 'images/4.webp', name: 'Juice Dispenser 16Ltr' },
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 4, src: 'images/4.webp', name: 'Juice Dispenser 16Ltr' },
    //   // Add other related products here
    // ]
  },
  {
    id: 3,
    src: 'images/kiosks.webp',
    name: 'Kisoki',
    tag: 'Popular',
    description: 'The Kisoki is a state-of-the-art kiosk designed for businesses that require efficient service in a compact form. Perfect for small restaurants, food stalls, or retail shops, the Kisoki combines durability and functionality. Built with high-quality materials, it offers a sleek and modern design that fits seamlessly into any environment. Whether used for food service, retail, or information purposes, the Kisoki is ideal for providing a streamlined, customer-friendly experience.',
    specification: {
      material: 'Stainless Steel, Glass',
      dimensions: '60" x 30" x 40"',
      weight_capacity: '250 kg',
      features: 'Durable structure, User-friendly interface, Energy-efficient, Customizable options',
      suitable_for: 'Food service, Retail, Information kiosks, Small businesses',
      additional_features: 'Easy to assemble, Low maintenance, Weather-resistant design',
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 4, src: 'images/4.webp', name: 'Juice Dispenser 16Ltr' },
    //   // Add other related products here
    // ]
    },
  },
  {
    id: 4,
    src: 'images/Push-Kart.jpeg',
    name: 'Push Cart',
    tag: 'Popular',
    description: 'The Push Cart is a versatile and mobile solution designed for street vendors and small businesses. Made with durable materials, it provides a convenient way to transport goods while maintaining stability and ease of use. Its lightweight yet robust design ensures easy handling and quick mobility, making it perfect for use in crowded environments like street markets, outdoor events, and retail spaces. This push cart is ideal for vendors offering food, drinks, or any other products that need to be moved around efficiently.',
    specification: {
      material: 'Steel frame, Wood/Plastic top',
      dimensions: '48" x 24" x 36"',
      weight_capacity: '150 kg',
      wheels: '4 heavy-duty wheels',
      suitable_for: 'Street vendors, Event organizers, Small businesses, Outdoor markets',
      additional_features: 'Lightweight and portable, Easy to assemble, Durable construction, Ideal for mobility in crowded spaces'
    },  
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
  {
      id: 5,
      src: 'images/EggMachine.jpg',
      name: 'Shoppers Hub PNQ Electric 10 Slot Egg Roll Sausage Machine',
      tag: 'Popular',
      description: 'The Shoppers Hub PNQ Electric 10 Slot Egg Roll Sausage Machine is a powerful and efficient cooking appliance designed for homes, hotels, restaurants, cafes, and other commercial spaces. With a sturdy build and heavy-duty performance, it allows for the simultaneous cooking of up to 10 egg rolls or sausages, making it an ideal choice for high-demand food service environments. Its compact design ensures it fits well in various kitchen setups while providing consistent and reliable performance.',
      specification: {
        material: 'Stainless Steel',
        dimensions: '42 x 20 x 24 cm',
        suitable_for: 'Homes, Hotels, Restaurants, Cafes, Commercial kitchens',
        additional_features: 'Heavy-duty build, Even heat distribution, Easy to clean, Compact design for space efficiency'
      },    
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
  {
    id: 6,
    src: 'images/1.webp',
    name: 'Automatic Electric Sausage Filling Machine 10 litre SS 304', 
    tag: 'Efficent',
    description: 'The Automatic Electric Sausage Filling Machine 10 litre SS 304 is designed for high-speed, precise sausage filling in industrial settings. Constructed with durable SS 304 stainless steel, it ensures optimal hygiene and long-lasting performance. This machine is perfect for large-scale sausage manufacturing, featuring a 10-liter capacity that streamlines your production line, enhances efficiency, and reduces downtime. With easy operation, it guarantees consistent filling results, making it ideal for both small and large businesses looking to boost productivity.',
    specification: {
      material: 'SS 304 Stainless Steel',
      capacity: '10 liters (Filling Capacity: 500 sausages per minute)',
      power: 'Electric 220V',
      weight: '150 kg',
      dimensions: '120cm x 60cm x 100cm',
      warranty: '2 years',
      additional_features: 'High-speed automatic operation, Hygienic and easy to clean, Low maintenance'
    },
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
  {
    id: 7,
    src: 'images/Sandwich.webp',
    name: 'Sandwich maker',
    tag: 'Best Seller',
    description: 'Electric Commercial Sandwich Griller Machine Double is an essential appliance for any commercial kitchen that serves sandwiches or similar grilled items. With its durable construction, efficient cooking, and user-friendly features, it helps streamline food preparation, delivering delicious, evenly toasted sandwiches quickly and consistently',
    specification: {
      material: 'Stainless Steel',
      dimensions: '15" x 12" x 7"',
      weight: '25kg',
      power: 'Electric, 220V',
      cooking_capacity: 'Can grill up to 4 sandwiches at once',
      plate_size: '12" x 12"',
      suitable_for: 'Restaurants, Cafes, Commercial kitchens, Food stalls',
      additional_features: 'Non-stick plates, Adjustable temperature control, Easy to clean, Fast and consistent cooking'
    },
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
  {
    id: 8,
    src: 'images/Machine.webp',
    name: 'Coffee Grinding Machine 10Kgs',
    tag: 'Top Seller',
    description: 'The Coffee Grinding Machine 10Kgs is a high-capacity grinder designed for commercial use, capable of grinding up to 10 kilograms of coffee beans at once. Ideal for coffee shops, cafes, and large-scale coffee production, it delivers consistent, high-quality grinds with every use. Built with a durable construction and powerful motor, it ensures quick and efficient grinding, making it perfect for businesses with high-volume needs.',
    specification: {
      capacity: '10 Kgs',
      material: 'Stainless Steel',
      dimensions: '15" x 15" x 30"',
      weight: '25 kg',
      power: 'Electric, 220V',
      suitable_for: 'Coffee shops, Cafes, Commercial kitchens',
      additional_features: 'Efficient grinding, Easy to use, Low maintenance, Durable and sturdy construction'
    },  
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
  {
      id: 9,
      src: 'images/sweetcorn.webp',
      name: 'Sweet Corn Machine',
      tag: 'Popular',
      description: 'The Sweet Corn Machine is an ideal solution for outdoor events, fairs, and food stalls. This machine is designed to cook sweet corn quickly and efficiently, ensuring a delicious, hot snack for customers. With a user-friendly design and durable construction, it offers easy operation and reliable performance. Whether you’re serving at a street food market or catering for a large event, the Sweet Corn Machine guarantees high-quality results every time.',
      specification: {
        material: 'Stainless Steel',
        dimensions: '18" x 18" x 12"',
        weight: '8 kg',
        power: 'Electric, 220V',
        capacity: 'Can cook up to 50 cobs per hour',
        suitable_for: 'Street food vendors, Food stalls, Outdoor events, Catering',
        additional_features: 'Easy to clean, Fast operation, Portable design, Safe and user-friendly'
      },    
        // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
    {
      id: 10,
      src: 'images/pizza_oven.webp',
      name: 'Pizza Oven',
      tag: 'Best Seller',
      description: 'The Pizza Oven is a high-performance commercial-grade appliance designed for cooking delicious pizzas quickly and evenly. With a 2-tray capacity, it is perfect for small to medium-sized pizzerias, restaurants, or catering services. This oven ensures perfect cooking results every time, with adjustable temperature controls, even heat distribution, and a durable design. Whether you’re baking fresh pizzas, bread, or other baked goods, this pizza oven is an essential tool for any busy kitchen.',
      specification: {
        material: 'Stainless Steel',
        dimensions: '24" x 20" x 18"',
        weight: '30 kg',
        power: 'Electric, 220V',
        tray_capacity: '2 trays',
        temperature_range: '100°C to 300°C',
        suitable_for: 'Pizzerias, Restaurants, Catering services, Bakeries',
        additional_features: 'Even heat distribution, Adjustable temperature control, Energy efficient, Easy to clean, Fast baking time'
      },    
   // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
  {
      id: 11,
      src: 'images/commercial_microwave_oven_25_litres-300x300.webp',
      name: 'Commercial Microwave Oven 25 litres',
      tag: 'Best Seller',
      description: 'The Butler commercial microwave ovens are a perfect replacement for inappropriate domestic ovens used in food-service applications. They bakes fast and evenly and are suitable for a wide variety ranging from pastries to entries. The durable construction is perfectly adapted for commercial usage such as food stores, pizza outlets, casual dining restaurants, clubs, deli applications and more.',
      specification: {
        material: 'Stainless Steel',
        dimensions: '24" x 20" x 18"',
        weight: '30 kg',
        power: 'Electric, 220V',
        tray_capacity: '2 trays',
        temperature_range: '100°C to 300°C',
        suitable_for: 'Commercial kitchens, Restaurants, Cafes, Foodservice operations',
        additional_features: 'Even heat distribution, Fast cooking time, Durable construction, Easy to clean'
      },    
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
    {
      id: 12,
      src: 'images/Tandoori.webp',
      tag: 'Popular',
      name: 'Tandoori Oven SS',
      description: 'As distinguished Tandoor Manufacturers in Mangalore, we specialize in crafting cutting-edge cooking solutions that redefine the art of tandoor cooking. Our tandoors in Mangalore are meticulously designed to deliver exceptional performance, combining traditional techniques with modern innovation.',
      specification: {
        material: 'Stainless Steel',
        dimensions: '24" x 24" x 36"',
        weight: '50 kg',
        power: 'Electric, 220V',
        tray_capacity: '3 trays',
        temperature_range: '200°C to 500°C',
        suitable_for: 'Restaurants, Catering services, Outdoor events, Indian cuisine',
        additional_features: 'High heat retention, Even cooking, Durable design, Easy to clean'
      }   
    // relatedProducts: [
    //   { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
    //   { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
    //   // Add other related products here
    // ]
  },
];

const carouselItems = [
  {
    image: 'images/electric-proofer.png',
    title: 'Electric Proofer',
    description: 'Achieve perfect proofing results every time.',
    buttonText: 'Learn More',
  },
  {
    image: 'images/automatic-sausage.png',
    title: 'Automatic Sausage Filling Machine',
    description: 'Boost your production efficiency with our cutting-edge, high-speed filling machine.',
    buttonText: 'Order Now',
  },
  {
    image: 'images/rotary-rack-oven.png',
    title: 'Rotary Rack Oven',
    description: 'Bake efficiently with our high-quality rotary rack oven.',
    buttonText: 'Shop Now',
  },
];

const LandingPage = ({ searchTerm }) => {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [undoItem, setUndoItem] = useState(null);
  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const filteredItems = imageList.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  // const handleProductClick = (product) => {
  //   navigate(`/product/${product.id}`, { state: { product } });
  // };
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product, relatedProducts: product.relatedProducts } });
  };


  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setCart([...cart, product]);
    setUndoItem(product);
    setOpenUndoSnackbar(true);
  };

  const handleBuyNow = (product, e) => {
    e.stopPropagation();
    setCart([...cart, product]);
    navigate('/checkout');
  };

  const handleUndo = () => {
    if (undoItem) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== undoItem.id));
      setOpenUndoSnackbar(false);
      setUndoItem(null);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', width: '100%', height: '35vh', overflow: 'hidden' }}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: index === currentIndex ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {/* Dark Overlay */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            {/* Text Content */}
            <Container sx={{ position: 'relative', textAlign: 'left', color: '#fff', maxWidth: '1200px' }}>
              <Typography variant="h3" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
                {item.title}
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto', marginTop: 2, maxWidth: '600px', opacity: 0.9 }}>
                {item.description}
              </Typography>
            </Container>
          </Box>
        ))}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
          }}
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Image Gallery Section */}
      <Box sx={{ backgroundColor: '#fff', padding: '40px 20px' }}>
        <Container>
          <Typography variant="h4" sx={{ fontFamily: 'Roboto', textAlign: 'center', fontWeight: 'bold', color: '#333', marginBottom: 3 }}>
            Product Gallery
          </Typography>
          <Grid container spacing={3}>
            {filteredItems.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>

                <Card
                  onClick={() => handleProductClick(product)}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: '12px',
                    border: 'none',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      '& .product-image': {
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box sx={{
                    height: 180,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f9f9f9',
                    p: 2
                  }}>
                    <CardMedia
                      component="img"
                      image={product.src}
                      alt={product.name}
                      className="product-image"
                      sx={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                    />
                  </Box>

                  <Box sx={{ padding: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {product.name}
                    </Typography>
                    {/* <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 'bold', marginY: 1 }}>
                      ${product.price}
                    </Typography> */}
                    <Typography variant="body2" sx={{ marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        sx={{ borderColor: 'black', backgroundColor: '#F97300', color: 'black' }}
                        size="small"
                        onClick={(e) => handleBuyNow(product, e)}
                      >
                        Buy Now
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ borderColor: 'black', backgroundColor: 'white', color: '#F97300' }}
                        size="small"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={openUndoSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenUndoSnackbar(false)}
      >
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small" onClick={handleUndo}>
              UNDO
            </Button>
          }
        >
          Item added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default LandingPage;