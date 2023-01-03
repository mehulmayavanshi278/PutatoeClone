import { createContext, useState } from "react";
import { Route , Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Dthrecharge from "./components/Dthrecharge";
import Elect from "./components/Elect";
import Fulllocn from "./components/Fulllocn";
import Gas from "./components/Gas";
import Home from "./components/Home";
import Loan from "./components/Loan";
import Mrecharge from "./components/Mrecharge";
import Notify from "./components/Notify";
import Seemore from "./components/Seemore";
import Water from "./components/Water";
export const datacontext = createContext();

function App() {
  const [location , setLocation] = useState(" Harahva Fatak Nirala Nagar, Gorakhpur , Uttar pradesh , 2730004 , India");


  return (
   <>
   <datacontext.Provider value={{location , setLocation }}>
   <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/fulllocn" element={<Fulllocn/>} />
    <Route exact path="/notify" element={<Notify/>} />
    <Route exact path="/cart" element={<Cart/>} />
    <Route exact path="/seemore" element={<Seemore/>} />
    <Route exact path="/mrecharge" element={<Mrecharge/>} />
    <Route exact path="/dthrecharge" element={<Dthrecharge/>} />
    <Route exact path="/loan" element={<Loan/>} />
    <Route exact path="/elect" element={<Elect/>} />
    <Route exact path="/gas" element={<Gas/>} />
    <Route exact path="/water" element={<Water/>} />
  </Routes>
   </datacontext.Provider>
 
   </>
  );
}

export default App;
