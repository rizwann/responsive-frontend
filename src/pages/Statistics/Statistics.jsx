import { Bar, Line } from "react-chartjs-2";
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

  const label = Object.keys(popularBrand).map((key) => key);

  console.log(label);

  const values = Object.values(popularBrand);
  console.log(values);

  const chartData = {
    labels: [...label],
    datasets: [
      {
        label: "Population",
        data: [...values],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  //console.log(popularBrand);

  //mean price by brand offering the clothing size 32

  const averagePriceByBrandProducts = products.filter((pd) =>
    pd.sizes.includes("32")
  );
  const averagePriceByBrand = averagePriceByBrandProducts.reduce(
    (acc, product) => {
      if (acc.hasOwnProperty(product.brand)) {
        acc[product.brand] += product.priceR ? product.priceR : product.priceO;
      } else {
        acc[product.brand] = product.priceR ? product.priceR : product.priceO;
      }
      return acc;
    },
    {}
  );

  const productCountByBrand = averagePriceByBrandProducts.reduce(
    (acc, product) => {
      if (acc.hasOwnProperty(product.brand)) {
        acc[product.brand] += 1;
      } else {
        acc[product.brand] = 1;
      }
      return acc;
    },
    {}
  );

  const meanPriceByBrand = Object.keys(averagePriceByBrand).reduce(
    (acc, key) => {
      acc[key] = averagePriceByBrand[key] / productCountByBrand[key];
      return acc;
    },
    {}
  );

  console.log(meanPriceByBrand);

  //which brand offers the largest selection of sizes to the customer

  return <div>...</div>;
};

export default Statistics;
