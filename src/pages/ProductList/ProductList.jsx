import { useEffect, useState } from "react";

import Product from "../../components/Product/Product";
import fetchProduct from "../../utils/fetchProduct";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProduct();
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="products">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
