import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, InputBase, Box, Stack, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

// pransesh
const categories = [
  {
    name: "Kitchen Equipment",
    items: ["Commercial Gas Range", "Commercial Electric Range", "Commercial Induction Cooktop", "Infrared Cooktop", "Grinder"],
  },
  {
    name: "Food Preparation",
    items: ["Idli Steamer", "Dhokla Steamer", "Commercial Food Steamer", "Milk Steamer", "Machines"],
  },
  //mmm
  {
    name: "Bakery Equipment",
    items: ["Deep Fryer", "Donut Fryer", "Pressure Fryer","Oven"],
  },
  // Nanum  irkeran 
  //okay fine
  {
    name: "Chicken Barbecue Machine",
    items: ["Grill Chicken Machine", "Shawarma Machine", "Alfaham Machine", "Barbeque Machine"],
  },
  {
    name: "Business Type",
    items: ["Machine","Cart","Showcase"],
  },{
    name: "Beverage items",
    items: ["Grill Chicken Machine", "Shawarma Machine", "Alfaham Machine", "Barbeque Machine"],
  },{
    name: "Commercial Machines",
    items: ["Grill Chicken Machine", "Shawarma Machine", "Alfaham Machine", "Barbeque Machine"],
  },

];


const Navbar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearchChange(newSearchTerm);
  };

  const submitSearch = () => {
    console.log('Search submitted:', searchTerm);
  };

  const handleClick = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  return (
    <>

      {/* Existing Navbar */}
      <AppBar
        position="relative"
        sx={{
          top: 0,
          background: 'orange',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '1px 0',
          zIndex: 1100 // Ensures it stays on top
        }}
      >
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Make sure it's row on both mobile and larger screens
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Left side: Search Bar */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                width: { xs: '70%', sm: 'auto' }, // Make the search bar occupy more space on mobile
                mb: { xs: 1, sm: 0 },
                backgroundColor: 'black',
                borderRadius: '20px',
                padding: '5px 10px',
              }}
            >
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                  color: 'white',
                  flexGrow: 1,
                  width: { xs: '100%', sm: 'auto' },
                }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <IconButton onClick={submitSearch} sx={{ color: 'orange' }}>
                <SearchIcon />
              </IconButton>
            </Box>

            {/* Center: Company Name */}
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: 'black',
                textTransform: 'uppercase',
                textAlign: 'center',
                fontFamily: 'Roboto',
                letterSpacing: '2px',
                flexGrow: 1, // To keep the company name centered
                fontSize: { xs: '20px', sm: '24px' }, // Adjust font size for mobile view
              }}
            >
              Krishna Industries
            </Typography>

            {/* Right side: Phone Number */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                justifyContent: 'flex-end',
                width: { xs: '30%', sm: 'auto' },
              }}
            >
              <PhoneIcon sx={{ mr: 1, color: 'black' }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap', // Prevent the phone number from wrapping to the next line
                  fontSize: { xs: '14px', sm: '16px' }, // Adjust font size for mobile view
                }}
              >
                <a href="tel:+919171585789" style={{ textDecoration: 'none', color: 'inherit' }}>
                  91715 85789
                </a>
              </Typography>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>



      {/* Dropdown Menu Section */}
      <AppBar position="sticky" sx={{ background: 'orange', zIndex: 1000 }}>
        <Toolbar sx={{ paddingX: { xs: 1, sm: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Home Icon */}
            <IconButton
              component={Link}
              to="/"
              sx={{
                color: 'black',
                marginRight: { xs: 1, sm: 2 }, // Adjust margin for smaller screens
              }}
            >
              <HomeIcon />
            </IconButton>
          </Box>

          {/* Scrollable Menu Items */}
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto', // Enables horizontal scroll on mobile
              flexWrap: 'nowrap', // Ensures items stay on one line
              width: '100%',
              paddingY: 1,
            }}
          >
            {categories.map((category, index) => (
              <div key={index}>
                <Button
                  color="inherit"
                  onMouseEnter={(event) => handleClick(event, category)}
                  sx={{
                    textTransform: 'none',
                    fontSize: { xs: '14px', sm: '15px' },
                    mx: 1,
                    fontFamily: 'Roboto',
                    backgroundColor: 'white',
                    color: 'orangered',
                    borderRadius: '15px',
                    whiteSpace: 'nowrap',
                    '&:hover': { backgroundColor: '#fff', color: 'orangered' },
                  }}
                >
                  {category.name}
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCategory === category}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                  sx={{ marginTop: '15px' }} // Moves dropdown slightly lower
                >
                  {category.items.map((item, i) => (
                    <MenuItem key={i} onClick={handleClose}>
                      
<Link
to={
  item === 'Commercial Gas Range' ? '/Commerical_Gas' :
    item === 'Commercial Electric Range' ? '/Commerical_Electric' :
      item === 'Commercial Induction Cooktop' ? '/Commerical_Induction' :
        item === 'Infrared Cooktop' ? '/Infrared-CookTop' :
          item === "Idli Steamer" ? '/IdlySteamer' :
            item === "Dhokla Steamer" ? '/DhoklaSteamer' :
              item === "Commercial Food Steamer" ? '/CommercialSteamer' :
                item === "Milk Steamer" ? '/MilkSteamer' :
                  item === "Deep Fryer" ? '/DeepFry' :
                    item === "Donut Fryer" ? '/DonutFry' :
                      item === "Pressure Fryer" ? '/PressureFry' :
                        item === "Grill Chicken Machine" ? '/GrillChicken' :
                          item === "Shawarma Machine" ? '/Shawarma' :
                            item === "Alfaham Machine" ? '/Alfaham' :
                              item === "Barbeque Machine" ? '/Barbeque' :
                                item === "Grinder" ? '/Grinder' :
                                  item === "Machines" ? '/PreparationMachines':
                                   item === "Oven" ? '/Oven' :
                                    item === "Machine" ? '/BusinessMachines':
                                     item === "Cart" ? '/Cart':
                                      item === "Showcase" ? '/Showcase':
                                '#'}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {item}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

    </>
  );
};

export default Navbar;




