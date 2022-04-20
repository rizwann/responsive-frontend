import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/Product/Product";
import { getProductsAsync } from "../../redux/actions/productActions";

import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);
  const products = useSelector(
    (state) => state.productReducer.filteredProducts
  );

  return (
    <div>
      <Filter />
      <ul className="products">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
