import { useSelector } from "react-redux";

const Statistics = () => {
  const products = useSelector((state) => state.productReducer.products);

  // Products under 40 Euros
  const filteredProducts = products.filter(
    (product) => (product.priceR ? product.priceR : product.priceO) < 40
  );

  const count = filteredProducts.length;

  const popularBrand = filteredProducts.reduce((acc, product) => {
    if (acc.hasOwnProperty(product.brand)) {
      acc[product.brand] += 1;
    } else {
      acc[product.brand] = 1;
    }
    return acc;
  }, {});

  console.log(popularBrand);
  console.log(products);

  const averagePriceByBrand = products.filter((pd) => pd.sizes.includes("32"));

  console.log(filteredProducts);

  return <div>{"bal"}</div>;
};

export default Statistics;
