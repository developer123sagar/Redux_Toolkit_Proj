import CartProducts from "./Components/CartProducts";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Product />} />
        <Route path='/cartproduct' element={<CartProducts />} />
      </Routes>
    </>
  );
}

export default App;
