import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import "./Statistics.css";

const Statistics = () => {
  const products = useSelector((state) => state.productReducer.products);

  // Products under 40 Euros
  const filteredProducts = products.filter(
    (product) => (product.priceR ? product.priceR : product.priceO) < 40
  );

  const popularBrand = filteredProducts.reduce((acc, product) => {
    if (acc.hasOwnProperty(product.brand)) {
      acc[product.brand] += 1;
    } else {
      acc[product.brand] = 1;
    }
    return acc;
  }, {});

  const label = Object.keys(popularBrand).map((key) => key);

  const values = Object.values(popularBrand);

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
  const averageLabels = Object.keys(meanPriceByBrand).map((key) => key);
  const averageValues = Object.values(meanPriceByBrand);

  //which brand offers the largest selection of sizes to the customer

  return (
    <div className="statistics-container">
      <div className="statistics-bar-container">
        <BarChart values={values} chartLabels={label} />
        <center>
          <span>
            <b>Figure: </b>
            Bar Chart representing number of products by brand that cost less
            than 40 EUR{" "}
          </span>
        </center>
      </div>
      <div className="statistics-bar-container">
        <BarChart
          values={averageValues}
          chartLabels={averageLabels}
          variant="average"
        />
        <center>
          <span>
            <b>Figure: </b>
            Bar Chart representing the lowest average price for customers
            wearing size “32” by brand
          </span>
        </center>
      </div>
    </div>
  );
};

export default Statistics;
