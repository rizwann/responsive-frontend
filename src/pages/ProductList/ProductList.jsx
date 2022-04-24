import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getProductsAsync } from "../../redux/actions/productActions";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/Product/Product";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);
  const filteredProducts = useSelector(
    (state) => state.productReducer.filteredProducts
  );

  return (
    <div>
      <Filter />
      <ul className="products">
        {filteredProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
