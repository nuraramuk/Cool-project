import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, Snackbar, Alert, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

//cotton candy
import cotton from '../asserts/RelativeImages/cotton/cotton-candy-machine.jpg'
import cotton1 from '../asserts/RelativeImages/cotton/fullAuto.webp'
import cotton2 from '../asserts/RelativeImages/cotton/bigsize.jpg'
import cotton3 from '../asserts/RelativeImages/cotton/manual-cotton-candy.webp'
import cotton4 from '../asserts/RelativeImages/cotton/smallsize.webp'

//Food Cart
import cart from '../asserts/RelativeImages/FoodCart/food.webp'
import cart1 from '../asserts/RelativeImages/FoodCart/pop.webp'
import cart2 from '../asserts/RelativeImages/FoodCart/cotton.webp'
import cart3 from '../asserts/RelativeImages/FoodCart/poptrolly.webp'
import cart4 from '../asserts/RelativeImages/FoodCart/corn.webp'

// Kosik
import kiosk from '../asserts/RelativeImages/Kosik/kiosks.webp'
import kiosk1 from '../asserts/RelativeImages/Kosik/kiosk1.jpg'
import kiosk2 from '../asserts/RelativeImages/Kosik/kiosk2.jpg'
import kiosk3 from '../asserts/RelativeImages/Kosik/coffe.avif'
import kiosk4 from '../asserts/RelativeImages/Kosik/simple.jpeg'

// push card
import push from '../asserts/RelativeImages/push_cart/Push-Kart.jpeg'
import push1 from '../asserts/RelativeImages/push_cart/kiosk.png'
import push2 from '../asserts/RelativeImages/push_cart/push.webp'
import push3 from '../asserts/RelativeImages/push_cart/push1.webp'
import push4 from '../asserts/RelativeImages/push_cart/auto.webp'

// Egg Roll Machine
import egg from '../asserts/RelativeImages/Egg_machine/EggMachine.jpg'
import egg1 from '../asserts/RelativeImages/Egg_machine/egg.jpg'
import egg2 from '../asserts/RelativeImages/Egg_machine/egg1.jpg'
import egg3 from '../asserts/RelativeImages/Egg_machine/icecup.jpg'
import egg4 from '../asserts/RelativeImages/Egg_machine/ice.jpg'

// Sausage Filling Machine
import saug from '../asserts/RelativeImages/Sausage/saug.webp'
import saug1 from '../asserts/RelativeImages/Sausage/saug1.jpeg'
import saug2 from '../asserts/RelativeImages/Sausage/saug2.avif'
import saug3 from '../asserts/RelativeImages/Sausage/saug3.webp'
import saug4 from '../asserts/RelativeImages/Sausage/saug4.webp'

//sandwich maker
import san from '../asserts/RelativeImages/Sandwich/Sandwich.webp'

