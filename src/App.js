import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar/NavigationBar";
import Home from "./pages/Home/Home";
import Error from "./pages/NotFound/Error";
import ProductList from "./pages/ProductList/ProductList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Statistics from "./pages/Statistics/Statistics";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
