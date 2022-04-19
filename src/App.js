import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Product/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
