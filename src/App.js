import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
