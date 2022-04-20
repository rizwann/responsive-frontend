import { useEffect, useState } from "react";

import Product from "../../components/Product/Product";
import fetchProduct from "../../utils/fetchProduct";
import "./ProductList.css";

const ProductList = () => {
  const url = "fid-recruiting/fid-task-4-ffront-products.json";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProduct(url);
      setProducts(data);
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
