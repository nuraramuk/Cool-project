import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Commercial_Gas from './components/kitchenEquipments/Commercial_Gas';
import IdlySteamer from './components/FoodPreparation/IdlySteamer';
import DhoklaSteamer from './components/FoodPreparation/DhoklaSteamer';
import CommercialSteamer from './components/FoodPreparation/CommercialSteamer';
import MilkSteamer from './components/FoodPreparation/MilkStreamer';
import DeepFry from './components/BakeryEquipment/DeepFry';
import DonutFry from './components/BakeryEquipment/DonutFry';
import PressureFry from './components/BakeryEquipment/PressureFry';
import GrillChicken from './components/ChickenBarbecueMechine/GrillChicken';
import Shawarma from './components/ChickenBarbecueMechine/Shawarma';
import Alfaham from './components/ChickenBarbecueMechine/Alfaham';
import Barbeque from './components/ChickenBarbecueMechine/Barbeque';
import Commercial_Electric from './components/kitchenEquipments/Commercial_Electric';
import Commerical_induction from './components/kitchenEquipments/Commerical_Induction';
import Infrared_CookTop from './components/kitchenEquipments/Infrared-CookTop';
import Grinder from './components/kitchenEquipments/Grinder';
import PreparationMachines from './components/FoodPreparation/PreparationMachines';
import Oven from './components/BakeryEquipment/Oven';
import BusinessMachines from './components/BusinessType/BusinessMachies';
import Cart from './components/BusinessType/Cart';
import Showcase from './components/BusinessType/Showcase';
import Beverage from './components/Onclick/Beverage';
import CommercialMachines from './components/Onclick/CommercialMachines';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <BrowserRouter>
    <Navbar onSearchChange={handleSearchChange} />
      <Routes>
        <Route path="/" element={<LandingPage searchTerm={searchTerm} />} />
        <Route path="/Commerical_Gas" element={<Commercial_Gas />} />
        <Route path="/Commerical_Electric" element={<Commercial_Electric />} />
        <Route path="/Commerical_Induction" element={<Commerical_induction />} />
        <Route path="/Infrared-CookTop" element={<Infrared_CookTop />} />
        <Route path="/IdlySteamer" element={<IdlySteamer/>} />
        <Route path="/DhoklaSteamer" element={<DhoklaSteamer/>}/>
        <Route path='/CommercialSteamer' element={<CommercialSteamer/>}/>
        <Route path='/MilkSteamer' element={<MilkSteamer/>} />
        <Route path='/DeepFry' element={<DeepFry/>} />
        <Route path='/DonutFry' element={<DonutFry/>} />
        <Route path='/PressureFry' element={<PressureFry/>}/>
        <Route path='/GrillChicken' element={<GrillChicken/>}/>
        <Route path='/Shawarma' element={<Shawarma/>}/>
        <Route path='/Alfaham' element={<Alfaham/>}/>
        <Route path='/Barbeque' element={<Barbeque/>}/>
        <Route path='/Grinder' element={<Grinder/>}/>
        <Route path='/PreparationMachines' element={<PreparationMachines/>}/>
        <Route path='/Oven' element={<Oven/>}/>
        <Route path='/BusinessMachines' element={<BusinessMachines/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Showcase' element={<Showcase/>}/>
        <Route path='/Beverage' element={<Beverage/>}/>
        <Route path='/CommercialMachines' element={<CommercialMachines/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
export default App;