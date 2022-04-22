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
  const filteredProducts = useSelector(
    (state) => state.productReducer.filteredProducts
  );
  const products = useSelector((state) => state.productReducer.products);
  // const filteredSizes = useSelector((state) => state.productReducer.sizes);
  // const keyword = useSelector((state) => state.productReducer.keyword);

  console.log(products);
  return (
    <div>
      <Filter />
      <ul className="products">
        {
          /* {filteredSizes.length < 0 && keyword === ""
          ? products.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          : filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })} */

          filteredProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        }
      </ul>
    </div>
  );
};

export default ProductList;