const imageList = [
  {
    id: 1,
    src: cotton,
    // src: 'images/cotton-candy-machine.jpg',
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
    relatedProducts: [
      {
        id: 2,
        // src: '../asserts/RelativeImages/cotton/bigsize.jpg', 
        src: cotton1,
        name: 'Electric Cotton Candy Machine',
        description: 'The Electric Cotton Candy Machine made the joy of fluffy, sugary treats accessible to many, bringing a bit of carnival fun into everyday life. Whether for business or pleasure, they offer a unique way to enjoy a classic sweet treat.',
        specification: {
          voltage: '220V/110V',
          power: '1080W',
          output: '1 Unit/30 S',
          pan_diameter: '520mm',
          size: '520x520x500mm',
          material_of_pan: 'S/S (Stainless Steel)',
          packing_item: 'Carton + Foam',
          packing_size: '570x570x450mm',
          transport_package: 'Carton + Foam',
          // warranty: '1 Year Manufacturing Defect'
        }
      },
      {
        id: 3,
        src: cotton2,
        name: 'Full Automation Cotton Candy',
        description: 'A fully automated cotton candy machine designed for high-volume production, ensuring consistent and fluffy cotton candy with minimal effort.',
        specification: {
          material: 'Food-grade stainless steel, non-stick coating, and durable plastic components',
          capacity: 'Produces up to 100 cotton candies per hour',
          power: 'Electric 220V',
          weight: '12 kg',
          dimensions: '45cm x 45cm x 60cm',
          // warranty: '3 year'
        }
      },
      {
        id: 4,
        src: cotton3,
        name: 'Manual Control Cotton Candy',
        description: 'A manual cotton candy machine designed for hands-on control, allowing users to create custom cotton candy with precision and creativity.',
        specification: {
          material: 'Food-grade stainless steel, non-stick coating, and durable plastic components',
          capacity: 'Produces up to 50 cotton candies per hour',
          power: 'Electric 220V',
          weight: '8 kg',
          // dimensions: '30cm x 30cm x 60cm',
          // warranty: '1 year'
        }
      },
      {
        id: 5,
        src: cotton4,
        name: 'Small Size Cotton Candy',
        description: 'A compact cotton candy machine ideal for small events, home use, or low-volume production, offering an easy and fun way to make cotton candy.',
        specification: {
          material: 'Food-grade stainless steel and durable plastic',
          capacity: 'Produces up to 30 cotton candies per hour',
          power: 'Electric 110V',
          weight: '5 kg',
          // dimensions: '30cm x 30cm x 60cm',
          // warranty: '1 year'
        }
      }
    ]
  },
  {
    id: 2,
    src: cart,
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
    relatedProducts: [
      {
        id: 0,
        src: cart1,
        name: 'Popcorn Cart Trolley',
        description: 'The Popcorn Machine 250 Gms Electric Black With Cart Trolley is a compact, countertop model designed for small-scale commercial use. It can produce 200-250 grams per batch and 7-9 kg per hour of delicious, freshly popped popcorn. Ideal for food stalls, events, and small cafes, this machine provides an efficient and fun way to serve popcorn to customers.',
        specification: {
          material: 'Mild Steel with Aluminium Frame',
          capacity: '250 gms per batch',
          power: 'Electric 220V',
          weight: '32 kg',
          dimensions: '45cm x 45cm x 60cm',
          // warranty: '3 year'

        }
      },
      {
        id: 1,
        src: cart2,
        name: 'Candy Floss Machine',
        description: 'The Electric Cotton Candy Machine with Cart brings the joy of fluffy, sugary treats to your business or home, making carnival fun accessible for everyone. This machine provides a fast and easy way to enjoy a classic sweet treat, whether for business or pleasure.',
        specification: {
          material: 'MS (Mild Steel) pan',
          capacity: 'Produces up to 100 cotton candies per hour',
          power: 'Electric 220V',
          weight: '12 kg',
          dimensions: '45cm x 45cm x 60cm',
          // warranty: '3 year'
        }
      },
      {
        id: 3,
        src: cart3,
        name: 'ACart Trolley',
        description: 'A mobile and stylish solution for preparing and serving popcorn in various settings such as fairs, events, cinemas, and malls. It combines the functionality of a popcorn machine with the convenience of a cart, making it easy to move and set up in different locations. The trolleys attractive design draws customer attention, making it a popular choice for businesses and entertainment venues.',
        specification: {
          material: 'Steel frame with durable powder coating and high-quality glass panels',
          capacity: 'Electric 110V or 230V depending on model',
          dimensions: "Varies based on the model, generally around 120 cm x 80 cm x 180 cm",
          use: "Fairs, events, cinemas, malls, and more",
          weight: '8 kg',
          // dimensions: '30cm x 30cm x 60cm',
          // warranty: '1 year'
        }
      },
      {
        id: 4,
        src: cart4,
        name: 'Electric Sweetcorn Trolly',
        description: 'A specialized machine for efficiently steaming or cooking sweetcorn in commercial settings such as food stalls, markets, events, and catering operations. This machine is designed to ensure high-quality corn in large volumes, perfect for any high-demand food service.',
        specification: {
          material: 'Stainless Steel',
          capacity: '5 kg corn / 10L water',
          power: 'Electric 230V, 3000W',
          weight: '32 kg',
          use: 'Commercial Cafes, Hotels, Events & More'
          // warranty: '1 year'
        }
      }
    ]
  },
  {
    id: 3,
    src: kiosk,
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
    relatedProducts: [
      {
        id: 0,
        src: kiosk1,
        name: 'Pallet Kiosk',
        description: 'The Pallet Kiosk is a versatile and eco-friendly solution for retail and food service. Made from durable pine wood, it offers a rustic yet functional design. Ideal for pop-up shops, markets, and small businesses, this customized kiosk provides an attractive and portable setup for various applications.',
        specification: {
          material: 'Pine Wood',
          color: 'Wood',
          dimension: 'Customized',
          suitable_for: 'Street food vendors, Small restaurants',
          additional_features: 'Durable and easy to clean, Mobile and stable, Ample workspace for food preparation, Ideal for outdoor use'
        }
      },
      {
        id: 1,
        src: kiosk2,  // Replace with actual image source
        name: 'Small Kiosk',
        description: 'The Small Kiosk is an ideal solution for compact retail spaces, food stalls, or pop-up shops. Its compact design ensures it can be placed in smaller areas while still offering a functional space for displaying products or serving food. Built with durable materials, this kiosk provides a cost-effective way to set up a retail or service operation without the need for extensive space.',
        specification: {
          material: 'Steel or Wood (depending on your choice)',
          color: 'Customizable',
          dimension: 'Custom Sizes Available',
          productQuantity: '1 Unit',
          suitable_for: 'Retail, Food stalls, Pop-up shops',
          warranty: '1 year' 
        }
      },
      {
        id: 2,
        src: kiosk3,  // Replace with actual image source
        name: 'Compact Retail Kiosk',
        description: 'The Compact Retail Kiosk is designed for small businesses looking to maximize their retail space without compromising on functionality. Perfect for markets, events, and food service setups, this kiosk offers a compact and efficient solution. It’s easy to set up and move, making it ideal for temporary setups or small-scale operations.',
        specification: {
          material: 'Mild Steel or Stainless Steel (depending on model)',
          color: 'Silver or Customizable',
          dimension: 'Standard 5ft x 3ft x 7ft (Custom sizes available)',
          productQuantity: '1 Unit',
          suitable_for: 'Retail, Food stalls, Pop-up shops',
          warranty: '1 year' 

        }
      },
      {
        id: 4,
        src: kiosk4,  // Replace with actual image source
        name: 'Simple Cart',
        description: 'The Simple Cart is a versatile and easy-to-use mobile cart, perfect for small vendors, pop-up shops, and food stalls. Made with durable materials, this cart offers ample space for products and can be easily moved around, making it ideal for both indoor and outdoor use.',
        specification: {
          material: 'Mild Steel or Aluminum',
          color: 'Customizable',
          dimension: '4ft x 2ft x 5ft (Custom sizes available)',
          productQuantity: '1 Unit',
          suitable_for: 'Retail, Food stalls, Pop-up shops',
          warranty: '1 year' 
      }
    },

    ]
  },
  {
    id: 4,
    src: push,
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
    relatedProducts: [
      {
        id: 0,
        src: push1,
        name: 'Kiosk Cart',
        description: 'The Kiosk Cart is a modern and versatile solution for pop-up shops and retail stalls. Featuring a sturdy aluminum and steel frame, it offers a weight capacity of 350 kg, making it perfect for small retail businesses or food service. The sleek and functional design ensures ease of use at outdoor markets and events.',
        specification: {
          material: 'Aluminum and Steel',
          dimensions: '60" x 30" x 45"',
          weightCapacity: '350 kg',
          wheels: '4',
          suitableFor: 'Pop-up shops, Retail stalls, Outdoor markets, Events',
          warranty: '1 year'
        }
      },
      {
        id: 1,
        src: push2,  // Replace with actual image source
        name: 'Mild Steel Hand Push Cart',
        description: 'The Mild Steel Hand Push Cart is a heavy-duty cart designed for transporting goods efficiently. With a load capacity of 200kg and made of durable mild steel, it’s ideal for commercial or industrial use. The 3-wheel design ensures ease of maneuverability, making it a reliable solution for various handling tasks.',
        specification: {
          material: 'Mild Steel',
          loadCapacity: '200 kg',
          sparePart: 'NFK bearings',
          length: '4 ft',
          noOfWheels: '3',
          weight: '100 kg',
          height: '5 ft',
          suitableFor: 'Transporting goods, Commercial use, Industrial use',
          price: '₹ 85,000/Piece',
          // warranty: '1 year' (optional, if applicable)
        }
      },
      {
        id: 2,
        src: push3,  // Replace with actual image source
        name: 'Stainless Steel  Food Stall',
        description: 'The Fast Food Cart is a premium-quality, multifunctional kiosk designed for foodservice businesses. Built with durable stainless steel, this cart is ideal for Chinese, tea stalls, chat, and tiffin services. It features 2 burners, a food display rack, and a stainless steel matt finish, making it both functional and stylish. Perfect for restaurant owners, hotel operators, and entrepreneurs looking to start or expand their foodservice business.',
        specification: {
          material: 'Stainless Steel',
          loadCapacity: '200 kg',
          brand: 'Vimal',
          height: '7 feet',
          noOfWheels: '4',
          surfaceTreatment: 'Stainless Steel Matt',
          usageApplication: 'Chinese, Tea Stall, Chat, Tiffin',
          weldingType: 'TIG',
          countryOfOrigin: 'Made in India',
          minimumOrderQuantity: '1 Piece',
          // price: '₹ 59,500/Piece',
          // warranty: '1 year' (optional, if applicable)
        }
      },
      {
        id: 3,
        src: push4,  // Replace with actual image source
        name: 'Stainless Steel Fast Food Stall',
        description: 'The Fast Food Cart is a premium-quality, multifunctional kiosk designed for foodservice businesses. Built with durable stainless steel, this cart is ideal for Chinese, tea stalls, chat, and tiffin services. It features 2 burners, a food display rack, and a stainless steel matt finish, making it both functional and stylish. Perfect for restaurant owners, hotel operators, and entrepreneurs looking to start or expand their foodservice business.',
        specification: {
          material: 'Stainless Steel',
          loadCapacity: '200 kg',
          brand: 'Vimal',
          height: '7 feet',
          noOfWheels: '4',
          surfaceTreatment: 'Stainless Steel Matt',
          usageApplication: 'Chinese, Tea Stall, Chat, Tiffin',
          weldingType: 'TIG',
          countryOfOrigin: 'Made in India',
          minimumOrderQuantity: '1 Piece',
          // price: '₹ 59,500/Piece',
          // warranty: '1 year' (optional, if applicable)
        }
      }
    ]
  },
  {
    id: 5,
    src: egg,
    name: 'Shoppers Hub PNQ Electric 10 Slot Egg Roll Sausage Machine',
    tag: 'Popular',
    description: 'The Shoppers Hub PNQ Electric 10 Slot Egg Roll Sausage Machine is a powerful and efficient cooking appliance designed for homes, hotels, restaurants, cafes, and other commercial spaces. With a sturdy build and heavy-duty performance, it allows for the simultaneous cooking of up to 10 egg rolls or sausages, making it an ideal choice for high-demand food service environments. Its compact design ensures it fits well in various kitchen setups while providing consistent and reliable performance.',
    specification: {
      material: 'Stainless Steel',
      dimensions: '42 x 20 x 24 cm',
      suitable_for: 'Homes, Hotels, Restaurants, Cafes, Commercial kitchens',
      additional_features: 'Heavy-duty build, Even heat distribution, Easy to clean, Compact design for space efficiency'
    },
    relatedProducts: [
      {
        id: 0,
        src: egg1,  // Replace with actual image source
        name: 'Electric Egg Roll Machine',
        description: 'The Electric Egg Roll Machine is designed to streamline the egg roll preparation process with its high efficiency. Perfect for food stalls, restaurants, and catering businesses, this machine can handle up to 100 kg per hour, offering quick and consistent results. Featuring a compact design and 1.4 kW power, it ensures reliable performance with minimal energy consumption.',
        specification: {
          brand: 'Others',
          machinePower: '1.4 kW',
          capacity: '100 kg/hr',
          voltage: '220V',
          automationGrade: '304',
          frequency: '50 Hz',
          weight: '8 kg',
          // price: '₹ 10,000',
          // warranty: '1 year' (optional, if applicable)
        }
      },
      {
        id: 1,
        src: egg2,  // Replace with actual image source for the gas-powered machine
        name: 'Gas Egg Roll Machine',
        description: 'The Gas Egg Roll Machine is designed for high-efficiency egg roll preparation in commercial settings like food stalls, restaurants, and catering businesses. With a capacity to handle up to 100 kg per hour, this machine operates on gas, offering mobility and energy efficiency, especially for outdoor or large-scale events. Its robust design ensures consistent performance and excellent results every time.',
        specification: {
          brand: 'Others',
          machinePower: 'Gas-powered',
          capacity: '100 kg/hr',
          fuelType: 'Gas',
          frequency: '50 Hz',
          weight: '8 kg',
          // price: '₹ 10,000',  // Update with the correct price
          // warranty: '1 year' (optional, if applicable)
        }
      },
      {
        id: 2,
        src: egg3,  // Replace with actual image source
        name: 'Ice Candy Machine',
        description: 'The Ice Candy Machine is designed to make refreshing ice pops and ice candies for a cool summer treat. Made from durable plastic, this tool is perfect for creating sweet ice pops, kulfi, or flavored ice candies at home or in small commercial setups. Its compact design and ease of use make it ideal for any summer gathering.',
        specification: {
          brand: 'Divine Impex',
          material: 'Plastic',
          productDimensions: '12L x 5W x 10H Centimeters',
          capacity: '6 ice pops',
          // price: '₹ [Insert Price]',  // Update with the actual price
          // warranty: '1 year' (optional, if applicable)
        }
      },
      {
        id: 3,
        src: egg4,  // Replace with actual image source
        name: 'Ice Cream Candy Machine',
        description: 'The Ice Cream Candy Machine is designed for producing high-quality ice cream and candy with efficiency. Perfect for commercial use, it has a production capacity of 50 liters and is equipped with reliable Emerson/Danfoss compressors to ensure consistent cooling and high performance. Ideal for ice cream parlors, cafes, and large-scale catering setups.',
        specification: {
          typeOfMachine: 'Ice Cream Candy Machine',
          productionCapacity: '50 Litres',
          compressor: 'Emerson/Danfoss',
          // price: '₹ [Insert Price]',  // Update with the actual price
          // warranty: '1 year' (optional, if applicable)
        }
      }
    ]
  },
  {
    id: 6,
    src: saug,
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
    relatedProducts: [
      {
        id: 0,
        src: saug1,  // Replace with actual image source
        name: 'Commercial Sausage Vacuum Filler Making Machine',
        description: 'The Commercial Sausage Vacuum Filler Making Machine is a high-capacity, efficient tool designed for industrial-scale sausage production. With a large volume capacity of 250L and a maximum filling capacity of 4000 kg/h, this machine is built for high-speed operations and large production volumes, making it perfect for meat processing plants and commercial kitchens.',
        specification: {
          model: 'AK-6200',
          dimension: '2460 x 1360 x 2255 mm',
          voltage: '380V',
          power: '9.5 kW',
          volume: '250L',
          maxFillingCapacity: '4000 kg/h',
          weight: '1350 kg',
          warranty: '1 year',
        }
      },
      {
        id: 1,
        src: saug2,  // Replace with actual image source
        name: 'Medium-Sized Sausage Filling Machine',
        description: 'The Medium-Sized Sausage Filling Machine is an automatic electric piston filler designed for efficient sausage production. With a capacity of 100-500 kg/h and customizable features, this machine is ideal for medium-scale operations. It is perfect for businesses looking to streamline sausage production with precise filling and high output.',
        specification: {
          model: 'Xuanhua',
          dimension: '1500 x 565 x 1300 mm',
          voltage: '380V',
          power: '0.75-2.5 kW',
          capacity: '100-500 kg/h',
          hoopVolume: '26-57 L',
          quantitativeRange: '30-1000 g',
          automaticGrade: 'Automatic',
          productionCapacity: '200 sets/month',
        }
      },
      {
        id: 2,
        src: saug3,  // Replace with actual image source
        name: 'Banana Wafer Slicer Machine Single Speed',
        description: 'The Banana Wafer Slicer Machine Single Speed is designed for efficiently slicing bananas into uniform wafers or chips. Ideal for snack manufacturing, commercial kitchens, and food processing, this machine ensures high precision and productivity, with a capacity of up to 300 kg per hour.',
        specification: {
          motorPower: '1 HP',
          voltage: '220 V',
          frequency: '50 Hz',
          productionCapacity: '250 to 300 kg/hour',
          bodyMaterial: 'Stainless Steel (1.5 mm)',
          cuttingRotor: '3 (round, oval & long patta)',
          dimensions: '36 x 15 x 26 inches',
          machineWeight: '45 kg',
          warranty: '1 Year',
          // price: '₹ [Insert Price]',  // Update with actual price
          // origin: '[Insert Origin]',  // Optional: Add origin if necessary
        }
      },  
      {
        id: 3,
        src: saug4,  // Replace with actual image source
        name: 'Commercial Potato Peeling Machine',
        description: 'The Commercial Potato Peeling Machine is designed to streamline the potato peeling process for bulk food preparation. Ideal for restaurants, catering services, and food processing units, this high-capacity machine enhances productivity, reduces labor, and ensures consistent results.',
        specification: {
          power: '2 HP',
          voltage: '220-240V',
          frequency: '50 Hz',
          capacity: '30 kg',
          durationPerBatch: '8-50 mins',
          bodyMaterial: 'Stainless Steel',
          peelingMaterials: 'Potatoes',
          weight: '95 kg',
          // price: '₹ [Insert Price]',  // Update with actual price
          // origin: '[Insert Origin]',  // Optional: Add origin if necessary
        }
      },      
    ]
  },
  {
    id: 7,
    src: san,
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
    relatedProducts: [
      { id: 1, src: 'images/1.webp', name: 'Automatic Sausage Filling Machine' },
      { id: 2, src: 'images/2.webp', name: 'Rotary Rack Oven 32 Trays Diesel / Gas' },
      // Add other related products here
    ]
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