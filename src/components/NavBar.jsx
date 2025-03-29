import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  IconButton, 
  InputBase, 
  Box, 
  Menu, 
  MenuItem,
  Paper,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Search as SearchIcon, 
  Phone as PhoneIcon, 
  Home as HomeIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: "Kitchen Equipment",
    items: ["Commercial Gas Range", "Commercial Electric Range", "Induction Cooktop", "Grinder"],
  },
  {
    name: "Food Preparation",
    items: ["Idli Steamer", "Dhokla Steamer", "Commercial Food Steamer", "Milk Steamer", "Machines"],
  },
  {
    name: "Bakery Equipment",
    items: ["Deep Fryer", "Donut Fryer", "Pressure Fryer", "Oven"],
  },
  {
    name: "Barbeque Machine",
    items: ["Grill Chicken Machine", "Shawarma Machine", "Alfaham Machine", "Barbeque Machine"],
  },
  {
    name: "Business Type",
    items: ["Machine", "Cart", "Showcase"],
  }, 
];

const quickLinks = [
  {
    name: "Beverage items",
    path: "/Beverage"
  }, 
  {
    name: "Commercial Machines",
    path: "/CommercialMachines"
  },
];

const Navbar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearchChange(newSearchTerm);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  const submitSearch = () => {
    console.log('Search submitted:', searchTerm);
    scrollToTop();
  };

  const handleCategoryHover = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  

  return (
    <>
      {/* Top Bar with Search, Logo, and Contact */}
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(135deg, #FF6B00 0%, #FF8E00 100%)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          py: 1,
          zIndex: 1200
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Mobile Menu Button (hidden on desktop) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleMobileMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <Typography
              variant="h4"
              component={Link}
              to="/"
              sx={{
                fontWeight: 800,
                color: 'white',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                textAlign: 'center', 
                textDecoration: 'none',
                letterSpacing: '1.5px',
                textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                flexGrow: { xs: 1, md: 0 },
                textAlign: 'center',
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                
              }}
            >
              Krishna Industries
            </Typography>

            {/* Search Bar (hidden on mobile) */}
            {/* <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              mx: 4,
              maxWidth: '500px'
            }}>
              <Paper
                component="form"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                <InputBase
                  placeholder="Search products..."
                  fullWidth
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{
                    px: 3,
                    py: 1,
                    fontSize: '0.9rem'
                  }}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <IconButton 
                  type="submit" 
                  onClick={submitSearch}
                  sx={{ 
                    color: '#FF6B00',
                    backgroundColor: 'white',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box> */}

            {/* Contact Info */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              display: { xs: 'none', sm: 'flex' } 
            }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography
                variant="subtitle1"
                component="a"
                href="tel:+919171585789"
                sx={{
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: 'inherit',
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' }
                }}
              >
                +91 91715 85789
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Navigation Bar */}
      <AppBar 
        position="sticky" 
        sx={{ 
          background: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ 
            justifyContent: 'center',
            px: 0,
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            {/* Home Button */}
            <Button
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                minWidth: 'auto',
                px: 2,
                mx: 1,
                color: '#FF6B00',
                fontWeight: 600,
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 0, 0.1)'
                }
              }}
            >
              Home
            </Button>

            {/* Category Buttons */}
            {categories.map((category, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <Button
                  onMouseEnter={(e) => handleCategoryHover(e, category)}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    mx: 1,
                    color: '#333',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      color: '#FF6B00'
                    }
                  }}
                >
                  {category.name}
                </Button>

                {/* Category Dropdown */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCategory === category}
                  onClose={handleMenuClose}
                  MenuListProps={{ 
                    onMouseLeave: handleMenuClose,
                    sx: { py: 0 }
                  }}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: 200,
                      boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                      borderRadius: '8px'
                    }
                  }}
                >
                  {category.items.map((item, i) => (
                    <MenuItem 
                      key={i} 
                      onClick={handleMenuClose}
                      component={Link}
                      to={
                        item === 'Commercial Gas Range' ? '/Commerical_Gas' :
                        item === 'Commercial Electric Range' ? '/Commerical_Electric' :
                        item === 'Induction Cooktop' ? '/Commerical_Induction' :
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
                        item === "Machines" ? '/PreparationMachines' :
                        item === "Oven" ? '/Oven' :
                        item === "Machine" ? '/BusinessMachines' :
                        item === "Cart" ? '/Cart' :
                        item === "Showcase" ? '/Showcase' : '#'
                      }
                      sx={{
                        py: 1.5,
                        px: 3,
                        fontSize: '0.9rem',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 107, 0, 0.1)',
                          color: '#FF6B00'
                        }
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}

            <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 24, alignSelf: 'center' }} />

            {/* Quick Links */}
            {quickLinks.map((link, index) => (
              <Button
                key={index}
                component={Link}
                to={link.path}
                sx={{
                  minWidth: 'auto',
                  px: 2,
                  mx: 1,
                  color: '#333',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    color: '#FF6B00'
                  }
                }}
              >
                {link.name}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu (hidden on desktop) */}
      <Box sx={{ 
        display: { xs: mobileMenuOpen ? 'block' : 'none', md: 'none' },
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 1300,
        pt: 8,
        px: 2
      }}>
        <Paper sx={{ p: 2, maxHeight: '80vh', overflow: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleMobileMenu}>
              <Typography color="error">✕</Typography>
            </IconButton>
          </Box>
          
          {/* Mobile Search */}
          <Paper
            component="form"
            sx={{
              display: 'none',
              alignItems: 'center',
              width: '100%',
              mb: 3,
              borderRadius: '30px',
              overflow: 'hidden'
            }}
          >
            <InputBase
              placeholder="Search..."
              fullWidth
              inputProps={{ 'aria-label': 'search' }}
              sx={{ px: 3, py: 1 }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <IconButton type="submit" onClick={submitSearch}>
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Mobile Menu Items */}
          <Box>
            <Button
              component={Link}
              to="/"
              fullWidth
              startIcon={<HomeIcon />}
              sx={{ 
                justifyContent: 'flex-start',
                mb: 1,
                color: '#FF6B00',
                fontWeight: 600
              }}
            >
              Home
            </Button>

            {categories.map((category, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 600,
                  px: 2,
                  py: 1,
                  color: '#333'
                }}>
                  {category.name}
                </Typography>
                {category.items.map((item, i) => (
                  <MenuItem 
                    key={i}
                    component={Link}
                    to={
                      item === 'Commercial Gas Range' ? '/Commerical_Gas' :
                      // ... other paths
                      '#'
                    }
                    onClick={toggleMobileMenu}
                    sx={{ 
                      pl: 4,
                      py: 1.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            {quickLinks.map((link, index) => (
              <Button
                key={index}
                component={Link}
                to={link.path}
                fullWidth
                sx={{ 
                  justifyContent: 'flex-start',
                  pl: 2,
                  py: 1.5,
                  color: '#333',
                  fontWeight: 600
                }}
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   Container, 
//   IconButton, 
//   InputBase, 
//   Box, 
//   Menu, 
//   MenuItem,
//   Paper,
//   Divider
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { 
//   Search as SearchIcon, 
//   Phone as PhoneIcon, 
//   Home as HomeIcon,
//   ArrowDropDown as ArrowDropDownIcon,
//   Menu as MenuIcon
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const categories = [
//   {
//     name: "Kitchen Equipment",
//     items: ["Commercial Gas Range", "Commercial Electric Range", "Induction Cooktop", "Grinder"],
//   },
//   {
//     name: "Food Preparation",
//     items: ["Idli Steamer", "Dhokla Steamer", "Commercial Food Steamer", "Milk Steamer", "Machines"],
//   },
//   {
//     name: "Bakery Equipment",
//     items: ["Deep Fryer", "Donut Fryer", "Pressure Fryer", "Oven"],
//   },
//   {
//     name: "Barbeque Machine",
//     items: ["Grill Chicken Machine", "Shawarma Machine", "Alfaham Machine", "Barbeque Machine"],
//   },
//   {
//     name: "Business Type",
//     items: ["Machine", "Cart", "Showcase"],
//   }, 
// ];

// const quickLinks = [
//   {
//     name: "Beverage items",
//     path: "/Beverage"
//   }, 
//   {
//     name: "Commercial Machines",
//     path: "/CommercialMachines"
//   },
// ];

// const Navbar = ({ onSearchChange }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     const newSearchTerm = event.target.value;
//     setSearchTerm(newSearchTerm);
//     onSearchChange(newSearchTerm);
//   };

//   const scrollToTop = () => {
//     window.scrollTo(0, 0);
//   };
  
//   const submitSearch = () => {
//     console.log('Search submitted:', searchTerm);
//     scrollToTop();
//   };

//   const handleCategoryHover = (event, category) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedCategory(category);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedCategory(null);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };
  

//   return (
//     <>
//       {/* Top Bar with Search, Logo, and Contact */}
//       <AppBar
//   position="static"
//   sx={{
//     background: 'linear-gradient(135deg, #FF6B00 0%, #FF8E00 100%)',
//     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//     py: 1,
//     zIndex: 1200
//   }}
// >
//   <Container maxWidth="lg">
//     <Toolbar sx={{ 
//       display: 'flex',
//       justifyContent: 'space-between',
//       position: 'relative' // Needed for absolute positioning of text
//     }}>
//       {/* Logo on the left */}
//       <Box
//         component="img"
//         src="/images/favicon-32x32.png"
//         alt="Krishna Industries Logo"
//         sx={{
//           height: { xs: 30, sm: 40 },
//           width: 'auto',
//           maxWidth: { xs: 120, sm: 150 },
//           objectFit: 'contain'
//         }}
//       />

//       {/* Centered text */}
//       <Typography
//         variant="h4"
//         component={Link}
//         to="/"
//         sx={{
//           position: 'absolute',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           fontWeight: 800,
//           color: 'white',
//           fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//           textDecoration: 'none',
//           letterSpacing: '1.5px',
//           textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
//           fontSize: { xs: '1.5rem', sm: '1.75rem' },
//           whiteSpace: 'nowrap',
//         }}
//       >
//         Krishna Industries
//       </Typography>

//       {/* Contact Info on the right */}
//       <Box sx={{ 
//         display: 'flex',
//         alignItems: 'center',
//         color: 'white',
//         display: { xs: 'none', sm: 'flex' }
//       }}>
//         <PhoneIcon sx={{ mr: 1 }} />
//         <Typography
//           variant="subtitle1"
//           component="a"
//           href="tel:+919171585789"
//           sx={{
//             fontWeight: 600,
//             textDecoration: 'none',
//             color: 'inherit',
//             whiteSpace: 'nowrap',
//             fontSize: { xs: '0.8rem', sm: '0.9rem' }
//           }}
//         >
//           +91 86083 33373
//         </Typography>
//       </Box>
//     </Toolbar>
//   </Container>
// </AppBar>

//       {/* Main Navigation Bar */}
//       <AppBar 
//         position="sticky" 
//         sx={{ 
//           background: 'white',
//           boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//           zIndex: 1100,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar sx={{ 
//             justifyContent: 'center',
//             px: 0,
//             overflowX: 'auto',
//             '&::-webkit-scrollbar': { display: 'none' }
//           }}>
//             {/* Home Button */}
//             <Button
//               component={Link}
//               to="/"
//               startIcon={<HomeIcon />}
//               sx={{
//                 minWidth: 'auto',
//                 px: 2,
//                 mx: 1,
//                 color: '#FF6B00',
//                 fontWeight: 600,
//                 borderRadius: '20px',
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 107, 0, 0.1)'
//                 }
//               }}
//             >
//               Home
//             </Button>

//             {/* Category Buttons */}
//             {categories.map((category, index) => (
//               <Box key={index} sx={{ position: 'relative' }}>
//                 <Button
//                   onMouseEnter={(e) => handleCategoryHover(e, category)}
//                   endIcon={<ArrowDropDownIcon />}
//                   sx={{
//                     minWidth: 'auto',
//                     px: 2,
//                     mx: 1,
//                     color: '#333',
//                     fontWeight: 600,
//                     textTransform: 'none',
//                     borderRadius: '20px',
//                     fontSize: '0.9rem',
//                     '&:hover': {
//                       backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                       color: '#FF6B00'
//                     }
//                   }}
//                 >
//                   {category.name}
//                 </Button>

//                 {/* Category Dropdown */}
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl) && selectedCategory === category}
//                   onClose={handleMenuClose}
//                   MenuListProps={{ 
//                     onMouseLeave: handleMenuClose,
//                     sx: { py: 0 }
//                   }}
//                   PaperProps={{
//                     sx: {
//                       mt: 1,
//                       minWidth: 200,
//                       boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
//                       borderRadius: '8px'
//                     }
//                   }}
//                 >
//                   {category.items.map((item, i) => (
//                     <MenuItem 
//                       key={i} 
//                       onClick={handleMenuClose}
//                       component={Link}
//                       to={
//                         item === 'Commercial Gas Range' ? '/Commerical_Gas' :
//                         item === 'Commercial Electric Range' ? '/Commerical_Electric' :
//                         item === 'Induction Cooktop' ? '/Commerical_Induction' :
//                         item === 'Infrared Cooktop' ? '/Infrared-CookTop' :
//                         item === "Idli Steamer" ? '/IdlySteamer' :
//                         item === "Dhokla Steamer" ? '/DhoklaSteamer' :
//                         item === "Commercial Food Steamer" ? '/CommercialSteamer' :
//                         item === "Milk Steamer" ? '/MilkSteamer' :
//                         item === "Deep Fryer" ? '/DeepFry' :
//                         item === "Donut Fryer" ? '/DonutFry' :
//                         item === "Pressure Fryer" ? '/PressureFry' :
//                         item === "Grill Chicken Machine" ? '/GrillChicken' :
//                         item === "Shawarma Machine" ? '/Shawarma' :
//                         item === "Alfaham Machine" ? '/Alfaham' :
//                         item === "Barbeque Machine" ? '/Barbeque' :
//                         item === "Grinder" ? '/Grinder' :
//                         item === "Machines" ? '/PreparationMachines' :
//                         item === "Oven" ? '/Oven' :
//                         item === "Machine" ? '/BusinessMachines' :
//                         item === "Cart" ? '/Cart' :
//                         item === "Showcase" ? '/Showcase' : '#'
//                       }
//                       sx={{
//                         py: 1.5,
//                         px: 3,
//                         fontSize: '0.9rem',
//                         '&:hover': {
//                           backgroundColor: 'rgba(255, 107, 0, 0.1)',
//                           color: '#FF6B00'
//                         }
//                       }}
//                     >
//                       {item}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//             ))}

//             <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 24, alignSelf: 'center' }} />

//             {/* Quick Links */}
//             {quickLinks.map((link, index) => (
//               <Button
//                 key={index}
//                 component={Link}
//                 to={link.path}
//                 sx={{
//                   minWidth: 'auto',
//                   px: 2,
//                   mx: 1,
//                   color: '#333',
//                   fontWeight: 600,
//                   textTransform: 'none',
//                   borderRadius: '20px',
//                   fontSize: '0.9rem',
//                   '&:hover': {
//                     backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                     color: '#FF6B00'
//                   }
//                 }}
//               >
//                 {link.name}
//               </Button>
//             ))}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Mobile Menu (hidden on desktop) */}
//       <Box sx={{ 
//         display: { xs: mobileMenuOpen ? 'block' : 'none', md: 'none' },
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0,0,0,0.8)',
//         zIndex: 1300,
//         pt: 8,
//         px: 2
//       }}>
//         <Paper sx={{ p: 2, maxHeight: '80vh', overflow: 'auto' }}>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <IconButton onClick={toggleMobileMenu}>
//               <Typography color="error">✕</Typography>
//             </IconButton>
//           </Box>
          
//           {/* Mobile Search */}
//           <Paper
//             component="form"
//             sx={{
//               display: 'none',
//               alignItems: 'center',
//               width: '100%',
//               mb: 3,
//               borderRadius: '30px',
//               overflow: 'hidden'
//             }}
//           >
//             <InputBase
//               placeholder="Search..."
//               fullWidth
//               inputProps={{ 'aria-label': 'search' }}
//               sx={{ px: 3, py: 1 }}
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             <IconButton type="submit" onClick={submitSearch}>
//               <SearchIcon />
//             </IconButton>
//           </Paper>

//           {/* Mobile Menu Items */}
//           <Box>
//             <Button
//               component={Link}
//               to="/"
//               fullWidth
//               startIcon={<HomeIcon />}
//               sx={{ 
//                 justifyContent: 'flex-start',
//                 mb: 1,
//                 color: '#FF6B00',
//                 fontWeight: 600
//               }}
//             >
//               Home
//             </Button>

//             {categories.map((category, index) => (
//               <Box key={index} sx={{ mb: 2 }}>
//                 <Typography variant="subtitle1" sx={{ 
//                   fontWeight: 600,
//                   px: 2,
//                   py: 1,
//                   color: '#333'
//                 }}>
//                   {category.name}
//                 </Typography>
//                 {category.items.map((item, i) => (
//                   <MenuItem 
//                     key={i}
//                     component={Link}
//                     to={
//                       item === 'Commercial Gas Range' ? '/Commerical_Gas' :
//                       // ... other paths
//                       '#'
//                     }
//                     onClick={toggleMobileMenu}
//                     sx={{ 
//                       pl: 4,
//                       py: 1.5,
//                       fontSize: '0.9rem'
//                     }}
//                   >
//                     {item}
//                   </MenuItem>
//                 ))}
//               </Box>
//             ))}

//             <Divider sx={{ my: 2 }} />

//             {quickLinks.map((link, index) => (
//               <Button
//                 key={index}
//                 component={Link}
//                 to={link.path}
//                 fullWidth
//                 sx={{ 
//                   justifyContent: 'flex-start',
//                   pl: 2,
//                   py: 1.5,
//                   color: '#333',
//                   fontWeight: 600
//                 }}
//                 onClick={toggleMobileMenu}
//               >
//                 {link.name}
//               </Button>
//             ))}
//           </Box>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default Navbar;