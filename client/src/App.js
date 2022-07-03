import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Pages/Home";
import Catalog from "./pages/Pages/Catalog";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product";
import Shopping from "./pages/Shopping/Shopping";
import Delivery from "./pages/Delivery/Delivery";
import Saved from "./pages/Saved/Saved";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
