import React from 'react';
import { IconButton, Badge, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Create a styled Badge component to customize it
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-dot': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function CartIcon() {
  return (
    <IconButton
      aria-label="cart"
      style={{
        position: 'fixed',
        top: '20px',  // Adjust to your preferred vertical position
        right: '20px', // Adjust to your preferred horizontal position
        zIndex: 9999,  // Ensure it stays above other elements
      }}
    >
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

export default CartIcon;
