import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';


const actions = [
  { icon: <CallIcon  color='primary'/>, name: 'Phone',  action: () => window.open('tel:8122333353') },
  { icon: <WhatsAppIcon color="success" />, name: 'Whatsapp', action : () => window.open('https://wa.me/9171585789')},
  { icon: <InstagramIcon color='secondary' />, name: 'Instagram',action : () => window.open('https://www.instagram.com/krishna_kitchen_equipments/reels/') },
  { icon: <FacebookIcon color='primary' />, name: 'Facebook', action : () => window.open('https://www.facebook.com/profile.php?id=100054503813149&sk=photos') },
  
];

export default function BasicSpeedDial() {
  return (
  
      <SpeedDial
  ariaLabel="SpeedDial basic example"
  sx={{ 
    position: 'fixed', 
    bottom: 25, 
    right: 20, 
    zIndex: 10, 
    color: 'orange', 
    '& .MuiFab-primary': {
      backgroundColor: '#D76C82', 
      '&:hover': {
        backgroundColor: '#D76C82', 
      }}
}}
  icon={<OutdoorGrillIcon sx={{ height: '200px', width: '40px',  }} />}
>
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      onClick={action.action}
    />
  ))}
</SpeedDial>

  
  );
}
